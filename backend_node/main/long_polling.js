const express = require("express");
const cors = require("cors");
const events = require("events");
const { open } = require('node:fs');

const emitter = new events.EventEmitter();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/get-messages", (req, res) => {
  emitter.once("newMessage", (message) => {
    res.json(message);
  });
});

app.post("/new-messages", async (req, res) => {
  const message = req.body;

  emitter.emit("newMessage", message);

  try {
    await open("./db/message.json", 'r+', (res) => {
      console.log(res);
    });
    
  } catch (error) {
    res.status(404, error);
    throw error;
  }
 
  res.status(200);
});

module.exports = app;
