package com.porfolio.AuthService.utils;

import java.util.Date;

import com.porfolio.AuthService.config.JwtProperties;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtils {

    private final String SECRET_KEY;

    public JwtUtils(JwtProperties jwtProperties) {
        this.SECRET_KEY = jwtProperties.getSecretKey();
    }

    @SuppressWarnings("deprecation")
    public String generateToken(String username, long expiration) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    @SuppressWarnings("deprecation")
    public Claims parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }
}
