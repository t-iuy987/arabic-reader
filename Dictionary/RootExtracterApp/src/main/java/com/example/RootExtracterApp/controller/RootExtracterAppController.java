package com.example.RootExtracterApp.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.nio.file.Path;

import org.apache.commons.text.StringEscapeUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.ui.Model;
import com.example.RootExtracterApp.model.RootExtracter;
import com.example.RootExtracterApp.model.WordRoots;
import com.example.RootExtracterApp.service.RootExtracterService;

import jakarta.servlet.ServletContext;

@RestController
public class RootExtracterAppController {

	private RootExtracterService rootExtracterService;
	private static String UPLOAD_FOLDER = "C:\\Users\\murva\\Downloads";

	@Autowired
	private RestTemplate restTemplate = new RestTemplate();
	@Autowired
	private ServletContext servletContext;

	@GetMapping("/test")
	public String testRestTemplate() {
		// Use restTemplate here
		return "RestTemplate works!";
	}
	// private RestTemplate restTemplate;

	// ResponseEntity<String> response =
	// restTemplate.postForEntity("http://localhost:8080/extract-with-hmm", null,
	// String.class);

	@Autowired // simplifies dependency management
	public void RootExtractionController(RootExtracterService rootExtracterService) {
		this.rootExtracterService = rootExtracterService;
	}

//    @PostMapping("/extract-with-hmm")
//    public void extractWithHMM(@RequestParam("inputFile") String inputFile,
//                               @RequestParam("outputFile") String outputFile) {
//    	System.out.println("The fileName is `" + inputFile+"`");
//        rootExtracterService.extractRootsWithHMM(inputFile, outputFile);
//    }
	@RequestMapping("/welcome")
	public ModelAndView Welcome() {
		return new ModelAndView("MainRootExtracter");
	}
	@RequestMapping("/homepage")
	public ModelAndView Homepage() {
		return new ModelAndView("homepage");
	}

	@RequestMapping("/uploadFile")
	public ModelAndView uploadFile(Model model) {
		// model.addAttribute("UploadFile", new RootExtracter());

		return new ModelAndView("UploadFile");
	}

	@RequestMapping("/saveTextToFile")
	public ModelAndView saveTextToFile(Model model) {
		// model.addAttribute("UploadFile", new RootExtracter());

		return new ModelAndView("EnterText");
	}

	@PostMapping("/search")
	public ModelAndView saveTextToFile(@RequestParam("text") String text) {
		// Define a file path where you want to save the text
		String ifilePath = "C:\\Users\\murva\\Documents\\RootExtracterApp\\RootExtracterApp\\src\\main\\webapp\\uploads\\text.txt";
		// String ofilePath =
		// "C:\\Users\\murva\\Documents\\RootExtracterApp\\RootExtracterApp\\src\\main\\webapp\\uploads\\File-OUT-Root1.txt";
		// String line, lines="";
//		try (BufferedReader reader = new BufferedReader(
//				new InputStreamReader(new FileInputStream(ifilePath), StandardCharsets.UTF_8))) {

//            while ((line = reader.readLine()) != null) {
//                System.out.println(line);
//               // lines+=line;
//            }
//            
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        
			// Write the text to the file
			System.out.println("\n\n***** " + text);
			// Files.write(Paths.get(ifilePath), text.getBytes());
			// Files.write(Paths.get(ifilePath), text.getBytes(StandardCharsets.UTF_8)); //
			// Use the correct encoding
			// System.out.println(text.getBytes(StandardCharsets.UTF_8));

			String decodedText = StringEscapeUtils.unescapeHtml4(text);
			// String decodedText = StringEscapeUtils.unescapeHtml4(new
			// String(text.getBytes(StandardCharsets.UTF_8), StandardCharsets.UTF_8)); //
			// Use the correct encoding

			// System.out.println(decodedText);

//        	RootExtractionRequest request = new RootExtractionRequest();
//            request.setInputFile(ifilePath);
//            request.setOutputFile(ofilePath);
//
//            // Call the "/extract-with-hmm" API endpoint using RestTemplate
//            ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:8080/extract-with-hmm", request, String.class);

			// Redirect to a success page or display a success message
			ModelAndView model = new ModelAndView("error");
			// model.addObject("txt", lines);
			return model;
//		}
	}

