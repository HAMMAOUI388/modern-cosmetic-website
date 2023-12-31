const { json} = require("express");
const user = require("../models/user");
const CryptoJS = require("crypto-js")
const router = require("express").Router();
const jwt = require ("jsonwebtoken");

//REGISTER
router.post("/register", async(req, res) => {

     const newUser =new user({
        username: req.body.username , 
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        email: req.body.email,
     })
     try{
         const savedUser = await newUser.save();
         res.status(201).json(savedUser);
        }catch(err)
        {
            res.status(500).json(err);
        }

})

//LOGIN
router.post("/login", async(req, res) => {
    try{
        const user = await User.findOne({username : req.body.username});

        !user && res.status(401).json("wrong credentials!");

        const hashPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const originalPassword= hashPassword.toString(CryptoJS.enc.Utf8);

        originalPassword !==req.body.password && 
          res.status(401).json("wrong credentials!");
           
          const accessToken = jwt.sign({
            id: user._id, 
            isAdmin:user.isAdmin,
          },process.env.JWT_SEC , {expiresIn : "3d"})


        const { password , ...others}=user._doc;


        res.status(200).json({...others, accessToken});
    }catch(err){
        res.status(500).json(err)
    }
})

 module.exports = router