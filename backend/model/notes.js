const mongoose = require("mongoose")

const Note = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
    }

},{timestamps:true})

module.exports = mongoose.model("Note",Note)