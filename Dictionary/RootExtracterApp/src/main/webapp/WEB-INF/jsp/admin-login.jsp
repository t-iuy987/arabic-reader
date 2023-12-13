<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
     <!-- Bootstrap JS and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

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

        .navbar {
            background-color: #B9B4C7;
             color:#000000;
        }
        .join-btn{
        background-color: #352F44;
        border: none;
       
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

        .hero {
            background-image: url('your-hero-image.jpg');
            background-size: cover;
            background-position: center;
            background-color:#B9B4C7;
           
            padding: 100px 0;
            text-align: center;
            height: 100vh; /* Full viewport height */
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .hero h1 {
            color: #000000;
            font-size: 36px;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 18px;
            color: #000000;
        }

        .about-section {
            padding: 50px 0;
        }

        .about-section h2 {
            color: #000000;
        }

        .footer {
            background-color: #000000;
            color: #82A0AA;
            padding: 30px 0;
        }

        .footer a {
            color: #000000;
        }
    </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark ">
        <!-- Copy the navbar code from homepage.jsp -->
    </nav>

    <!-- Admin Login Form -->
  <div class="container">
        <div>
            <div class="text-center mb-4">
                <h1>Hello Admin</h1><span class="mt-3 emoji">&#128100;</span>
            </div>
            <!-- Toast element -->
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000" style="position: absolute; top: 20px; right: 20px;">
    <div class="toast-header">
        <strong class="mr-auto">Login Error</strong>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="toast-body">
        Incorrect username or password!
    </div>
</div>
            <form action="/admin_login" method="POST">
                <!-- Input fields for username and password -->
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" class="form-control" id="username" name="username">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" name="password">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>

        </div>
    </div>

    <!-- Bootstrap JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

<!-- JavaScript for showing the toast -->
<script>
    $(document).ready(function(){
        // Check if the URL has the 'error' parameter
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('error')) {
            // Show the toast
            $('.toast').toast('show');
        }
    });
</script>
</html>
