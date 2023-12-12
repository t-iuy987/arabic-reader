package com.example.RootExtracterApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class LoginController {
	@Autowired // simplifies dependency management
	public LoginController() {
		int i;
		//this.rootExtracterService = rootExtracterService;
	}
	@RequestMapping("/io")
	public ModelAndView Welcome() {
		return new ModelAndView("MainRootExtracter");
	}

}
