const serverConfig ={
    port: process.env.PORT || 3000,
    host: 'localhost',
    cors: '*'
} 
const noSQL = '';
const mySqlConfig = {
    host:'http://localhost:3306',
    login:'gustav',
    password:'12345'
}
module.exports = {
    serverConfig,
    mySqlConfig
}