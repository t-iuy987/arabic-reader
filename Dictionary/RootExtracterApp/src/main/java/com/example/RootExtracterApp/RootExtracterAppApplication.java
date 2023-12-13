package com.example.RootExtracterApp;

import java.util.Optional;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;


@SpringBootApplication
public class RootExtracterAppApplication {
//	@Autowired
//	WordRepository repo;
	
	public static void main(String[] args) {
		SpringApplication.run(RootExtracterAppApplication.class, args);
		 System.setProperty("console.encoding", "UTF-8");
	}
	
	  @Bean  
	  public RestTemplate restTemplate() { 
		  return new RestTemplate(); 
	  }



	  
	  


	  
	  
	 
}
