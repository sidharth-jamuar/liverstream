const mongoose=require("mongoose")

const Schema=mongoose.Schema

const streamSchema=new Schema({
    title:{type:String},
    description:{type:String},
    userId:{type:String}
})

const Streams=mongoose.model("streams",streamSchema)
module.exports={Streams}