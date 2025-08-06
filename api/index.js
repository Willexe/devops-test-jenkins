import userRoutes from "./routes/users.js"
import cors from "cors"

const express = require("express");
const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(3001, '0.0.0.0', () => {
  console.log("Servidor backend rodando na porta 3001")

});

module.exports = app;
