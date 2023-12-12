const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoose = require('mongoose');

const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl =
 "mongodb+srv://admin:wohoo.67dd@cluster0.djrjlwq.mongodb.net/Arabic-Reader?retryWrites=true&w=majority";


const port = 4000;

app.use(cors({
    origin:'*'
}));

mongoose.connect("mongodb+srv://admin:wohoo.67dd@cluster0.djrjlwq.mongodb.net/Arabic-Reader?retryWrites=true&w=majority");

const Book = require("./models/bookModel.js")

// Backend route to receive favorite words from the frontend
app.post('/api/saveFavoriteWords', async (req, res) => {
  const newWord = req.body.newWord; // Assuming frontend sends an array of favorite words
  const file = req.body.filepath; // Assuming frontend sends an array of favorite words
  const bookname = file.split('/').pop();
  console.log("bookname:", bookname)
  console.log("jdfjbjd", newWord, file)
  try {
    // Find the book by its filepath
    const book = await Book.findOne({ book: bookname });

    if (book) {
      if (!book.favouriteWords.includes(newWord)) {
        // If the word doesn't exist, add it to the array
        book.favouriteWords.push(newWord);

        // Save the updated book to the database
        await book.save();

        // Send a success response to the client
        return res.status(200).json({ success: true, message: 'Favorite word added successfully' });
      } else {
        // If the word already exists in the array
        return res.status(400).json({ success: false, message: 'Word already exists in favorites' });
      }
    } else {
      console.log('Book not found');
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
  } catch (error) {
    console.error('Error saving favorite words:', error);
    return res.status(500).json({ success: false, message: 'Failed to save favorite words' });
  }
  // Optionally, send a response indicating successful saving of favorite words
  res.status(200).json({ success: true, message: 'Favorite words saved successfully' });
});
const bookRoute = require("./routes/bookRoutes"); 
const userRoute = require("./routes/userRoutes")

app.use("/api", bookRoute);
app.use("/api", userRoute);


app.listen(port, function(){
    console.log("server is running");
})


