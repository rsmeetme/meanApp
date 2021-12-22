const mongoose = require("mongoose");
require("dotenv").config();
const connection = process.env.CONNECTION_STRING_SERVER;
mongoose
    .connect(connection)
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log(err));

module.exports = mongoose;