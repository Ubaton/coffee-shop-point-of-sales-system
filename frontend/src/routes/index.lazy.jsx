import { useState, useEffect } from "react";
import axios from "axios";
import { createLazyFileRoute } from "@tanstack/react-router";
import Sidebar from "../components/Sidebar";
import CategoryTabs from "../components/CategoryTabs";
import OrderSummary from "../components/OrderSummary";
import SearchBar from "../components/SearchBar";
import CoffeeCard from "../components/CoffeeCard";

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
    axios.get("http://localhost:8080/api/coffees").then((response) => {
      setCoffees(response.data);
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
    <div className="flex bg-amber-50">
      <Sidebar />
      <main className="flex-1 p-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="grid grid-cols-3 gap-4">
          {filteredCoffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} addToCart={addToCart} />
          ))}
        </div>
      </main>
      <OrderSummary cart={cart} />
    </div>
  );
}
