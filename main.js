const cors = require("cors");
const express = require("express");
const connectDb = require("./src/config/config")
const userRouter = require("./src/routes/routes");

const app = express()
app.use(express.json())
app.use(cors())

connectDb()

app.use("/api/v1/users", userRouter);

const Port = process.env.PORT || 8000

app.listen(Port, console.log("Port:", Port))