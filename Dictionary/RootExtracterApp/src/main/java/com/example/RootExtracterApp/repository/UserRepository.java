//package com.example.RootExtracterApp.repository;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//import com.example.RootExtracterApp.model.User;
//
//
//public interface UserRepository extends JpaRepository<User, Long> {
//	  User save(User user);
//	  @Query("SELECT u FROM User u WHERE u.email = ?1")
//	    public User findByEmail(String email);
//}