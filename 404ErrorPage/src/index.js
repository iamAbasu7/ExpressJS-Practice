const express = require('express');
const path = require('path')
const app = express();
//const pathName = path.join(__dirname,"../public/errorpage");
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.send("This is the Home Page");
})

app.get('/about',(req,res)=>{
    res.send("This is the About Page");
})

// app.use(express.static(pathName))
app.get('*',(req,res)=>{
    res.render('errorpage')
})

app.listen(8000 , ()=>{
    console.log("Listening to the port 8000")
})