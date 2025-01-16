package com.coffee.pos.coffee_shop.models;

import jakarta.persistence.*;
import java.math.BigDecimal;

public class Order {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  private Coffee coffee;

  private String size;
  private String strength;
  private String sugarLevel;
  private BigDecimal price;
  private String milk;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Coffee getCoffee() {
    return coffee;
  }

  public void setCoffee(Coffee coffee) {
    this.coffee = coffee;
  }

  public String getSize() { return size; }

  public void setSize(String size) { this.size = size; }

  public String getStrength() { return strength; }

  public void setStrength(String strength) { this.strength = strength; }

  public String getSugarLevel() { return sugarLevel; }

  public void setSugarLevel(String sugarLevel) { this.sugarLevel = sugarLevel; }

  public BigDecimal getPrice() { return price; }

  public void setPrice(BigDecimal price) { this.price = price; }

  public String getMilk() { return milk; }

  public void setMilk(String milk) { this.milk = milk; }

  
}
