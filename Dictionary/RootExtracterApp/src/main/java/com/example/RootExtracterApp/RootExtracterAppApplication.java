package com.example.RootExtracterApp;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.example.RootExtracterApp.model.Word;
import com.example.RootExtracterApp.repository.WordRepository;


@SpringBootApplication
public class RootExtracterAppApplication {
	@Autowired
	WordRepository repo;
	public static void main(String[] args) {
		SpringApplication.run(RootExtracterAppApplication.class, args);
		 System.setProperty("console.encoding", "UTF-8");
	}
	
	  @Bean  public RestTemplate restTemplate() { 
		  return new RestTemplate(); 
	  }
	  public void run(String... args) throws Exception {
	    
		  show(repo.findByWord("not found"));
	  }
	  

	  private void show(Optional<Word> w) {
		  if (w.isPresent()) {
			  System.out.println(w);
		  }
		  else {
			  System.out.println("bhdsbfuhsbu");
		  }
	  }
	  
	  
	 
}
