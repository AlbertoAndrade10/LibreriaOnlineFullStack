package com.porfolio.AuthService.utils;

import java.util.Date;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtils {

    //Cambiarlo de aqui para que no este hardcodeado
    private static final String SECRET_KEY = "WJKEHRFIOU2W4HJGUIO2UIOTHG2890RTU90UG90KWHJFG902UJPF2NKJWNFIHJQWNFGUIO3478957823YNVKMSKOLTM2893450IOW3JK924IUTG90I2U09GU029TU9012";

    @SuppressWarnings("deprecation")
    public static String generateToken(String username, long expiration) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    @SuppressWarnings("deprecation")
    public static Claims parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }
}
