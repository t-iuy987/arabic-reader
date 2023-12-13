<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>



<html>
<head>
    <meta charset="UTF-8">
    <title>Add Word</title>
        <link rel="stylesheet"
        	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
        <script
        	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script
        	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Prata&display=swap" rel="stylesheet">
            
               <style>
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
<body class="container mt-5">
    <h2>Add Word</h2>
    <form action="/words/addWordDefinition" method="post">

        <label for="word">Word:</label>
        <input type="text" name="word" required><br>
        
        <label for="word">Definition:</label>
        <textarea name="definition" required></textarea><br>
        <label for="root">Root:</label>
	    <input type="text" id="root" name="root"><br>
	    
	    
	    <label>Parts of Speech (select multiple):</label><br>
			<input type="checkbox" id="noun" name="partsOfSpeech" value="اسم">
			<label for="noun">Noun - اسم</label><br>
			
			<input type="checkbox" id="adjective" name="partsOfSpeech" value="صفة">
			<label for="adjective">Adjective - صفة</label><br>
	    
			<input type="checkbox" id="adverb" name="partsOfSpeech" value="ظرف">
			<label for="adverb">Adverb - ظرف</label><br>
			
			<input type="checkbox" id="pronoun" name="partsOfSpeech" value="ضمير">
			<label for="pronoun">Pronoun - ضمير</label><br>
	    
			<input type="checkbox" id="verb" name="partsOfSpeech" value="فعل">
			<label for="verb">Verb - فعل </label><br>
			
			<input type="checkbox" id="preposition" name="partsOfSpeech" value="حرف الجر">
			<label for="preposition">Preposition - حرف الجر</label><br>
	    
			<input type="checkbox" id="conjunction" name="partsOfSpeech" value="حرف عطف">
			<label for="conjunction">Conjunction - حرف عطف</label><br>
			
			<input type="checkbox" id="interjection" name="partsOfSpeech" value="تعجب">
			<label for="interjection">Interjection - تعجب</label><br>
	    

	    
	    <label for="idiomatic">Idiomatic Expression:</label>
	    <input type="checkbox" id="idiomatic" name="idiomatic"><br>
        
        
        
        <!-- Add other fields as needed -->
        <input type="submit" value="Submit" class="btn btn-primary">
    </form>
</body>
</html>
