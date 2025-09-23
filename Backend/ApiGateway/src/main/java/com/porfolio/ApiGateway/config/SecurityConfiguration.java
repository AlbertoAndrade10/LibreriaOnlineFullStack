package com.porfolio.ApiGateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfiguration {

    // -->> Se permite todo para dev<<--
    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeExchange(exchanges -> exchanges
                .pathMatchers("/auth/signup", "/auth/login", "/auth/**")
                .permitAll()
                .pathMatchers("/users/**", "/books/**", "/authors/**", "/literary-genres/**")
                .permitAll()
                .anyExchange()
                .permitAll()
                )
                .cors(cors -> cors.disable());

        return http.build();
    }
}
