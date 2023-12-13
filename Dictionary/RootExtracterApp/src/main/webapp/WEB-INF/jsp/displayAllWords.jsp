<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Word Table</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Prata&display=swap" rel="stylesheet">

    <style>
            body {
            background-color: #f8f7f9;
            color: #000000;
            margin: 0; /* Remove default margin */
            padding: 0; /* Remove default padding */
            font-family: 'Playfair Display', serif;
font-family: 'Prata', serif;
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
    <div class="container mt-5">
        <h2>All Words</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Word</th>
                    <th>Definition</th>
                    <th>Root</th>
                    <th>Tags</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${words}" var="word">
                    <tr>
                        <td>${word.word}</td>
                        <td>${word.definition}</td>
                        <td>${word.root}</td>
                        <td>${word.tags}</td>
                        <td>
                            <a href="/words/edit/${word.id}" class="btn btn-primary">Edit</a>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>
    <!-- Include Bootstrap JS and any other scripts -->
</body>
</html>
