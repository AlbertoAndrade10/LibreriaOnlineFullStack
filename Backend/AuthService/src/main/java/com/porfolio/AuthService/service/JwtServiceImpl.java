package com.porfolio.AuthService.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.porfolio.AuthService.DTOs.AuthResponseDTO;
import com.porfolio.AuthService.config.JwtUtils;
import com.porfolio.AuthService.exceptions.TokenExpiredException;
import com.porfolio.AuthService.models.User;

import io.jsonwebtoken.Claims;

@Service
public class JwtServiceImpl implements IJwtService {

    private static final long ACCESS_TOKEN_EXPIRATION = 86400000; // 24 horas
    private static final long REFRESH_TOKEN_EXPIRATION = 3600000; // 1 hora

    @Autowired
    JwtUtils jwtUtils;

    @Override
    public String generateToken(User user) {

        return jwtUtils.generateToken(user.getUsername(), ACCESS_TOKEN_EXPIRATION);
    }

    @Override
    public String generateRefreshToken(User user) {
        return jwtUtils.generateToken(user.getUsername(), REFRESH_TOKEN_EXPIRATION);
    }

    @Override
    public AuthResponseDTO refreshToken(String refreshToken) {
        Claims claims = jwtUtils.parseToken(refreshToken);

        if (claims.getExpiration().before(new Date())) {
            throw new TokenExpiredException("El refresh token ha expirado");
        }

        String username = claims.getSubject();
        String newToken = jwtUtils.generateToken(username, ACCESS_TOKEN_EXPIRATION);

        AuthResponseDTO authResponseDTO = new AuthResponseDTO();
        authResponseDTO.setToken(newToken);
        authResponseDTO.setRefreshToken(refreshToken);

        return authResponseDTO;
    }

}
