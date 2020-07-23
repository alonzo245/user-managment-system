const express = require("express");
const bodyParser = require("body-parser");
const mongoDbAccessor = require("./config/mongooseAccessor");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Access-Token"
  );
  next();
});

const userRoute = require("./routes/user");
app.use(express.json()).use("/api/v1/users", userRoute);

mongoDbAccessor().then(() => {
  const PORT = process.env.SERVER_PORT || 3001;
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
});
