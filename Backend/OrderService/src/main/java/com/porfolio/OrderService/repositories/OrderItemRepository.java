package com.porfolio.OrderService.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.porfolio.OrderService.models.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    List<OrderItem> findByOrderId(Long orderId);

    List<OrderItem> findByBookId(Long bookId);
}
