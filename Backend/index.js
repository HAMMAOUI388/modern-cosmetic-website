const express = require("express");
const app =express();
const mongoose= require("mongoose");
const dotenv = require("dotenv");
const userRoute  = require("./routes/users.js");
const authRoute  = require("./routes/auth.js");
const ProductsRoute  = require("./routes/product.js");
const CartRoute  = require("./routes/cart.js");
const OrderRoute  = require("./routes/order.js");

dotenv.config()

mongoose 
.connect(process.env.MONGO_URL)
.then(()=>console.log("db connected secsseccfuly !"))
.catch((err)=>{
    console.log(err);
})  ;


app.use(express.json());
app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute);
app.use("/api/products" ,ProductsRoute);
app.use("/api/cart" ,CartRoute);
app.use("/api/order" ,OrderRoute);


app.listen( process.env.PORT  || 5000, ()=>{
    console.log("backend connected secsefuly !");
});

