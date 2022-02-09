const todoService = require('../services/todo.service.js')

class TodoController {
    constructor() { }
    get = async (req, res) => {
        const todos = await todoService.get();
        if (req.query.id) {
            const todo = todos.find((el) => el.id === req.query.id);
            if (todo) {
                res.send({ results: todo });
            } else {
                res.send(400, { err: 'Заметка не найдена' });
            }
        } else {
            res.send({ results: todos });
        }
    }
    add = async (req, res) => {
        const todos = await todoService.get();
        const id = todos[todos.length - 1] ? parseInt(todos[todos.length - 1].id + 1) : 0
        const new_todo = {
            id: id,
            title: req.body.title,
            description: req.body.description,
            date: new Date(),
            status: false,
        };
        todos.push(new_todo);
        const request = await todoService.post(todos);
        if (request) {
            res.send({ result: new_todo });
        }
    }
    update = async (req, res) => {
        const todos = await todoService.get();
        const todo = req.body.element;
        const todo_index = todos.findIndex(i => Number(i.id) === Number(todo.id));
        if (todo_index > -1) {
            Object.entries(req.body.values).forEach(([key, value]) => {
                if (value !== '') {
                    todo[key] = value;
                } else {
                    res.send(400, JSON.stringify({ err: key, massege: "Поле не может быть пустым" }));
                }
            })
            todos.splice(todo_index, 1, todo);
            const request = await todoService.post(todos);
            if (request) {
                res.send(JSON.stringify({ result: todo }));
            } else {
                res.send(400, JSON.stringify({ err: "Ошибка обновления" }));
            }
        } else {
            res.send(400, JSON.stringify({ err: "Заметка не существует" }));
        }
    }
    delete = async (req, res) => {
        const todos = await todoService.get();
        const todo = todos.find((el) => el.id === Number(req.query.id));
        if (todo) {
            const todo_index = todos.indexOf(todo);
            todos.splice(todo_index, 1);
            const request = await todoService.post(todos);
            if (request) {
                res.send(JSON.stringify({ massege: "Заметка удалена" }));
            }
        } else {
            res.send(400, JSON.stringify({ err: "Заметка не существует" }));
        }
    }
}

module.exports = new TodoController();