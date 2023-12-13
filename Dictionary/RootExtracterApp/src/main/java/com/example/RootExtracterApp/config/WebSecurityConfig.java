//package com.example.RootExtracterApp.config;
//
//
//import javax.sql.DataSource;
// 
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
//import org.springframework.web.servlet.handler.HandlerMappingIntrospector;
//
//import com.example.RootExtracterApp.service.CustomUserDetailsService;
// 
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig  {
//
//	
//	@Autowired
//	CustomUserDetailsService customUserDetailsService;
//	
//	@Bean
//	public static PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//     
//	@Autowired
//    MvcRequestMatcher.Builder mvc;
//	@Bean
//	public UserDetailsService userDetailsService() {
//		return new CustomUserDetailsService();
//	}
//
//  
// 
//	@Autowired
//	public void configure (AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
//	}
// 
//	@Bean
//	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
//		   http
//		   .cors().and() // Enable CORS and use the previously declared bean
//           .csrf().disable()
//           
//           .authorizeRequests()
//          .requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
//          .requestMatchers("/api/**").permitAll() // 
//          .anyRequest().authenticated()
//          .and()
//	        .authorizeHttpRequests(auth -> auth
//	            .requestMatchers(mvc.pattern("/admin-page")).permitAll()
//	            .anyRequest().authenticated())
//	        
//	
//	        
//	        .formLogin()
//	            .loginPage("/login")     
//	            
//	            .defaultSuccessUrl("/admin-page", true)                   
//	            .loginProcessingUrl("/login")
//	            .permitAll()
//	            .and()
//	            
//	
//	            .logout(form -> form.invalidateHttpSession(true).clearAuthentication(true)
//	    				
//	    				.logoutSuccessUrl("/login?logout").permitAll())
//	            ;
//	            
//	    	return http.build();
//	}
//     
//     
//}