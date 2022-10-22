const express = require('express');
const path = require("path");

const app = express();
const port = 8000;
// For serving statics file
app.use('/static', express.static('static'))

app.set('view engine', 'pug');

//set the views directory
app.set('views',path.join(__dirname,'views'))

app.get('/demo', (req, res) => {
    res.render('demo', { title: 'Hey', message: 'Hello there!' })
  })

app.get("/", (req,res)=>{
    res.status(200).send("This is my first express app");
});

app.get("/about", (req,res)=>{
    res.status(404).send("This is about page");
});
app.post("/about", (req,res)=>{
    res.send("This a post request of about page");
})

app.listen(port,()=>{
    console.log(`The ap started ar port ${port}`)
})