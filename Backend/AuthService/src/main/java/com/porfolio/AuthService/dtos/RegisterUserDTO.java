package com.porfolio.AuthService.dtos;

public class RegisterUserDTO {

    private String email;
    private String password;
    private String fullName;

    public String getEmail() {
        return email;
    }

    public RegisterUserDTO setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public RegisterUserDTO setPassword(String password) {
        this.password = password;
        return this;
    }

    public String getFullName() {
        return fullName;
    }

    public RegisterUserDTO setFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }

    @Override
    public String toString() {
        return "RegisterUserDTO{"
                + "email='" + email + '\''
                + ", password='" + password + '\''
                + ", fullName='" + fullName + '\''
                + '}';
    }
}
