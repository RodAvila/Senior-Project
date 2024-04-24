package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.LoginRequest;
import com.edugators.udl4cs_resources.model.LoginResponse;
import com.edugators.udl4cs_resources.model.User1;
import com.edugators.udl4cs_resources.service.User1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController // Indicates that this class is a REST controller
@CrossOrigin(origins = "http://localhost:3000") // Enables Cross-Origin Resource Sharing (CORS) for requests from a specific origin
public class LoginController {
    @Autowired
    User1Service user1Service;
    @Autowired
    PasswordEncoder passwordEncoder; // Autowires the PasswordEncoder bean for handling login-related operations

    @PostMapping(value = "/validate", headers = "Accept=application/json", produces = MediaType.APPLICATION_JSON_VALUE // Endpoint values indicate location of function output
    public @ResponseBody ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        User1 user = user1Service.findByUsername(username); // Retrieves user details by username
        // Checks if user exists and password matches
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            // If credentials are valid, create a successful login response
            LoginResponse resp = new LoginResponse((long) user.getId(), true, user.getRole());
            return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(resp);
        } else {
            // If credentials are invalid, create an unsuccessful login response
            LoginResponse resp = new LoginResponse(null, false, null);
            return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(resp);
        }
    }

}
