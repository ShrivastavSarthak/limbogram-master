require('dotenv').config();
const express = require("express")
require("./db")
const port = 5000;
const cors =require("cors")
const bodyParser = require("body-parser") 
;

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })); 



app.use('/api/auth',require('./routes/auth'));
app.use("/api/users",require('./routes/users'));
app.use('/api/post',require('./routes/post'));



app.listen(port,()=>{
    console.log("listening on port" + port);
})
