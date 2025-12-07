"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
let todos = [];
app.get('/todos', (req, res) => {
    res.json(todos);
});
app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todos.indexOf(todo) === id);
    if (index !== -1) {
        todos[index] = updatedTodo;
        res.json(updatedTodo);
    }
    else {
        res.status(404).send('Todo not found');
    }
});
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todos.indexOf(todo) === id);
    if (index !== -1) {
        todos.splice(index, 1);
        res.status(204).send();
    }
    else {
        res.status(404).send('Todo not found');
    }
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
