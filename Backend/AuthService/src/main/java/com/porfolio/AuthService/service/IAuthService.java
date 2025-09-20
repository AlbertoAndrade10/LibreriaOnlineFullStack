package com.porfolio.AuthService.service;

import com.porfolio.AuthService.DTOs.AuthResponseDTO;
import com.porfolio.AuthService.DTOs.LoginRequestDTO;
import com.porfolio.AuthService.DTOs.RegisterRequestDTO;

public interface IAuthService {

    AuthResponseDTO register(RegisterRequestDTO request);

    AuthResponseDTO login(LoginRequestDTO request);

    AuthResponseDTO refreshToken(String refreshToken);
}
