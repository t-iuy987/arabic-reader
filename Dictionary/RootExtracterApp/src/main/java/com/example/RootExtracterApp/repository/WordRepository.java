package com.example.RootExtracterApp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.RootExtracterApp.model.Word;

@Repository
public interface WordRepository extends JpaRepository<Word, Long> {
	//custom query method
	@Query("SELECT w from Word w WHERE w.word = ?1")
    Optional<Word> findByWord(String word);
	
	@Query("SELECT w from Word w WHERE w.root = ?1")
	List<Word> findByRootContaining(String word);
}

