const mongoose = require("mongoose")




//create our schema or database here



const OrderSchema = new mongoose.Schema(
    {
        userId: {type : String , required : true , unique : true},
        products :[
            {
                productId:{ type:String },
                quantity : {type: Number , default:1 },
            },
           
        ],
        Amount:{
            type: Number , required : true,
        },
        address : {
            type :  Object, required : true,
        },
        status:{type: String , default :"pending"},



    },
    {
        timestamps : true,
    }
);
module.exports= mongoose.model("User ", OrderSchema);
