const express = require('express');
const Joi = require('joi');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

const courses = [
    {id:1, name: 'MongoDB'},
    {id:2, name: 'Express'},
    {id:3, name: 'React'},
    {id:4, name: 'Node'}

]

app.get('/', (req,res)=>{
    res.send("Hello");
})

app.get('/api/courses', (req,res)=>{
    res.send(courses);
});

// Read (R)
app.get('/api/courses/:id', (req,res) =>{
    // res.send(req.params.id);
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) 
    {
        res.status(404).send("The Course with the given ID is not found");
        return
    }
    else{
        res.send(course);
    }
})

// app.get('/api/posts/:year/:month', (req,res)=>{
//     res.send(req.params); //Write this into URL http://127.0.0.1:8000/api/posts/2018/1 
// })

// Create (C)
app.post('/api/courses',(req,res) =>{

    if(error)
    {
        res.status(400).send(error.details[0].message);
        return;
    }
    // const schema ={
    //     name: Joi.string().min(3).required()
    // };

    // const result = Joi.validate(req.body, schema);
    // // console.log(result);

    // if(result.error)
    // {
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }

    // if(!req.body.name || req.body.name.length<3)
    // {
    //     //400 bad request
    //     res.status(404).send("Name isn't valid should be minimum 3 characters");
    //     return;
    // }


    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

//Update (U)
app.put('/api/courses/:id', (req,res)=>{
    // Look up the course
    //If not existing, return 404
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) 
    {
        res.status(404).send("The Course with the given ID is not found");
        return;
    }

    //Validate
    // const schema ={
    //     name: Joi.string().min(3).required()
    // };
    // const result = Joi.validate(req.body, schema);
    // const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);
    //If invalid, return 400 - Bad request
    if(error)
    {
        res.status(400).send(error.details[0].message);
        return;
    }

    //Update course
    course.name = req.body.name;
    //Return the updated course
    res.send(course);
});

function validateCourse(course){
    const schema ={
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

app.delete('/api/courses/:id', (req,res)=>{
    //look up the course
    //not existing, return 404
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) 
    {
        res.status(404).send("The Course with the given ID is not found");
        return;
    }

    //delete
    const index = courses.indexOf(course)
    courses.splice(index,1);
    //return the same course

    res.send(course);
})


app.listen(port, ()=>{
    console.log(`server is running at the port no ${port}`);
})