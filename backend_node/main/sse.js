const express = require("express");
const events = require("events");
const path = require("path");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const router = express.Router();
const emitter = new events.EventEmitter();

router
  .route("/messages")
  .get((req, res) => {
    console.log("SSE Content");

    res.writeHead(200, {
      Connection: "keep-alive",
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    });

    emitter.on("newMessage", (message) => {
      res.write(`data: ${JSON.stringify(message)} \n\n`);
    });

    res.status(204);
  })
  .post((req, res) => {
    const message = req.body;
    emitter.emit("newMessage", message);
    res.status(200);
  });

server.use("/sse", router);

module.exports = server;
