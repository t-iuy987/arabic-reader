//package com.example.RootExtracterApp.controller;
//
//import java.security.Principal;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;
//
//import com.example.RootExtracterApp.model.User;
//import com.example.RootExtracterApp.repository.UserRepository;
//
//
//@Controller
//public class UserController {
//	
//	@Autowired
//	UserDetailsService userDetailsService;
////	
////	@Autowired
////	private UserService userService;
//    @Autowired
//    private UserRepository userRepo;
//	
//    @GetMapping("/register")
//    public String showRegistrationForm(Model model) {
//        model.addAttribute("user", new User());
//         
//        return "signup_form";
//    }
//    @PostMapping("/process_register")
//    public String processRegister(User user) {
//        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//        String encodedPassword = passwordEncoder.encode(user.getPassword());
//        user.setPassword(encodedPassword);
//         
//        userRepo.save(user);
//         
//        return "register_success";
//    }
////	@PostMapping("/registration")
////	public String saveUser( @ModelAttribute("user") UserDTO userDto, Model model) {
////		userService.save(userDto);
////		model.addAttribute("message", "Registered Successfuly!");
////		return "register";
////	}
//	
//	@GetMapping("/welcomeAdmin")
//	public String homegreeting() {
//	    return "home";
//	}
//	@GetMapping("/login")
//	public String login() {
//	    return "login";
//	}
//
//	@GetMapping("/users")
//	public String listUsers(Model model) {
//	    List<User> listUsers = userRepo.findAll();
//	    model.addAttribute("listUsers", listUsers);
//	     
//	    return "users";
//	}
//	@GetMapping("admin-page")
//	public String adminPage (Model model) {
//		//UserDetails userDetails = userDetailsService.loadUserByUsername(principal.getName());
//		//model.addAttribute("user", userDetails);
//		return "admin";
//	}
//
//
//
//	
//
//
//}
