const express = require('express');
const app = express();
const PORT =8000;

app.get('/', (req,res)=>{
    res.send("Hello World from Express");
});

app.get('/about', (req,res)=>{
    res.send("This is our about page");
});

app.listen(PORT, ()=>{
    console.log(`listening to the port ${PORT}`);
})