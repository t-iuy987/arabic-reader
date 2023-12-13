<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Root-based Dictionary</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Prata&display=swap" rel="stylesheet">
    <!-- Custom CSS -->
    <style>
        /* Define your custom styles here */
        body {
            background-color: #f8f7f9;
            color: #000000;
            margin: 0; /* Remove default margin */
            padding: 0; /* Remove default padding */
            font-family: 'Playfair Display', serif;
font-family: 'Prata', serif;
        }
       

        .navbar {
            background-color: #ced2dd;
             color:#000000;
        }
        .join-btn{
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
            background-color:#ced2dd;
           
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
        <div class="container">
            <a class="navbar-brand text-dark" href="#">Root-based Dictionary</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#contact">Contact Us</a>
                    </li>

                </ul>
                <a href="/loginpage" class="btn btn-primary join-btn ">Admin Login</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Welcome to the Root-based Dictionary</h1>
            <p>Empowering you to discover the roots of Arabic words and their meanings.</p>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="mb-3">Why Roots Matter?</h2>
                    <p>Every Arabic word has a root that carries its essence. Knowing the root of a word can help you
                        understand its meaning and usage in a deeper way. Our microservice is here to assist you in
                        identifying these roots effortlessly.</p>
                </div>
                <div class="col-lg-6">
                <img src="${pageContext.servletContext.contextPath}/images/roots.png" class="img-fluid" alt="">
                                    
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Us Section -->
    <section class="contact-section" id="contact">
        <div class="container">
            <h2>Contact</h2>
            <!-- Add your contact form or contact details here -->
        </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
        <div class="container text-center">
            <a href="#" class="mr-3"><i class="fab fa-instagram"></i></a>
            <a href="#" class="mr-3"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="mr-3"><i class="fab fa-github"></i></a>
        </div>
    </footer>

    <!-- Bootstrap JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
