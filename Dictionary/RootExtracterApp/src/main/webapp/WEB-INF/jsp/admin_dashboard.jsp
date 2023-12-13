<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags, title, and Bootstrap CSS -->
    <!-- Include your font styles -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Prata&display=swap" rel="stylesheet">
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

 <style>
        /* Copy the styles from homepage.jsp for colors, fonts, etc. */
         /* Define your custom styles here */
        body {
            background-color: #f8f7f9;
            color: #000000;
            margin: 0; /* Remove default margin */
            padding: 0; /* Remove default padding */
            font-family: 'Playfair Display', serif;
font-family: 'Prata', serif;
        }
       .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction:row;
        }

        /* Add emojis for a modern touch */
        .emoji {
            font-size: 2rem;
        }
        .btn-primary{
        	    background-color: #352F44;
        	    border: 1px solid black;
        }
        .btn-primary:hover{
        background-color: #B9B4C7;
        color:#000;
        border: 1px solid #000;
        }

   </style>
</head>
<body>
    <!-- Navbar -->
    <!-- Include the navbar similar to other pages -->

    <!-- Dashboard Content -->
    <div class="container mt-4">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-md-3">
                <!-- Sidebar content goes here -->
                <!-- You can add links/buttons for CRUD operations, note-taking, search, etc. -->
            </div>

<!-- Main Content Area -->
<div class="col-md-9">
    <!-- CRUD Buttons -->
    <div class="mb-4">
        <button class="btn btn-primary mr-3 shadow-lg" onclick="addWords()">Add Words <span>&#43;</span></button>
        <button class="btn btn-primary mr-3 shadow-lg" onclick="editWords()">Edit Words <span>&#9998;</span></button>
        <button class="btn btn-primary mr-3 shadow-lg" onclick="searchWords()">Search Words <span>&#128269;</span></button>
        <button class="btn btn-danger mr-3 shadow-lg" onclick="deactivateWords()">Deactivate Words <span>&#128683;</span></button>
        <button class="btn btn-info shadow-lg" onclick="takeNotes()">Take Notes <span>&#128221;</span></button>
    </div>

    <!-- Note-taking Interface -->
    <div id="noteSection">
        <textarea class="form-control" rows="5" placeholder="Take your notes here..."></textarea>
        <button class="btn btn-success mt-3" onclick="saveNotes()">Save Notes <span>&#128190;</span></button>
    </div>
</div>
        </div>
    </div>

    <!-- Bootstrap JS and jQuery -->
    <!-- Include necessary scripts at the end of the body -->
</body>
</html>
