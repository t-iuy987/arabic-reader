<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<html>
<head>
    <title>File Upload</title>
</head>
<body>
    <form action="/uploadF" method="post" enctype="multipart/form-data">
        <div class="row">
        <label for="inputFile">Input File:</label>
        <input type="file" id="inputFile" name="inputFile" accept=".txt" />
    </div>
    <div class="row">
        <label for="outputFile">Output File:</label>
        <input type="file" id="outputFile" name="outputFile" accept=".txt" />
    </div>
    <div class="row">
        <button type="submit">Submit</button>
    </div>
    </form>
</body>
</html>




