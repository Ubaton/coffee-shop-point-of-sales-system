package com.coffee.pos.coffee_shop.controllers;

import com.coffee.pos.coffee_shop.models.Order;
import com.coffee.pos.coffee_shop.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

  @Autowired
  private OrderRepository orderRepository;

  @GetMapping
  public List<Order> getAllOrders() {
    return orderRepository.findAll();
  }

  @PostMapping
  public Order createOrder(@RequestBody Order order) {
    return orderRepository.save(order);
  }

  
}