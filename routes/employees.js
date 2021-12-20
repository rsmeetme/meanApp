const express = require("express");

const router = express.Router();

const Controllers = require("../controllers/employee");

// get request for getting all the employees
router.get("/", Controllers.getAllEmployee);

// get request for getting the employees details
router.get("/:id", Controllers.getEmployeeDetails);

// post request for add new employee
router.post("/add", Controllers.add);

// put request for update employee
router.put("/:id", Controllers.updateEmployee);

// post request for add new employee
router.delete("/:id", Controllers.deleteEmployee);

module.exports = router;