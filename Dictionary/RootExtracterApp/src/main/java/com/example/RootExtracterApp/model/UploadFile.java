package com.example.RootExtracterApp.model;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

//public class UploadFile {
//	 private static final String RandomStringUtils = null;
//
//	public static String saveFile(String fileName, MultipartFile multipartFile)
//	throws IOException {
//        Path uploadPath = Paths.get("Files-Upload");
//          
//        if (!Files.exists(uploadPath)) {
//            Files.createDirectories(uploadPath);
//        }
// 
//        String fileCode = RandomStringUtils.randomAlphanumeric(8);
//         
//        try (InputStream inputStream = multipartFile.getInputStream()) {
//            Path filePath = uploadPath.resolve(fileCode + "-" + fileName);
//            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
//        } catch (IOException ioe) {       
//            throw new IOException("Could not save file: " + fileName, ioe);
//        }
//         
//        return fileCode;
//    }
//
//}
