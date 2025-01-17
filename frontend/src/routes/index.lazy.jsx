import { useState, useEffect } from "react";
import axios from "axios";
import { createLazyFileRoute } from "@tanstack/react-router";
import Sidebar from "../components/Sidebar";
import CategoryTabs from "../components/CategoryTabs";
import OrderSummary from "../components/OrderSummary";
import SearchBar from "../components/SearchBar";
import CoffeeProducts from "../components/CoffeeProducts";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [categories] = useState([
    "All",
    "Coffee",
    "Non-Coffee",
    "Food",
    "Snack",
  ]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [coffees, setCoffees] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/coffees")
      .then((response) => {
        setCoffees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching coffee products:", error);
      });
  }, []);

  const filteredCoffees = coffees.filter(
    (coffee) =>
      (activeCategory === "All" || coffee.category === activeCategory) &&
      coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (coffee) => {
    setCart([...cart, { ...coffee, quantity: 1 }]);
  };

  return (
    <div className="flex bg-amber-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div>
          <CoffeeProducts coffees={filteredCoffees} addToCart={addToCart} />
        </div>
      </main>
      <OrderSummary cart={cart} />
    </div>
  );
}
