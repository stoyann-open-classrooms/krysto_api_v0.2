const express = require("express");
const cors = require("cors");

const app = express();

// middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers
const productRouter = require("./routes/productRouter.js");
app.use("/api/products", productRouter);
const trocRouter = require("./routes/trocRouter.js");
app.use("/api/trocs", trocRouter);
const userRouter = require("./routes/userRouter.js");
app.use("/api/users", userRouter);
const authRouter = require("./routes/authRouter.js");
app.use("/api/auth", authRouter);
const plasticTypeRouter = require("./routes/plasticTypesRouter");
app.use("/api/plasticTypes", plasticTypeRouter);

//static Images Folder

app.use("/Images", express.static("./Images"));

//port
const port = 8001;

//server

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
