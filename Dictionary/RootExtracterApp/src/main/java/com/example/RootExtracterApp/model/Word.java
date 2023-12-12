package com.example.RootExtracterApp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity

public class Word {
	@Id
    @GeneratedValue
    private Long id;
	@Column(name = "word", columnDefinition = "nvarchar(255)", nullable = false)
	private String word;
	

	@Column(name = "definition", columnDefinition = "nvarchar(max)")
	private String definition;
	
	@Column(name = "root", columnDefinition = "nvarchar(255)")
	private String root;
	
	@Column(name = "tags", columnDefinition = "nvarchar(500)")
	private String tags;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	
		public String getWord() {
			return word;
		}
		public void setWord(String word) {
			this.word = word;
		}
		public String getDefinition() {
			return definition;
		}
		
		public void setDefinition(String definition) {
			this.definition = definition;
		}
		public String getRoot() {
			return root;
		}
		public void setRoot(String root) {
			this.root = root;
		}
		public String getTags() {
			return tags;
		}
		public void setTags(String tags) {
			this.tags = tags;
		}

}
