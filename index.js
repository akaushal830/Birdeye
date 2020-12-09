const express = require('express');
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')


const app = express();

app.use(express.static(__dirname + '/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000 , () => {
    console.log('Listening for ToDos on port 3000.....');
});

let tasks = [
    {
        taskId: uuid(),
        task : 'Complete an assignment',
        taskStatus : 'Pending',
        taskCreationDate: new Date(),
        taskLastModified: new Date()
    },
    {
        taskId : uuid(),
        task : 'Play games',
        taskStatus : 'Pending',
        taskCreationDate: new Date(),
        taskLastModified: new Date()
    }
];

app.get('/todo' , (req , res) => {
    //res.send('Getting a new todo');
    res.render('todos/home' , { tasks });
});

app.post('/todo' , (req , res) => {
    const { task , taskStatus} = req.body;
    tasks.push({ task , taskStatus , taskId : uuid() , taskCreationDate : new Date() , taskLastModified : new Date() });
    res.redirect('/todo');
});

app.get('/todo/createtask' , (req , res) => {
    res.render('todos/newtask');
});

app.get('/todo/:id' , (req , res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.taskId === id);
    console.log(task);
    res.render('todos/showdetails' , { task });
});

app.get('/todo/:id/edit', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.taskId === id);
    res.render('todos/edit', { task });
});

app.patch('/todo/:id', (req, res) => {
    const { id } = req.params;
    const newTask = tasks.find(t => t.taskId === id);

    const updatedTask = req.body.task;
    const updatedStatus = req.body.taskStatus;
    
    newTask.task = updatedTask;
    newTask.taskStatus = updatedStatus;
    newTask.taskLastModified = new Date();
    res.redirect('/todo');
});

