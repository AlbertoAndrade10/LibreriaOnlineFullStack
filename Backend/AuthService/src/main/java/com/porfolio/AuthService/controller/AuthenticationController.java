package com.porfolio.AuthService.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.porfolio.AuthService.dtos.LoginUserDTO;
import com.porfolio.AuthService.dtos.RegisterUserDTO;
import com.porfolio.AuthService.entities.User;
import com.porfolio.AuthService.responses.LoginResponse;
import com.porfolio.AuthService.services.AuthenticationService;
import com.porfolio.AuthService.services.JwtService;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {

    private final JwtService jwtService;
    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDTO dto) {
        User registeredUser = authenticationService.signup(dto);

        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDTO dto) {
        User authenticatedUser = authenticationService.authenticate(dto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse().setToken(jwtToken).setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/health-authentication")
    public String health() {
        return "Health check AuthenticationController";
    }
}
