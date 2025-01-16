package com.coffee.pos.coffee_shop.controllers;

import com.coffee.pos.coffee_shop.models.Coffee;
import com.coffee.pos.coffee_shop.repositories.CoffeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coffee")
public class CoffeeController {
@Autowired
private CoffeeRepository coffeeRepository;

@GetMapping
public List<Coffee> getAllCoffee() {
  return coffeeRepository.findAll();
}

@PostMapping
public Coffee createCoffee(@RequestBody Coffee coffee) {
  return coffeeRepository.save(coffee);
}

  
}
