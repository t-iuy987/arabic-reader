package com.example.RootExtracterApp.service;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Service;

import net.oujda_nlp_team.ADATAnalyzer;
import net.oujda_nlp_team.ADATAnalyzer1;

@Service
public class RootExtracterService {
	public void extractRootsWithHMM(String inputFile, String outputFile) {
		
        ADATAnalyzer.getInstance().processHeavyStemmer(inputFile, "utf-8", outputFile, "utf-8");
    }

    public void extractRootsWithSpline(String inputFile, String outputFile) {
        ADATAnalyzer1.getInstance().processHeavyStemmer(inputFile, "utf-8", outputFile, "utf-8");
    }
    public String getRootsWithAlKhalilMorphoSys2(String word) {
    	return 
    	net
		.oujda_nlp_team
		.AlKhalil2Analyzer
		.getInstance()
		.processToken(word)
		.getAllRootString();
        //ADATAnalyzer1.getInstance().processHeavyStemmer(inputFile, "utf-8", outputFile, "utf-8");
    }

	public Map<String, Set<String>> getWordsWithSameRootWithAlKhalilMorphoSys2(String word) {
		// TODO Auto-generated method stub
		return null;
	}	

}
