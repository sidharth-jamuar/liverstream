const express=require("express")
const mongoose=require("mongoose")
const {Streams}= require("./models/streams")
const config=require("./config/config").get(process.env.NODE_ENV)
const app=express()
const bodyParser=require("body-parser")
//init database with mongodb

mongoose.Promise=global.Promise;
mongoose.connect(config.DATABASE,{ useNewUrlParser: true })
app.use(bodyParser.json())
app.use(express.static('client/build'))
require("./routes/streamRoutes")(app)
const PORT=process.env.PORT || 3004;

if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'../client','build','index.html'))
    })
}
app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
})