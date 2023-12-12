package com.example.RootExtracterApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.RootExtracterApp.model.Word;
import com.example.RootExtracterApp.service.WordService;

import net.oujda_nlp_team.entity.Result;

@RestController
@RequestMapping("words")
public class WordController {
	@Autowired
	WordService wordService;
	
	@GetMapping("/getAllWords")
	public ResponseEntity<List<Word>> getWordMeaning() {
		return ResponseEntity.ok().body(wordService.getAllWords());

	}
	// works correctly
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value = "/w/{word}",method = RequestMethod.GET)
	public Word getWordMeaning(@PathVariable String word) {
	    // fetch the meaning of the provided word from database
	    return wordService.getMeaningForWord(word);
	}
	
	@RequestMapping(value = "/wd/{word}",method = RequestMethod.GET)
	public Word getWord(@PathVariable String word) {
	    // fetch the meaning of the provided word from database
	    return wordService.getWordDescription(word);
	}
	@RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
	public Word getbyId(@PathVariable Long id) {
	    // fetch the meaning of the provided word from database
	    return wordService.getMeaningById(id);
	}
	
	@GetMapping("/PopulateRoots")
    public ResponseEntity<String> populateRoots() {
        try {
            // Call the service method to populate roots
            wordService.populateRoots();
            return ResponseEntity.ok("Roots populated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error populating roots.");
        }
    }
	 @CrossOrigin(origins = "http://localhost:3000")
	 @GetMapping("/GetWordsWithSameRoots")
	    public List<Word> getWordsWithSameRoots(@RequestParam("word") String word) {
	        // Call the service method to get words with the same roots
	        return wordService.getWordsWithSameRoots(word);
	    }
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @GetMapping("GetTags")
	    public String getTags(@RequestParam("word") String word) {
	        // Call the service method to get the tags of the words
	        return wordService.getTags(word).get(0).getPartOfSpeech();
	    }


}
