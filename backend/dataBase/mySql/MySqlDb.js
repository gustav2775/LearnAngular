const mysqldb = require('mysql');
const { mySqlConfig } = require('../../config/config.js');

class MySqlDB {
    static instance = null;
    constructor (){
        MySqlDB.instance ?? this.connection();
    }
    connection() {
        this.instance = mysqldb.createConnection(mySqlConfig)
        this.instance.connect();
    }
    disconnection() {
        this.instance.end();
    }
}
module.exports = new MySqlDB();