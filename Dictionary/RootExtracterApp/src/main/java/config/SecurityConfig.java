//package config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig   {
////username: user, password: 
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//            .authorizeRequests()
//                .requestMatchers("/signup").permitAll() // Allow access to signup page
//                .anyRequest().authenticated()
//                .and()
//            .formLogin()
//                .loginPage("/login") // Customize login page URL
//                .permitAll()
//                .and()
//            .logout()
//                .permitAll();
//    }

    // Define an authentication provider (e.g., in-memory user store or database)
//    @Bean
//    public UserDetailsService userDetailsService() {
//        // Define your user details and roles here
//        // Typically, you'd use a database or some other data source
//        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
//        manager.createUser(User.withDefaultPasswordEncoder()
//                .username("user")
//                .password("password")
//                .roles("USER")
//                .build());
//        return manager;
//    }
//}

