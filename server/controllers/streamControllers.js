const {Streams} =require("../models/streams")
exports.get_streams=(req,res)=>{
   Streams.find({}).then(streams=>{res.send(streams)})
}
exports.get_mystreams=(req,res)=>{
   
    Streams.find({userId:req.body.id}).then(stream=>{res.send(stream)})
}
exports.add_stream=(req,res)=>{
    
    const stream =new Streams(
        req.body
    )
    stream.save().then(doc=>{res.send(doc)})
}
exports.get_stream=(req,res)=>{
    Streams.findOne({_id:req.params.id}).then(stream=>res.send(stream))
}
exports.delete_stream=(req,res)=>{
    console.log(req.params)
    Streams.findOneAndRemove({_id:req.params.id}).then(stream=>{res.send(req.params.id)})
}