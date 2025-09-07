# Libreria Online - Spring Boot

Este proyecto es una aplicación de ecommerce de libros construida con arquitectura de microservicios usando Spring Boot.

## 🧩 Microservicios Incluidos

| Microservicio | Descripción |
|---------------|-------------|
| `Api-Gateway` | Punto de entrada único para todos los microservicios, seguridad con tokens |
| `Auth-Service¨(Spring Boot + SupaBase)` | Registro y autenticación de usuarios |
| `Books-Service` | Gestión de libros |
| `Cart-Service` | Gestión del carrito |
| `Order-Microservice` | Punto de entrada único para todos los servicios |
| `Payment-Service` | Gestión de pagos simulados usando PayPal |
| `Inventory-Service` | Gestión de stock de libros |
| `Config-Server` | Repositorio privado de almacenamiento para gestionar datos sensibles de la aplicación |
| `LoadBalancer` | Balaceador de carga para la aplicación |
| `Messaging-Catching` | Mensajería y caché con RabbitMQ y Redis |
| `Eureka-Server` | Gestión y descubrimiento de microservicios |

---

## Tecnologías

- Java 17
- Spring Boot 3
- Maven
- MySQL
- Docker 
- OpenAPI / Swagger

---
