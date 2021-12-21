const mongoose = require("mongoose");
require("dotenv").config();
const connection = process.env.CONNECTION_STRING;
mongoose
    .connect(connection)
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log(err));

module.exports = mongoose;