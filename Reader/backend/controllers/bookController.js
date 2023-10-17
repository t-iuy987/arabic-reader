const Book = require("../models/bookModel")

const uploadBook = async(req, res)=>{
    try {
        const book = new Book({
            user:req.body.user,
            title:req.body.title,
            favouriteWords:req.body.favouriteWords,
            book:req.file.filename
        });
        const bookData = await book.save();
        res.status(200).send({success:true, msg:"Book Data", data:bookData})
    } catch (error) {
        res.status(400).send({success:false, msg:error.message});
    }
}

const getBooks = async(req, res)=>{
    try {
        const books = await Book.find({})
        res.status(200).send({success:true, msg:"Books Data", data:books})
    } catch (error) {
        res.status(400).send({success:false, msg:error.message});
    }
}


module.exports = {
    uploadBook,
    getBooks
}