	@PostMapping("/processFiles")
	public ModelAndView processFiles(@RequestParam("inputFile") String inputFile,
			@RequestParam("outputFile") String outputFile) {
		// Call your API here with the input and output file paths
		// Your API will process the files based on the provided paths

		// You can also perform additional logic if needed
		// Create an instance of the DTO and set the parameters
		RootExtractionRequest request = new RootExtractionRequest();
		request.setInputFile(inputFile);
		request.setOutputFile(outputFile);

		// Call the "/extract-with-hmm" API endpoint using RestTemplate
		ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:9876/extract-with-hmm", request,
				String.class);

		ModelAndView modelAndView = new ModelAndView("status");
		modelAndView.addObject("inputFile", inputFile);
		modelAndView.addObject("outputFile", outputFile);
		return modelAndView;
	}

	@PostMapping("/uploadF")
	public ModelAndView uploadFile(@RequestParam("inputFile") MultipartFile ifile,
			@RequestParam("outputFile") MultipartFile ofile) {
		if (ifile.isEmpty() || ofile.isEmpty()) {
			System.out.print("empty files");
		}

		// Save the uploaded file to a directory
		String uploadDir = servletContext.getRealPath("/uploads/");
		String ifileName = ifile.getOriginalFilename();
		String ofileName = ofile.getOriginalFilename();

		String ifilePath = Paths.get(uploadDir, ifileName).toString();
		String ofilePath = Paths.get(uploadDir, ofileName).toString();
		String line, lines = "";
		ArrayList<WordRoots> words = new ArrayList<>();
		try {
			ifile.transferTo(new File(ifilePath));
			ofile.transferTo(new File(ofilePath));
			RootExtractionRequest request = new RootExtractionRequest();
			request.setInputFile(ifilePath);
			request.setOutputFile(ofilePath);

			// Call the "/extract-with-hmm" API endpoint using RestTemplate
			ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:9876/extract-with-hmm",
					request, String.class);

			// String outFilePath =
			// "C:\\Users\\murva\\Documents\\RootExtracterApp\\RootExtracterApp\\src\\main\\webapp\\uploads\\text.txt";
			// String ofilePath =
			// "C:\\Users\\murva\\Documents\\RootExtracterApp\\RootExtracterApp\\src\\main\\webapp\\uploads\\File-OUT-Root1.txt";

			

			try (BufferedReader reader = new BufferedReader(
					new InputStreamReader(new FileInputStream(ofilePath), StandardCharsets.UTF_8))) {

				while ((line = reader.readLine()) != null) {
					System.out.println(line);
					lines += line;
					String[] pairs = line.split(" ");
					for (String pair : pairs) {
						String[] parts = pair.split(":");
						if (parts.length == 2) {
							String root = parts[1].trim();
							String word = parts[0].trim();
							word = word.replace("{", "").replace("}", "");
							root = root.replace("{", "").replace("}", "");
							// writer.write("Word: " + word + ", Root: " + root);
							// writer.newLine();
							words.add(new WordRoots(word, root));
						}
					}

				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (IOException e) {
			System.out.print("no transfer.");
		}

		ModelAndView modelAndView = new ModelAndView("status");
		modelAndView.addObject("iabsolutePath", ifilePath);
		modelAndView.addObject("oabsolutePath", ofilePath);
		modelAndView.addObject("wordRootsList", words);

		return modelAndView;
	}

	@ModelAttribute
	RootExtracter setupForm() {
		return new RootExtracter();
	}

	@GetMapping("/")
	public String mainPage(Model model) {
		return "MainRootExtracter";

	}
//	@GetMapping("/getWordMeaning")
//	public ResponseEntity<String> getWordMeaning(@RequestParam String word) {
//	    // Your logic to fetch the meaning from the database
//	    // Return the meaning as a response
//	}

	// THIS ONE WORKS!!!!!!!!!!!1
	@PostMapping("/extract-with-hmm")
	public void extractWithHMM(@RequestBody RootExtractionRequest request) {
		rootExtracterService.extractRootsWithHMM(request.getInputFile(), request.getOutputFile());
	}

	@PostMapping("/extract-with-spline")
	public void extractWithSpline(@RequestParam("inputFile") String inputFile,
			@RequestParam("outputFile") String outputFile) {
		rootExtracterService.extractRootsWithSpline(inputFile, outputFile);
	}
	@GetMapping("/GetRoots")
	public String getRootsWithAlKhalilMorphoSys2(@RequestParam("word") String word)
	{
		return rootExtracterService.getRootsWithAlKhalilMorphoSys2(word);
	}
}
