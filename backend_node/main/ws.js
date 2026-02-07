const ws = require("ws");
const uuid = require("uuid").v7;

const wss = new ws.Server({ port: 5552 }, () =>
  console.log(`Server is running on ws://localhost:5552`)
);

wss.on("connection", function connection(ws) {
  console.log("connection", wss);

  ws.on("message", function (event) {
    const message = JSON.parse(event);

    wss.clients.forEach((client) => {
      console.log("pull");
      client.send(JSON.stringify({ id: uuid(), ...message }));
    });
  });

  ws.ping((e) => {
    console.log("ping", e);
  });

  ws.pong((e) => {
    console.log("pong", e);
  });
});

module.exports = wss;
