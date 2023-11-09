const express = require('express');
const bookRoute = express();

const bodyParser = require("body-parser");
bookRoute.use(bodyParser.json())
bookRoute.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer');
const path = require("path");

bookRoute.use(express.static("public"))


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.join(__dirname, "../public/bookFiles"), function(error, success){
            if(error){console.log(error)}

        })

    },
    filename:function(req, file, cb){
        const name = file.originalname;
        cb(null, name, function(error, success){
            if(error){console.log(error)}
        })
    }
})

const upload = multer({storage:storage});

const bookController = require("../controllers/bookController")


bookRoute.post("/uploadBook",upload.single("book"), bookController.uploadBook)
bookRoute.get("/getBooks",bookController.getBooks );
bookRoute.get('/api/getBookId', bookController.getBookId);


module.exports = bookRoute;


