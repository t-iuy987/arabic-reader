//package com.example.RootExtracterApp;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
//import org.springframework.test.annotation.Rollback;
//
//import com.example.RootExtracterApp.model.User;
//import com.example.RootExtracterApp.repository.UserRepository;
// 
//@DataJpaTest
//@AutoConfigureTestDatabase(replace = Replace.NONE)
//@Rollback(false)
//public class UserRepositoryTests {
// 
//    @Autowired
//    private TestEntityManager entityManager;
//     
//    @Autowired
//    private UserRepository repo;
//     
//    // test methods go below
//    @Test
//    public void testCreateUser() {
//        User user = new User();
//        user.setEmail("ravikumar@gmail.com");
//        user.setPassword("ravi2020");
//        user.setFirstName("Ravi");
//        user.setLastName("Kumar");
//         
//        User savedUser = repo.save(user);
//         
//        User existUser = entityManager.find(User.class, savedUser.getId());
//         
//        assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
//         
//    }
//}