package com.porfolio.AuthService.response;

import com.porfolio.AuthService.DTOs.User;

import lombok.Data;

@Data
public class SupabaseAuthResponse {

    private String access_token;
    private String token_type;
    private String refresh_token;
    private int expires_in;
    private User user;

}
