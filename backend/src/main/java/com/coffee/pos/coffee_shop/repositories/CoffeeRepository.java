package com.coffee.pos.coffee_shop.repositories;

import com.coffee.pos.coffee_shop.models.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoffeeRepository extends JpaRepository<Coffee, Long> {
    // Additional query methods can be defined here
} 