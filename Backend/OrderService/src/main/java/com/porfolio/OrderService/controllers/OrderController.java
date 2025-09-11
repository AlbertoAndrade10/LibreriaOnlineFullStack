package com.porfolio.OrderService.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.porfolio.OrderService.dtos.OrderCreateDTO;
import com.porfolio.OrderService.dtos.OrderDTO;
import com.porfolio.OrderService.models.OrderStatus;
import com.porfolio.OrderService.services.OrderService.IOrderService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/orders")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    @Autowired
    private IOrderService orderService;

    @PostMapping
    public ResponseEntity<OrderDTO> createOrder(@Valid @RequestBody OrderCreateDTO orderCreateDTO) {

        OrderDTO createdOrder = orderService.createOrder(orderCreateDTO);

        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> getOrderById(@PathVariable Long id) {
        OrderDTO order = orderService.getOrderById(id);
        return ResponseEntity.ok(order);
    }

    @GetMapping("/number/{orderNumber}")
    public ResponseEntity<OrderDTO> getOrderByOrderNumber(@PathVariable String orderNumber) {
        OrderDTO order = orderService.getOrderByOrderNumber(orderNumber);
        return ResponseEntity.ok(order);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderDTO>> getOrdersByUserId(@PathVariable Long userId) {
        List<OrderDTO> orders = orderService.getOrdersByUserId(userId);
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/user/{userId}/status/{status}")
    public ResponseEntity<List<OrderDTO>> getOrdersByUserIdAndStatus(
            @PathVariable Long userId,
            @PathVariable OrderStatus status) {
        List<OrderDTO> orders = orderService.getOrdersByUserIdAndStatus(userId, status);
        return ResponseEntity.ok(orders);
    }

    @GetMapping
    public ResponseEntity<List<OrderDTO>> getAllOrders() {
        List<OrderDTO> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<OrderDTO>> getOrdersByStatus(@PathVariable OrderStatus status) {
        List<OrderDTO> orders = orderService.getOrdersByStatus(status);
        return ResponseEntity.ok(orders);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<OrderDTO> updateOrderStatus(
            @PathVariable Long id,
            @RequestParam OrderStatus status) {
        OrderDTO updatedOrder = orderService.updateOrderStatus(id, status);
        return ResponseEntity.ok(updatedOrder);
    }

    @DeleteMapping("/{id}/cancel")
    public ResponseEntity<Void> cancelOrder(@PathVariable Long id) {
        orderService.cancelOrder(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
}
