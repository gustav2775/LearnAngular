const userService = require('../services/user.service.js');
const paginate_on_array = require('../utils/pagination_on_array')
class UserController {
    constructor() { }
    get = async (req, res) => {
        const users = await userService.get();
        if (req.query.id) {
            const user = users.find((el) => Number(el.id) === Number(req.query.id) & el.role !== 'admin');
            if (user) {
                res.send({ result: user });
            } else {
                res.send(400, { err: 'Пользователь не найден' });
            }
        } else {
            const admin = users.find((el) => el.role === 'admin');
            const index_admin = users.indexOf(admin);
            users.splice(index_admin, 1);
            if (req.query.page) {
                const user_with_paginate = paginate_on_array(users, req.query.page_size, req.query.page);
                res.send(user_with_paginate);
            } else {
                res.send({ results: users });
            }
        }
    }
    add = async (req, res) => {
        const users = await userService.get();
        const find = users.find(el => el.login === req.body.login | el.email === req.body.email);
        if (find) {
            res.send(404, { err: "Пользователь с таким логином или почтой уже создан" });
        } else {
            const new_user = {
                id: parseInt(users[users.length - 1].id + 1),
                login: req.body.login,
                password: req.body.password,
                fullname: {
                    first: req.body?.fullname?.first,
                    last: req.body?.fullname?.last
                },
                email: req.body.email,
                role: 'user'
            };
            users.push(new_user);
            const request = await userService.post(users);
            if (request) {
                res.send({ result: new_user });
            }
        }
    }
    update = async (req, res) => {
        const users = await userService.get();
        const user = users.find((el) => Number(el.id) === Number(req.body.id) & el.role !== 'admin');
        if (user) {
            Object.entries(req.body.values).forEach(([key, value]) => {
                user[key] = value;
            })
            const user_index = users.indexOf(user);
            users.splice(user_index, 1, user);
            const request = await userService.post(users);
            if (request) {
                res.send(JSON.stringify({ result: user }));
            }
        } else {
            res.send(400, JSON.stringify({ err: "Пользователь не найден" }));
        }
    }
    delete = async (req, res) => {
        const users = await userService.get();
        const find = users.find((el) => Number(el.id) === Number(req.body.id));
        if (find) {
            const user_index = users.indexOf(find);
            users.splice(user_index, 1);
            const request = await userService.post(users);
            if (request) {
                res.send(JSON.stringify({ massege: "Пользователь успешно удален" }));
            }
        } else {
            res.send(400, JSON.stringify({ err: "Пользователь не найден" }));
        }
    }
}

module.exports = new UserController()