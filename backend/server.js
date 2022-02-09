const express = require("express");
const cors = require('cors');

const config = require('./config/config.js');
const routes = require('./routes/index.js');

const app = express();
app.use(express.json());

app.options(config.cors, cors());
app.use(cors());

app.use("/", express.static('../frontend/dist/test_project_angular'));
app.use('/api', routes);

app.listen(config.port, config.host, () => {
  console.log(`Listening http://${config.host}:${config.port}`);
});