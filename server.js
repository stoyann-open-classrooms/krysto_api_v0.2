//imports
const express = require("express");
const morgan = require("morgan");

//instantiate server
const server = express();

server.use(express.json());
server.use(morgan("tiny"));
server.use(express.urlencoded({ extended: true }));

//testing api
server.get(process.env.BASE_URL, (req, res) =>
  res.send(`🌏🌏 Im online ! 🌏🌏   well done 👍`)
);
server.get("*", (req, res) =>
  res.status(501).send(`What the hell are you doing`)
);
// Launch server

server.listen(process.env.SERVER_PORT, () => {
  console.log(
    `✅ This server running on port ${process.env.SERVER_PORT}. Have fun 👍👍`
  );
});
