const userService = require('../services/user.service.js')

class LoginController {
    constructor() { }
    login = async (req, res) => {
        const users = await userService.get();
        const user = users.find((el) => el.login === req.body.login & el.password === req.body.password);
        if (user) {
            res.send({ result: user })
        } else {
            res.send(404, JSON.stringify({ err: "Неверный логин или пароль" }));
        }
    }
}

module.exports = new LoginController()