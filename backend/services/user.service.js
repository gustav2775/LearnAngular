const fs = require('fs');

class UserService {
    constructor() { }
    get = () => {
        return new Promise((res, rej) => {
            fs.readFile("./nodb/users.json", "utf-8", (err, data) => {
                if (err) {
                    return res(JSON.stringify({ text: err }));
                } else {
                    return res(JSON.parse(data));
                }
            })
        })
    }
    post = (data) => {
        return new Promise((res, rej) => {
            fs.writeFile("./nodb/users.json", JSON.stringify(data), "utf-8", (err, data) => {
                if (err) {
                    return res(false);
                } else {
                    return res(true);
                }
            })
        })
    }
}
module.exports = new UserService();