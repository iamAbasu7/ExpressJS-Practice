const express = require('express');
const app = express();
const path = require('path');

const pathName = "../public";
const templatepath = path.join(__dirname, "./templates");

// to set the view engine
//To serve dynamic page
app.set('view engine','hbs');
app.set('views', templatepath);

app.get("",(req,res) =>{
    res.render("index", {
        name: "Rahul"
    })
})
app.get("/about",(req,res)=>{
    res.render("about");
})

//To serve static page
app.use(express.static(pathName))

app.listen(8000, ()=>{
    console.log("Listening to the port number 8000");
})