package com.example.RootExtracterApp.controller;

public class RootExtractionRequest {
    private String inputFile;
    private String outputFile;
    RootExtractionRequest(){
    	inputFile ="";
    	outputFile ="";
    }
	public String getInputFile() {
		return inputFile;
	}
	public void setInputFile(String inputFile) {
		this.inputFile = inputFile;
	}
	public String getInputFile(String outputFile) {
		return inputFile;
	}
	public String getOutputFile() {
		return outputFile;
	}
	public void setOutputFile(String outputFile) {
		this.outputFile = outputFile;
	}
	

}
