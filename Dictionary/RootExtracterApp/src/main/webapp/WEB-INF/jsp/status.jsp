<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
    <title>Result</title>
    <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
<script
    src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script
    src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</head>
<body>
    <h2>Files processed successfully!</h2>
    <p>Input File Path: ${iabsolutePath}</p>
    <p>Output File Path: ${oabsolutePath}</p>
    
    <table class="table table-bordered">
        <tr>
            <th>Word</th>
            <th>Root</th>
        </tr>

        <c:forEach var="wordRoot" items="${wordRootsList}">
            <tr>
                <td>${wordRoot.word}</td>
                <td>${wordRoot.root}</td>
            </tr>
        </c:forEach>
    </table>



</body>
</html>
