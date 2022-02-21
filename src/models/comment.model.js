const mongoose = require("mongoose")
const { modelName } = require("./post.model")

const commentSchema = new mongoose.Schema({
    boody : {type : String, required: true},
},{
    timestamps:true,
    versionKey:false,
})

modelName.exports = mongoose.model("comment", commentSchema)