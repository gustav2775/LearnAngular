const userService = require('../services/user.service.js')

class LoginController {
    constructor() {}
    login = async (req, res) => {
        const users = JSON.parse(await userService.get());
        const find = users.find((el) => el.login === req.body.login & el.password === req.body.password);
        if (find) {
            res.send(find)
        } else {
            res.send(404, JSON.stringify({ err: "Неверный логин или пароль" }));
        }
    }
}

module.exports = new LoginController()