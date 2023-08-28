const mongoose = require('mongoose')
const Employee = require('../models/Employess')



const AddReview = (req,res) =>{
    Employee.findByIdAndUpdate(req.body.id,{
            Review:{
                _id:new mongoose.Types.ObjectId,
                Candidate_name:req.body.name,  
                Manager_Rating:req.body.manager,
                Hr_Rating:req.body.hr,
                TeamLead_Rating:req.body.TL,
                ProjectComplete:req.body.complete,
                Average_Rating:req.body.avg,
                FeedBack :req.body.feedback,
                Invigilator:req.body.Invigilator
            }
    }
     )
    .then(review => {
        res.json({
            review,
            "message":"Review Added Sucessfully"
        })
    })
}
module.exports ={
   AddReview
}