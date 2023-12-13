package com.example.RootExtracterApp.controller;


import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController

public class LoginController {

    private final String adminUsername = "admin";
    private final String adminPassword = "123"; // This should be securely stored, not hardcoded

    @PostMapping("/admin_login")
    public ModelAndView login(@RequestParam("username") String username, @RequestParam("password") String password) {
        if (username.equals(adminUsername) && password.equals(adminPassword)) {
            return new ModelAndView("redirect:/dashboard_admin"); // Return a success message or token
        } else {
            return new ModelAndView("redirect:/loginpage?error"); //  incorrect credentials
        }
    }
	@RequestMapping("/dashboard_admin")
	public ModelAndView Loginpage() {
		return new ModelAndView("admin_dashboard");
	}
}
