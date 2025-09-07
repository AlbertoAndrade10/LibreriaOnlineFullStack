# 📚 BookStore Microservices - Spring Boot

Este proyecto es una aplicación de ecommerce de libros construida con arquitectura de microservicios usando Spring Boot. Cada microservicio tiene su propia base de datos y lógica independiente.

## 🧩 Microservicios Incluidos

| Microservicio | Descripción |
|---------------|-------------|
| `book-service` | Gestión de libros: creación, listado, stock, etc. |
| `user-service` | Registro y autenticación de usuarios |
| `order-service` | Gestión de órdenes de compra |
| `inventory-service` | Control del inventario de libros |
| `api-gateway` | Punto de entrada único para todos los servicios |
| `discovery-server` | Registro de servicios con Eureka |
| `config-server` | Centralización de configuración con Spring Cloud Config |

---

## 🛠️ Tecnologías

- Java 17
- Spring Boot 3
- Spring Cloud (Eureka, Config, Gateway)
- Maven
- PostgreSQL / H2
- Docker (opcional)
- OpenAPI / Swagger

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/bookstore-microservices.git
cd bookstore-microservices
