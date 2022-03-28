const express = require("express");
const cors = require('cors');

const { serverConfig } = require('./config/config.js');
const routes = require('./routes/index.js');

const app = express();
app.use(express.json());
app.options(serverConfig.cors, cors());
app.use(cors());

app.use("/", express.static('../frontend/dist/test_project_angular'));
app.use('/api', routes);

app.listen(serverConfig.port, serverConfig.host, () => {
  try {
    console.log(`Listening http://${serverConfig.host}:${serverConfig.port}`);
  } catch (error) {
    console.log('sudo kill -9 $(lsof -t -i:3000)')
  }
});