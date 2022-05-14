//imports
const express = require("express");

//instantiate server
const server = express();

//testing api
server.get(`/`, (req, res) => res.send(`🌏🌏 Im online ! 🌏🌏   well done 👍`));
server.get("*", (req, res) =>
  res.status(501).send(`What the hell are you doing`)
);
// Launch server

server.listen(process.env.SERVER_PORT, () => {
  console.log(
    `✅ This server running on port ${process.env.SERVER_PORT}. Have fun 👍👍`
  );
});
