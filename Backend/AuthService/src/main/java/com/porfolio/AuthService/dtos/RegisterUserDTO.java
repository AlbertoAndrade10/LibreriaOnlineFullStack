package com.porfolio.AuthService.dtos;

import com.porfolio.AuthService.entities.Role;

public class RegisterUserDTO {

    private String email;
    private String password;
    private String fullName;
    private Role role = Role.USER;

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

    public Role getRole() {
        return role;
    }

    public RegisterUserDTO setRole(Role role) {
        this.role = Role.USER;
        return this;
    }

    @Override
    public String toString() {
        return "RegisterUserDTO{"
                + "email='" + email + '\''
                + ", password='" + password + '\''
                + ", role='" + role + '\''
                + ", fullName='" + fullName + '\''
                + '}';
    }
}
