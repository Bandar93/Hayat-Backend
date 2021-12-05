const express = require("express");
const connectDB = require("./db/database/database")
const app = express();
const PORT = 8000;



connectDB();
app.listen(PORT,() => console.log(`it's working ${PORT}`))