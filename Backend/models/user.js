const mongoose = require("mongoose")




//create our schema or database here



const UserSchema = new mongoose.Schema(
    {
        username: {type : String , required : true , unique : true},
        email :{type : String , required : true , unique : true},
        password:{ type :String,required :true},
        isAdmin : {
            type : Boolean,
            default  : false,
        },
    //    createdAt : Date.now()
    },{
        timestamps : true,
    }
);
module.exports= mongoose.model("User ", UserSchema);