const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./Todo");

mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser:true})

mongoose.connection.once('open', () => {
    console.log("MongoDb connected")
})

const PORT = 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    Todo.find((err, todos) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(todos);
        }
    });
});

app.post("/create", (req, res) => {
    const todo = new Todo({
        text: req.body.text,
        name: req.body.name,
        surname: req.body.surname
    })
    todo.save()
    .then((todo) => {
        res.json(todo);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) =>{
    const id = req.params.id;
    console.log('irooms ', req.body)
    Todo.findById(id, (err, todo) => {
      res.json(todo)
    });
});

app.put("/:id", (req, res) =>{
    const id = req.params.id;
    console.log('todo', req.body)
    Todo.findById(id, (err, todo) => {
    if(!todo){
        res.status(404).send("Todo not found")
    }
    else{
        todo.text = req.body.text,
        todo.name = req.body.name,
        todo.surname = req.body.surname

        todo.save().then(todo =>{
            res.json(todo)
        }).catch(err => res.status(500).send(err.message));
    }
    });
});

app.delete("/:id", (req, res) =>{
    const id = req.params.id;
    Todo.findByIdAndRemove(id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.id
        });
    });
})
app.listen(PORT,() =>{
    console.log("Server is running on " + PORT)
})