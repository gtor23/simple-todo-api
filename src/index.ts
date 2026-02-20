import express, { Request, Response } from 'express';

const app = express();
const port = 3000;  

app.use(express.json());

interface Todo {
    task: string;
}

let todos: Todo[] = [];

app.get('/todos', (req: Request, res: Response) => {
    res.json(todos);
});

app.post('/todos', (req: Request, res: Response) => {
    const newTodo: Todo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const updatedTodo: Todo = req.body;
    const index: number = todos.findIndex(todo => todos.indexOf(todo) === id);

    if (index!== -1) {
        todos[index] = updatedTodo;
        res.json(updatedTodo);
    }
    else {
        res.status(404).send('Todo not found');
    }
});

app.delete('/todos/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const index: number = todos.findIndex(todo => todos.indexOf(todo) === id);

    if (index!== -1) {
        todos.splice(index, 1);
        res.status(204).send();
    }
    else {
        res.status(404).send('Todo not found');
    }
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})