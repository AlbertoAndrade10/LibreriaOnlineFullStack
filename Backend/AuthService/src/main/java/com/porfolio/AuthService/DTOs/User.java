package com.porfolio.AuthService.DTOs;

import lombok.Data;

@Data
public class User {

    private String id;
    private String email;
    private String confirmed_at;
    private String created_at;

}
