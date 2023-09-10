const mongoose = require('mongoose')
const Employee = require('../models/Employess')

const AddEmployee = (req,res) =>{
    const employee = new Employee({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        Designation:req.body.Designation,
        Email:req.body.Email,
        password:"Admin@123",
        phone:req.body.phone
    })
    employee.save()
    .then(emp => {
        res.json({
            emp,
            "message":"Employee Added Sucessfully"
        })
    })
}

const login = (req,res) =>{
    Employee.findOne({Email:req.body.email})
     .then(employee => {
        if(employee){
            if(req.body.password === employee.password){
                res.json({
                     employee,
                    "message":"Login Success"
                })
            }
            else {
                 res.status(401)
                res.json({
                    "message":"Password Incorrect"
                })
            }
        }
        else {
             res.status(404)
            res.json({
                "message":"User Not Found"
            })
    
        }
     })
   
}

const GetEmployee = (req,res) =>{
    Employee.find({})
    .then(employee=>{
         res.json(employee)
    })
}
const GetEmployeeById = (req,res) =>{
    Employee.findById(req.body.id)
    .then(employee=>{
         res.json(employee)
    })
}

 const RemoveEmployee = (req,res) =>{
    Employee.findByIdAndDelete(req.body.id)
    .then(employee =>{
         if(employee !== null){
            res.json({
                employee,
                "message":"Deleted Employee Sucessfully"  
           })
         }
         else {
             res.status(404)
            res.json({
                "message":"Employee Not Found"  
           })
         }
       
    })
 } 
 const updateEmployee = (req,res) =>{
    Employee.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        Designation:req.body.Designation,
        Email:req.body.Email,
        password:req.body.password,
        phone:req.body.phone
    })
    .then(employee =>{
        if(employee !== null){
           res.json({
               employee,
               "message":"Details updated Sucessfully"  
          })
        }
        else {
            res.status(404)
           res.json({
               "message":"Employee Not Found"  
          })
        }
      
   })
 }
 const updatePass =(req,res)=>{
    Employee.updateOne({_id:req.body.id},{
        $set:{
            password:req.body.pass
        }
    })
     .then(Employe => {
         res.json({
            Employe,
            "message":"Password Update Sucessfully"
         })
     })
 }
 const updateDesig =(req,res)=>{
    Employee.updateOne({_id:req.body.id},{
        $set:{
            Designation:req.body.desig
        }
    })
     .then(Employe => {
         res.json({
            Employe,
            "message":"Designation Update Sucessfully"
         })
     })
 }

 const updatedFeedback =(req,res)=>{
    Employee.updateOne({_id:req.body.id},{
        $set:{
             'Review.$[].FeedBack':req.body.feedback
        }
    })
     .then(Employe => {
         res.json({
            Employe,
            "message":"FeedBack given Sucessfully"
         })
     })
 }

 const singup = (req,res)=>{
    Employee.findOne({Email:req.body.email})
    .then(emp => { 
        if(emp){
          res.json({
            "message":"Email is already Used"
          })
        }
        else {
            const employee = new Employee({
                _id:new mongoose.Types.ObjectId,
                name:req.body.name,
                Designation:req.body.Designation,
                Email:req.body.Email,
                password:req.body.password,
                phone:req.body.phone
            })
            employee.save()
            .then(emp => {
                res.json({
                    emp,
                    "message":"Account Creadted SucessFully"
                })
            })
    
        }
     })
   
 }

module.exports ={
    AddEmployee,
    login,
    GetEmployee,
    RemoveEmployee,
    updateEmployee,GetEmployeeById,
    updatePass,updateDesig,
    updatedFeedback,singup}