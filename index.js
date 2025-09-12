const express = require("express");

//initializing app
const app = express();
const PORT = 5000;


//view engine 
app.set("view engine","ejs");

app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`);
})