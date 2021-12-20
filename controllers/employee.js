const Employee = require("../models/employee");
const ObjectId = require("mongoose").Types.ObjectId;

//1. controller for all employee
module.exports.getAllEmployee = (req, res) => {
    Employee.find((err, doc) => {
        if (err) {
            res.status(500).send({ message: "Error in getting all employee" });
        } else {
            res.status(200).send({
                total: doc.length,
                result: doc,
            });
        }
    });
};

//2. controller for get employee details
module.exports.getEmployeeDetails = (req, res) => {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
        Employee.findById({ _id: id }, (err, doc) => {
            if (err) {
                res.status(500).send({ message: "Error in getting employee" });
            } else {
                res.status(200).send({
                    result: doc,
                });
            }
        });
    } else {
        res.status(400).send({ message: "Id is not valid" });
    }
};

//controllers for add employee
module.exports.add = (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept,
    });

    emp.save((err, doc) => {
        if (err) {
            res.status(500).send({ message: "Error in adding new employee" });
        } else {
            res.status(200).send({
                message: "Employee added successfully",
                result: doc,
            });
        }
    });
};

// controller for updating employee
module.exports.updateEmployee = (req, res) => {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
        let emp = {
            name: req.body.name,
            position: req.body.position,
            dept: req.body.dept,
        };
        Employee.findByIdAndUpdate({ _id: id }, { $set: emp }, { new: true },
            (err, doc) => {
                if (err) {
                    res.status(500).send({
                        message: "Error in updating employee",
                    });
                } else {
                    res.status(200).send({
                        message: "Employee updated successfully",
                        result: doc,
                    });
                }
            }
        );
    } else {
        res.status(400).send({ message: "Id is not valid" });
    }
};

// controller for delete employee
module.exports.deleteEmployee = (req, res) => {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
        Employee.findByIdAndDelete({ _id: id }, (err, doc) => {
            if (err) {
                res.status(500).send({ message: "Error in deleting employee" });
            } else {
                res.status(200).send({
                    message: "Employee deleted successfully",
                    result: doc,
                });
            }
        });
    } else {
        res.status(400).send({ message: "Id is not valid" });
    }
};

// or like this

//1. controller for all employee
// module.exports.getAllEmployee = (req, res) => {
//     Employee.find()
//         .then((result) => {
//             res.send({
//                 status: 200,
//                 result: result,
//             });
//         })
//         .catch((err) => {
//             res.send({ status: 500, message: "Error in getting all employee" });
//         });
// };

// //2. controller for get employee details
// module.exports.getEmployeeDetails = (req, res) => {
//     Employee.find({ _id: id })
//         .then((result) => {
//             res.send({
//                 status: 200,
//                 result: result,
//             });
//         })
//         .catch((err) => {
//             res.send({ status: 500, message: "Error in getting employee" });
//         });
// };

// //controllers for add employee
// module.exports.add = (req, res) => {
//     let emp = new Employee({
//         name: req.body.name,
//         position: req.body.position,
//         dept: req.body.dept,
//     });

//     emp.save()
//         .then((result) => {
//             res.send({
//                 status: 200,
//                 message: "Employee added successfully",
//                 result: result,
//             });
//         })
//         .catch((err) => {
//             res.send({ status: 500, message: "Error in adding new employee" });
//         });
// };