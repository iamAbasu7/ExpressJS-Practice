const express = require('express');
const app = express();

const pathName = "../public";

app.use(express.static(pathName))

app.listen(8000, ()=>{
    console.log("Listening to the port number 8000");
})