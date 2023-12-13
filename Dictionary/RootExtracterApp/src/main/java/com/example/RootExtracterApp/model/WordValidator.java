package com.example.RootExtracterApp.model;
import java.util.regex.Pattern;
public class WordValidator {
	private static final Pattern NON_ENGLISH_PATTERN = Pattern.compile("[^\u0000-\u007F]+");

    public static boolean isNonEnglish(String input) {
        return NON_ENGLISH_PATTERN.matcher(input).matches();
    }
}
