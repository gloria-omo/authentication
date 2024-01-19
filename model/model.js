const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    fullName:{
        type: String,
        required:[true, "please enter your name"]
    },
 
    email:{
        type: String,
        unique:[true, "email already exist"],
        required: [true, "enter a valid email address"]
    },
    password:{
        type: String,
        required: true
    },
    scores:{
        html:{
            type: Number
        },
        node:{
            type: Number
        },
        css:{
            type: Number
        },
        javascript:{
            type: Number
        },
    },
    blackList:{
        type: Array,
        default:[]
    }
})

const dataBase = mongoose.model("practice", schema)

module.exports = dataBase