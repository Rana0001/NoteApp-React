const Note = require("../model/notes")

const createNote = (req,res,next) =>{
    const note = new Note({
        title: req.body.title,
        content: req.body.content
    })
    note.save().then(result =>{
        res.status(201).json({
            message: "Note created successfully",
            note: result
        })
    }).catch(err =>{
        res.status(500).json({
            message: "Something went wrong",
            error: err
        })
    })
}

const getNotes = (req,res,next) =>{
    Note.find().then(result =>{
        res.status(200).json({
            message: "Notes fetched successfully",
            notes: result
        })
    }).catch(err =>{
        res.status(500).json({
            message: "Something went wrong",
            error: err
        })
    })
}

const getNote = (req,res,next) =>{
    const id = req.params.id
    Note.findById(id).then(result =>{
        res.status(200).json({
            message: "Note fetched successfully",
            note: result
        })
    }).catch(err =>{
        res.status(500).json({
            message: "Something went wrong",
            error: err
        })
    })
}

const updateNote = (req,res,next) =>{
    const id = req.params.id
    const note = {
        title: req.body.title,
        content: req.body.content
    }
    Note.findByIdAndUpdate(id,note,{new: true}).then(result =>{
        res.status(200).json({
            message: "Note updated successfully",
            note: result
        })
    }
    ).catch(err =>{
        res.status(500).json({
            message: "Something went wrong",
            error: err
        })
    }
    )
}

const deleteNote = (req,res,next) =>{
    const id = req.params.id
    Note.findByIdAndDelete(id).then(result =>{
        res.status(200).json({
            message: "Note deleted successfully",
            note: result
        })
    }).catch(err =>{
        res.status(500).json({
            message: "Something went wrong",
            error: err
        })
    })
}
module.exports = {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}