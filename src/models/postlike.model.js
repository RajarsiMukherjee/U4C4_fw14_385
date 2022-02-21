const mongoose = require("mongoose")

const postlikeSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Typees.ObjectId,
        ref : "post",
        required: true
    } 
},{
    timestamps:true,
    versionKey:false,
})