//imports
const express = require("express");
const  mongoose =require('mongoose');
const cors = require('cors');

const Clients = require('./model/Clients.js');

const app = express();
const port = process.env.PORT || 8000;

//middlewares

app.use(express.json())
app.use(cors())

//db connection
mongoose.connect("mongodb://localhost:27017/alsiraj", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("UNABLE TO CONNECT DB................");
})

app.get('/', (req, res)=>{
    console.log('get request')
    res.send("App is running fine successfully....")
});

//server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})