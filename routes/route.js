const express = require('express')
const  EmployeeController = require('../controllers/EmployesControllers')
const  PerformanceController = require('../controllers/PerformanceReview')
const route = express.Router()

route.post('/addEmployee',EmployeeController.AddEmployee)
route.post('/login',EmployeeController.login)
route.get('/allemployee',EmployeeController.GetEmployee)
route.post('/deletEmployee',EmployeeController.RemoveEmployee)
route.post('/updateEmployee',EmployeeController.updateEmployee)
route.post('/addReview',PerformanceController.AddReview)
route.post('/GetEmployeeById',EmployeeController.GetEmployeeById)
route.post('/newPassword',EmployeeController.updatePass)
route.post('/changeDesig',EmployeeController.updateDesig)
route.post('/feedback',EmployeeController.updatedFeedback)

module.exports = route