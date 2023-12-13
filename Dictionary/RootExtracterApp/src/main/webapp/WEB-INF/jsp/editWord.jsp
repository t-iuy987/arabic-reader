<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit Word</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
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
<body>
    <div class="container mt-5">
        <h2>Edit Word</h2>
        <form action="/words/update" method="post">
            <input type="hidden" name="id" value="${word.id}">
            
            <div class="form-group">
                <label for="word">Word:</label>
                <input type="text" class="form-control" id="word" name="word" value="${word.word}" required>
            </div>
            
            <div class="form-group">
                <label for="definition">Definition:</label>
                <textarea class="form-control" id="definition" name="definition" required>${word.definition}</textarea>
            </div>
            
            <div class="form-group">
                <label for="root">Root:</label>
                <textarea class="form-control" id="root" name="root" >${word.root}</textarea>
            </div>
            
            <div class="form-group">
		        <label for="tags">Tags:</label>
		            <!--<textarea class="form-control" id="tags" name="tags" >${word.tags}</textarea>-->
		        <label>Parts of Speech (select multiple):</label><br>
		        
    			<input class="form-control" type="checkbox" id="noun" name="tags" value="اسم"  ${partsOfSpeech.contains('اسم') ? 'checked' : ''}>
				<label for="noun">Noun - اسم</label><br>
				
				<input class="form-control" type="checkbox" id="adjective" name="tags" value="صفة" ${partsOfSpeech.contains('صفة') ? 'checked' : ''}>
				<label for="adjective">Adjective - صفة</label><br>
		    
				<input class="form-control" type="checkbox" id="adverb" name="tags" value="ظرف" ${partsOfSpeech.contains('ظرف') ? 'checked' : ''}>
				<label for="adverb">Adverb - ظرف</label><br>
				
				<input class="form-control" type="checkbox" id="pronoun" name="tags" value="ضمير" ${partsOfSpeech.contains('ضمير') ? 'checked' : ''}>
				<label for="pronoun">Pronoun - ضمير</label><br>
		    
				<input class="form-control" type="checkbox" id="verb" name="tags" value="فعل" ${partsOfSpeech.contains('فعل') ? 'checked' : ''}>
				<label for="verb">Verb - فعل </label><br>
				
				<input class="form-control" type="checkbox" id="preposition" name="tags" value="حرف الجر" ${partsOfSpeech.contains('حرف الجر') ? 'checked' : ''}>
				<label for="preposition">Preposition - حرف الجر</label><br>
		    
				<input class="form-control" type="checkbox" id="conjunction" name="tags" value="حرف عطف" ${partsOfSpeech.contains('حرف عطف') ? 'checked' : ''}>
				<label for="conjunction">Conjunction - حرف عطف</label><br>
				
				<input class="form-control" type="checkbox" id="interjection" name="tags" value="تعجب" ${partsOfSpeech.contains('تعجب') ? 'checked' : ''}>
				<label for="interjection">Interjection - تعجب</label><br>
            </div>
            
            <!-- Add fields for root, tags, etc. as needed -->
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>
    <!-- Include Bootstrap JS and any other scripts -->
</body>
</html>
