const express = require('express');
const app = express();

const PORT = 8000;

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to the Home Page");
});

app.get("/about",(req,res)=>{
    res.send("Welcome to the about page");
});

app.get("/contact",(req,res)=>{
    res.send("Welcome to the Contact Us Page");
});

app.get("/temp",(req,res)=>{
    res.send("This is our temp page");
});

app.listen(PORT, ()=>{
    console.log(`Server starting at the ${PORT}`);
})