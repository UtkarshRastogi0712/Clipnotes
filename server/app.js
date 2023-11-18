const express = require("express");
const createError = require("http-errors");
const cors = require("cors");
require("dotenv").config();
const Router = require("./Notes/notes.router.js");
require("./Helpers/database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
  })
);
app.use(express.json());
app.use("/notes", Router);

app.get("/", async (req, res, next) => {
  res.send("It works!");
});

// Catchall error handling
app.use(async (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use(async (error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
