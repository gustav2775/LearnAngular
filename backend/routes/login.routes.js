const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController.js');
const userService = require('../services/user.service.js')

router.use(async (req, res, next) => {
    const users = await userService.get();
    if (users) {
        req.users = users;
        next();
    } else {
        res.send(500, { err: 'Ошибка сервера' });
    }
})

router.route('/')
    .post(LoginController.login)

module.exports = router;