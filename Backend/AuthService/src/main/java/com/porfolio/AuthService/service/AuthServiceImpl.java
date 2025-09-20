package com.porfolio.AuthService.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.porfolio.AuthService.DTOs.AuthResponseDTO;
import com.porfolio.AuthService.DTOs.LoginRequestDTO;
import com.porfolio.AuthService.DTOs.RegisterRequestDTO;
import com.porfolio.AuthService.exceptions.InvalidCredentialsException;
import com.porfolio.AuthService.exceptions.UserAlreadyExistsException;
import com.porfolio.AuthService.models.Role;
import com.porfolio.AuthService.models.User;
import com.porfolio.AuthService.repository.UserRepository;

@Service
public class AuthServiceImpl implements IAuthService {

    private final UserRepository userRepository;
    private final IJwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthServiceImpl(UserRepository userRepository, IJwtService jwtService,
            PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public AuthResponseDTO register(RegisterRequestDTO request) {

        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            throw new UserAlreadyExistsException("El usuario ya existe");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);

        userRepository.save(user);

        String token = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        AuthResponseDTO authResponseDTO = new AuthResponseDTO();
        authResponseDTO.setToken(token);
        authResponseDTO.setRefreshToken(refreshToken);

        return authResponseDTO;
    }

    @Override
    public AuthResponseDTO login(LoginRequestDTO request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        if (!authentication.isAuthenticated()) {
            throw new InvalidCredentialsException("Credenciales inválidas");
        }

        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new InvalidCredentialsException("Usuario no encontrado"));

        String token = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        AuthResponseDTO authResponseDTO = new AuthResponseDTO();
        authResponseDTO.setToken(token);
        authResponseDTO.setRefreshToken(refreshToken);

        return authResponseDTO;
    }

    @Override
    public AuthResponseDTO refreshToken(String refreshToken) {
        return jwtService.refreshToken(refreshToken);
    }

}
