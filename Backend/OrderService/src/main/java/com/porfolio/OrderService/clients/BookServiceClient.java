package com.porfolio.OrderService.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.porfolio.OrderService.dtos.BookDTO;

@FeignClient(name = "BookService", url = "${book-service.url:http://localhost:8083}")
public interface BookServiceClient {

    @GetMapping("(/api/v1/books/{id})")
    BookDTO getBookById(@PathVariable("id") Long id);

}
