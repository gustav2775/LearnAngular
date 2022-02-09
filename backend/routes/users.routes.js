const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');
const userService = require('../services/user.service.js');

router.use(async(req, res, next) => {
    const users = await userService.get();
    if (users) {
        req.users = users;
        next();
    } else {
        res.send(500, { err: 'Ошибка сервера' });
    }
})
router.route('/')
    .get(UserController.get)
    .post(UserController.add)
    .put(UserController.update)
    .delete(UserController.delete)
    
module.exports = router;