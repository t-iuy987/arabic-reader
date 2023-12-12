
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
    <title>Enter Text</title>
    <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

</head>
<body>
    <div class="container ">       
        <form action="/search" method="post">
            <div class="row  ">
                <textarea name="text"></textarea>         
            
            </div>
            <div class="row mt-5 ">
                <button type="submit">Search</button>
            </div>
        </form>  
    </div>

</body>
</html>





