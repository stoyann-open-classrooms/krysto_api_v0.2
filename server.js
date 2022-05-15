const express = require("express");

const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./documentation/swagger.json");
const app = express();

// middleware

app.use(
  `${process.env.BASE_URL}/documentation`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers
const productRouter = require("./routes/productRouter.js");
app.use(`${process.env.BASE_URL}/products`, productRouter);
const trocRouter = require("./routes/trocRouter.js");
app.use(`${process.env.BASE_URL}/trocs`, trocRouter);
const userRouter = require("./routes/userRouter.js");
app.use(`${process.env.BASE_URL}/users`, userRouter);
const authRouter = require("./routes/authRouter.js");
app.use(`${process.env.BASE_URL}/auth`, authRouter);
const plasticTypeRouter = require("./routes/plasticTypesRouter");
app.use(`${process.env.BASE_URL}/plasticTypes`, plasticTypeRouter);

//static Images Folder

app.use("/Images", express.static("./Images"));

//port

//server

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server is running on port ${process.env.SERVER_PORT}`);
});
