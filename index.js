const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser  =  require('body-parser');
const userRouter = require('./routers/user.router');
const todoRouter = require('./routers/todo.router');
const port = 2500;

app.use(bodyParser.json());

app.listen(port, ()=>{
    console.log(`Express Server is listining on Port ${port}`);
})

app.get('/', (req, res)=>{
    res.status(200);
    res.send('This is the Home Page');
})

app.use('/users', userRouter);

app.use('/todos', todoRouter);

mongoose.connect('mongodb+srv://knagaram:ADPadp@123@kashinath.fj5aj.mongodb.net/Todos?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if (res){
        console.log('Database has been connected successfully');
    } else {
        console.log(err);
    }
})
