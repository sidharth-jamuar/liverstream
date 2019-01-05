const express=require("express")
const mongoose=require("mongoose")
const {Streams}= require("./models/streams")
const app=express()
const bodyParser=require("body-parser")

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/streams",{ useNewUrlParser: true })
app.use(bodyParser.json())

require("./routes/streamRoutes")(app)
const PORT=process.env.PORT || 3004;

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
})