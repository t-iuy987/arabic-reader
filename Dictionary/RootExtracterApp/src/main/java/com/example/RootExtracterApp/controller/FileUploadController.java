package com.example.RootExtracterApp.controller;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import io.micrometer.common.util.StringUtils;

//@RestController()
//public class FileUploadController {
//	 @PostMapping("/uploadFile")
//	    public ResponseEntity<FileUploadResponse> uploadFile(
//	            @RequestParam("file") MultipartFile multipartFile)
//	                    throws IOException {
//	         
//	        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
//	        long size = multipartFile.getSize();
//	         
//	        String filecode = FileUploadUtil.saveFile(fileName, multipartFile);
//	         
//	        FileUploadResponse response = new FileUploadResponse();
//	        response.setFileName(fileName);
//	        response.setSize(size);
//	        response.setDownloadUri("/downloadFile/" + filecode);
//	         
//	        return new ResponseEntity<>(response, HttpStatus.OK);
//	    }
//
//}
