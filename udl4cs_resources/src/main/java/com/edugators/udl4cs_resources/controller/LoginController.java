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

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    @Autowired
    User1Service user1Service;
    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping(value = "/validate", headers = "Accept=application/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        User1 user = user1Service.findByUsername(username);

        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            LoginResponse resp = new LoginResponse((long) user.getId(), true, user.getRole());
            return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(resp);
        } else {
            LoginResponse resp = new LoginResponse(null, false, null);
            return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(resp);
        }
    }

}