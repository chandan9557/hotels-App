const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

app.use(express.json());
app.use("/person", require("./routes/personRouter"));
app.use('/menu',require('./routes/menuRouter'))
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server start");
});
