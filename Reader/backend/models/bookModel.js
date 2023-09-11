const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    favouriteWords:
        [{
            type: String
        }]
    ,
    book:{
        type:String,
        required:true
    }
});


module.exports = mongoose.model("Book", bookSchema)