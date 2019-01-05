 const controller=require("../controllers/streamControllers")
module.exports=app =>{
   
    app.get("/streams",controller.get_streams)
    app.post("/addStream",controller.add_stream)
    app.get("/stream/:id",controller.get_stream)
    app.delete("/stream/:id",controller.delete_stream)
    app.post("/mystreams",controller.get_mystreams)
}