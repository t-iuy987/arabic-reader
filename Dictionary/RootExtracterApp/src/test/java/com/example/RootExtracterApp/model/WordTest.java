package com.example.RootExtracterApp.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class WordTest {

    @Test
    void testGetWord() {
        Word word = new Word();
        word.setWord("TestWord");
        assertEquals("TestWord", word.getWord());
    }

    @Test
    void testSetWord() {
        Word word = new Word();
        word.setWord("TestWord");
        assertEquals("TestWord", word.getWord());
    }

    @Test
    void testGetDefinition() {
        Word word = new Word();
        word.setDefinition("TestDefinition");
        assertEquals("TestDefinition", word.getDefinition());
    }

    @Test
    void testSetDefinition() {
        Word word = new Word();
        word.setDefinition("TestDefinition");
        assertEquals("TestDefinition", word.getDefinition());
    }
}
