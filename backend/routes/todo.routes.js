const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController.js');
const todoService = require('../services/todo.service.js');

router.use(async(req, res, next) => {
    const todos = await todoService.get();
    if (todos) {
        req.todos = todos;
        next();
    } else {
        res.send(500, { err: 'Ошибка сервера' });
    }
})
router.route('/')
    .get(todoController.get)
    .post(todoController.add)
    .put(todoController.update)
    .delete(todoController.delete)
    
module.exports = router;