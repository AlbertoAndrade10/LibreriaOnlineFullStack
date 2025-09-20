package com.porfolio.AuthService.service;

import com.porfolio.AuthService.DTOs.AuthResponseDTO;
import com.porfolio.AuthService.models.User;

public interface IJwtService {

    String generateToken(User user);

    String generateRefreshToken(User user);

    AuthResponseDTO refreshToken(String refreshToken);
}
