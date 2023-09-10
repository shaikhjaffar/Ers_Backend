const mongoose = require("mongoose")

const Performance = new  mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Candidate_name:{
        type:String,
        required:true
    },
    Manager_Rating:{
        type:Number,
        required:true
    },
    Hr_Rating:{
        type:Number,
        required:true
    },
    TeamLead_Rating:{
        type:Number,
        required:true
    },
    ProjectComplete :{
        type:Number,
        required:true
    },
    Average_Rating:{
        type:Number,
        required:true
    },
    FeedBack:{
        type:String,
    },
    Assigner : {
        type:String,
    },
    Invigilator:{
        type:String,
        required:true
    },
    created :{
        type : Date,
        required:true,
        default :Date.now
    }
    
})
const Employess = new  mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    phone: {
        type :String,
        required:true
    },
     Review:[Performance],
    created :{
        type : Date,
        required:true,
        default :Date.now
    }
    
})
module.exports = mongoose.model("Employess",Employess)