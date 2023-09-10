const mongoose = require('mongoose')
const Employee = require('../models/Employess')
const multer = require('multer')

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname)
    }
})

var upload = multer({
    storage:storage,
}).single("image")

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

 const uploadImage = (req,res)=>{
 Employee.updateOne({_id:req.body.id},{
    $set:{
        image:req.file.path
    }
 })
 .then(Employe => {
    res.json({
       Employe,
       "message":"Image Uploaded Sucessfully"
    })
})


 }
 



module.exports ={
    AddEmployee,
    login,
    GetEmployee,
    RemoveEmployee,
    updateEmployee,GetEmployeeById,
    updatePass,updateDesig,
    updatedFeedback,
    uploadImage,upload
}