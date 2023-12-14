const mongoose = require("mongoose")




//create our schema or database here



const ProductsSchema = new mongoose.Schema(
    {
        Title: {type : String , required : true , unique : true},
        Desc :{type : String , required : true , },
        img:{ type :String,required :true},
        category:{ type :Array},
        Price:{ type :String,required :true},
        ancPrice:{ type :Number,required :true},
    //    createdAt : Date.now()
    },{
        timestamps : true,
    }
);
module.exports= mongoose.model("User ", ProductsSchema);
