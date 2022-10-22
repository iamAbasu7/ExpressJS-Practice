const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.status(200).write("<h1>Hello From Home</h1>");
    res.status(200).write("<h3> This is the H3 tag</h3>");
    res.status(200).write("<h2> This is the H2 tag</h2>");
    res.send();
})

//To parse json Data
// app.get('/temp',(req,res)=>{
//     res.send([{
//         name:'Antar',
//         id: 2,
//         work: 'Engineer'
//     },
//     {
//         name:'ABC',
//         id: 1,
//         work: 'XYZ'
//     },
//     {
//         name:'GDB',
//         id: 5,
//         work: 'SDK'
//     },

//     ])
// })
app.get('/temp',(req,res)=>{
    res.json([{
        name:'Antar',
        id: 2,
        work: 'Engineer'
    },
    {
        name:'ABC',
        id: 1,
        work: 'XYZ'
    },
    {
        name:'GDB',
        id: 5,
        work: 'SDK'
    },
    {
        name: null,
        id: undefined,
        work: 'SDK'
    },

    ])
})
//res.send and res.json this ywo methods are identical  but res.json will also convert non objects, such as null and undefined, which are not valid JSON.

app.listen(8000,()=>{
    console.log("Server is running at the port 8000");
})