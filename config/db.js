const mongoose = require("mongoose");
const connection =
    "mongodb://localhost:27017/meandb";
// const connection =
//     "mongodb+srv://meanapp:meanapp@123@cluster0.xqas2.mongodb.net/meandb?retryWrites=true&w=majority";
mongoose
    .connect(connection)
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log(err));

module.exports = mongoose;