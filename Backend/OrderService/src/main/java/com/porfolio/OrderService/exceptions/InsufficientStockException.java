package com.porfolio.OrderService.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class InsufficientStockException extends RuntimeException {

    public InsufficientStockException(Long bookId, Integer requested, Integer available) {
        super(String.format("Insufficient stock for book ID %d. Requested: %d, Available: %d",
                bookId, requested, available));
    }

}
