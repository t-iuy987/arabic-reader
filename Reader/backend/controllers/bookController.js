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

const getBooksByUser = async (req, res) => {
  try {
      const userId = req.params.userId; // Get the userId from request parameters
      const books = await Book.find({ user: userId });
      res.status(200).send({ success: true, msg: "User's Books Data", data: books });
  } catch (error) {
      res.status(400).send({ success: false, msg: error.message });
  }
}

const addFavoriteWord = async (req, res) => {
  const { filePath, word, userId } = req.body;
  console.log("****///", filePath, word, userId)

  // Find the book by filePath and user ID
  const book = await Book.findOne({ book: filePath, user: userId });

  if (!book) {
    return res.status(404).send({ success: false, message: "Book not found" });
  }

  // Add the new word to the favouriteWords array
  if (!book.favouriteWords.includes(word)) {
    book.favouriteWords.push(word);
    await book.save();
  }

  res.status(200).send({ success: true, message: "Word added to favorite" });
};




const favoriteWord = async (req, res) => {
  try {
    const { bookId, word } = req.body;

    // Find the book by ID
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Add the selected word to the favoriteWords array
    book.favouriteWords.push(word);

    // Save the updated book
    await book.save();

    return res.status(200).json({ message: "Word favorited successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
const getBookId = async (req, res) => {
    const bookTitle = req.query.title; // Assuming you pass the book title as a query parameter
  
    try {
      const book = await Book.findOne({ title: bookTitle });
  
      if (book) {
        res.status(200).json({ bookId: book._id });
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
    uploadBook,
    getBooks,
    favoriteWord,
    getBookId
}