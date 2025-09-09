package com.porfolio.AuthService.controller.AuthController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.porfolio.AuthService.request.LoginRequest;
import com.porfolio.AuthService.response.SupabaseAuthResponse;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Value("${supabase.url}")
    private String supabaseUrl;

    @Value("${supabase.service.role.key}")
    private String serviceRoleKey;

    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            String url = supabaseUrl + "/auth/v1/token?grant_type=password";

            HttpHeaders headers = new HttpHeaders();
            headers.set("apikey", serviceRoleKey);
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, String> body = new HashMap<>();
            body.put("email", request.getEmail());
            body.put("password", request.getPassword());

            HttpEntity<Map<String, String>> entity = new HttpEntity<>(body, headers);

            ResponseEntity<SupabaseAuthResponse> response = restTemplate.postForEntity(
                    url, entity, SupabaseAuthResponse.class);

            return ResponseEntity.ok(response.getBody());

        } catch (HttpClientErrorException e) {
            return ResponseEntity.status(401)
                    .body("Error de autenticación: " + e.getResponseBodyAsString());
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody LoginRequest request) {
        try {
            String url = supabaseUrl + "/auth/v1/signup";

            HttpHeaders headers = new HttpHeaders();
            headers.set("apikey", serviceRoleKey);
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, String> body = new HashMap<>();

            body.put("email", request.getEmail());
            body.put("password", request.getPassword());

            HttpEntity<Map<String, String>> entity = new HttpEntity<>(body, headers);

            ResponseEntity<SupabaseAuthResponse> response = restTemplate.postForEntity(
                    url, entity, SupabaseAuthResponse.class);

            return ResponseEntity.ok(response.getBody());

        } catch (HttpClientErrorException e) {
            return ResponseEntity.status(400).body("Error al registrar: " + e.getResponseBodyAsString());
        }
    }

    @SuppressWarnings("deprecation")
    @PutMapping("/confirm-email")
    public ResponseEntity<?> confirmEmail(@RequestParam String userId) {
        try {
            String url = supabaseUrl + "/auth/v1/admin/users/" + userId;

            HttpHeaders headers = new HttpHeaders();
            headers.set("apikey", serviceRoleKey);
            headers.set("Authorization", "Bearer " + serviceRoleKey);
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> body = new HashMap<>();
            body.put("email_confirm", true);

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

            ResponseEntity<String> response = restTemplate.exchange(
                    url, HttpMethod.PUT, entity, String.class);

            return ResponseEntity.status(response.getStatusCode()).body(response.getBody());

        } catch (HttpClientErrorException e) {
            return ResponseEntity.status(e.getRawStatusCode())
                    .body("Error de Supabase: " + e.getResponseBodyAsString());
        } catch (RestClientException e) {
            return ResponseEntity.status(500).body("Error interno: " + e.getMessage());
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        /* -->> Se ocupa el frontend de limpiar los tokens. Hay que modificarlo (cuando se implemente en el futuro XD) usando REDIS para revocar tokens
         aunque estén vigentes despues de un logout <<-- */
        return ResponseEntity.ok().body(Map.of(
                "message", "Sesión cerrada. Por favor, elimina el token del cliente."
        ));
    }

}
