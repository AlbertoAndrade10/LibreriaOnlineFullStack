package com.porfolio.AuthService.repositories;

import java.util.Optional;

import com.porfolio.AuthService.entities.User;

public interface UserRepository {

    Optional<User> findByEmail(String email);

    Iterable<User> findAll();
}
