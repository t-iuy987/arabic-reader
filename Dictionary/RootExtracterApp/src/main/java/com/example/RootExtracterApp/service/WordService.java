package com.example.RootExtracterApp.service;

import java.io.PrintStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import com.example.RootExtracterApp.model.Word;
import com.example.RootExtracterApp.model.WordValidator;
import com.example.RootExtracterApp.repository.WordRepository;

import net.oujda_nlp_team.entity.Result;

@Service
public class WordService {

	@Autowired
	private WordRepository wordRepository;

	public List<Word> getAllWords() {
		ArrayList<Word> wordList = new ArrayList<>();
		wordRepository.findAll().forEach(word -> wordList.add(word));
		return wordList;
	}

	public Word getWordDescription(String word) {
		Optional<Word> wordOptional = wordRepository.findByWord(word);
		if (!wordOptional.isPresent()) {
			throw new IllegalStateException("word does not exist", null);
		}
		final String uri = "http://localhost:9876/GetRoots?word={word}";

		RestTemplate restTemplate = new RestTemplate();
		Map<String, String> params = new HashMap<String, String>();
		params.put("word", word);
		String result = restTemplate.getForObject(uri, String.class, params);

		// PrintStream out = new PrintStream(System.out, true, "UTF-8");
		// for(char str: result) {
		System.out.println(result);
		// }

		return null;
	}

	public Word getMeaningForWord(String word) {
		Optional<Word> wordOptional = wordRepository.findByWord(word);

		if (!wordOptional.isPresent()) {
			throw new IllegalStateException("word does not exist", null);
		}
		return wordOptional.get();
	}

	public Word getMeaningById(Long id) {
		Optional<Word> wordOptional = wordRepository.findById(id);

		if (!wordOptional.isPresent()) {
			throw new IllegalStateException("ID not found", null);
		}

		return wordRepository.findById(id).get();
		// return null;
	}

	public void populateRoots() {
		List<Word> allWords = wordRepository.findAll();

		for (Word word : allWords) {
			// Call AlKhalil2Analyzer to find the root of the word

			String root = net.oujda_nlp_team.AlKhalil2Analyzer.getInstance()
					.processToken(word.getWord().replace(" ", "")).getAllRootString();
			root = root.replace(":", "");

			// Update the word's root in the database
			word.setRoot(root);

			// Save the updated word entity
			wordRepository.save(word);
			// System.out.print("->");
		}
	}

	public List<Word> getWordsWithSameRoots(String word) {
		// Call the repository method to fetch words with the same roots
		String root = net.oujda_nlp_team.AlKhalil2Analyzer.getInstance().processToken(word).getAllRootString();
		root = root.replace(":", "");
		return wordRepository.findByRootContaining(root);
	}

	public List<Result> getTags(String word) {
		// Call the repository method to fetch words with the same roots
		// List<String> str =
		// net.oujda_nlp_team.AlKhalil2Analyzer.getInstance().processToken(word).getAllResultInLine();
		List<Result> str = net.oujda_nlp_team.AlKhalil2Analyzer.getInstance().processToken(word).getAllResults(); // root
																													// =
																													// root.replace(":",
																													// "");

		return str;
	}

	public String addWord(String word, String definition, String root, List<String> partsOfSpeech, boolean idiomatic) {
		try {
			Word newWord = new Word();
			newWord.setWord(word);
			newWord.setDefinition(definition);
			newWord.setRoot(root);		
	        // Check if root is empty or null
	        if (root == null || root.isEmpty()) {
	            // If root is empty or null, set it as null in the database
	            newWord.setRoot(null);
	        }
	        // Check if parts of speech are present
	        if (partsOfSpeech != null && !partsOfSpeech.isEmpty()) {
	            newWord.setTags(String.join(", ", partsOfSpeech));
	        }
			
			// Validate the word and definition
			if (WordValidator.isNonEnglish(newWord.getWord()) || WordValidator.isNonEnglish(newWord.getDefinition())) {
				// Check if the word already exists
		        Optional<Word> existingWord = wordRepository.findByWord(newWord.getWord());
		        if (existingWord.isPresent()) {
		            // Handle the case where the word already exists
		            return "Word already exists.";
		        }

				

				wordRepository.save(newWord);
				return "Word added successfully.";

			}
			// if English characters are detected
			return "English characters are not allowed in word and definition fields.";

			
			 

		} catch (Exception e) {
			return "Error adding word.";
		}
	}
	public void updateWord(Long id, String word, String definition, String root, List<String> tags) {
	    Word _word = wordRepository.findById(id)
	            .orElseThrow(() -> new NoSuchElementException("Word not found"));

	    _word.setWord(word);
	    _word.setDefinition(definition);
	    if (root!="")
	    {
	    	_word.setRoot(root);
	    }
	    if(String.join(", ", tags) !="") {
		    _word.setTags(String.join(", ", tags));
	    }

	    

	    wordRepository.save(_word);
	}


	public Word getWordById(Long id) {
		// TODO Auto-generated method stub
		return wordRepository.findById(id).get();
	}

}
