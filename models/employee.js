const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
    },
    position: {
        type: String,
    },
    dept: {
        type: String,
    },
});

const employeeModel = mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;