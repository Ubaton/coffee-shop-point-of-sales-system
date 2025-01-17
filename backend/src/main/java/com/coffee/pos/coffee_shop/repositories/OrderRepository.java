package com.coffee.pos.coffee_shop.repositories;

import com.coffee.pos.coffee_shop.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // Additional query methods can be defined here
} 