import express from "express";

const router = express.Router();

// Sample coffee data
const coffeeProducts = [
  {
    id: 1,
    name: "Espresso",
    description:
      "A strong and bold coffee brewed by forcing hot water through finely-ground coffee.",
    price: 20.0,
    category: "Espresso",
    milk: "no milk",
    image_url: "url_to_espresso_image",
  },
  {
    id: 2,
    name: "Americano",
    description:
      "A diluted espresso with hot water, giving it a similar strength to brewed coffee.",
    price: 22.0,
    category: "Espresso",
    milk: "no milk",
    image_url: "url_to_americano_image",
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "A coffee drink made with espresso and steamed milk foam.",
    price: 25.0,
    category: "Cappuccino",
    milk: "whole milk",
    image_url: "url_to_cappuccino_image",
  },
  {
    id: 4,
    name: "Latte",
    description: "A creamy coffee drink made with espresso and steamed milk.",
    price: 24.0,
    category: "Latte",
    milk: "whole milk",
    image_url: "url_to_latte_image",
  },
  {
    id: 5,
    name: "Macchiato",
    description: "Espresso with a small amount of steamed milk or milk foam.",
    price: 23.0,
    category: "Macchiato",
    milk: "no milk",
    image_url: "url_to_macchiato_image",
  },
  {
    id: 6,
    name: "Flat White",
    description: "A coffee drink consisting of espresso with microfoam.",
    price: 26.0,
    category: "Flat White",
    milk: "whole milk",
    image_url: "url_to_flat_white_image",
  },
  {
    id: 7,
    name: "Mocha",
    description: "A chocolate-flavored variant of a latte.",
    price: 27.0,
    category: "Mocha",
    milk: "whole milk",
    image_url: "url_to_mocha_image",
  },
  {
    id: 8,
    name: "Ristretto",
    description:
      "A short shot of espresso made with the same amount of coffee but less water.",
    price: 21.0,
    category: "Espresso",
    milk: "no milk",
    image_url: "url_to_ristretto_image",
  },
  {
    id: 9,
    name: "Affogato",
    description:
      "A dessert consisting of a scoop of ice cream topped with a shot of hot espresso.",
    price: 30.0,
    category: "Dessert",
    milk: "no milk",
    image_url: "url_to_affogato_image",
  },
  {
    id: 10,
    name: "Cold Brew",
    description: "Coffee brewed with cold water over an extended period.",
    price: 18.0,
    category: "Cold Brew",
    milk: "no milk",
    image_url: "url_to_cold_brew_image",
  },
  {
    id: 11,
    name: "Nitro Cold Brew",
    description: "Cold brew coffee infused with nitrogen for a creamy texture.",
    price: 20.0,
    category: "Cold Brew",
    milk: "no milk",
    image_url: "url_to_nitro_cold_brew_image",
  },
  {
    id: 12,
    name: "Iced Coffee",
    description: "Brewed coffee served cold, often with ice.",
    price: 15.0,
    category: "Iced Coffee",
    milk: "optional",
    image_url: "url_to_iced_coffee_image",
  },
  {
    id: 13,
    name: "Frappe",
    description: "A blended coffee drink, often served cold with ice.",
    price: 22.0,
    category: "Frappe",
    milk: "optional",
    image_url: "url_to_frappe_image",
  },
  {
    id: 14,
    name: "Cortado",
    description:
      "Espresso cut with a small amount of warm milk to reduce acidity.",
    price: 23.0,
    category: "Cortado",
    milk: "whole milk",
    image_url: "url_to_cortado_image",
  },
  {
    id: 15,
    name: "Irish Coffee",
    description:
      "Coffee combined with Irish whiskey and sugar, topped with cream.",
    price: 28.0,
    category: "Cocktail",
    milk: "no milk",
    image_url: "url_to_irish_coffee_image",
  },
  {
    id: 16,
    name: "Turkish Coffee",
    description:
      "Coffee brewed in a special pot with finely ground coffee and water.",
    price: 19.0,
    category: "Turkish",
    milk: "no milk",
    image_url: "url_to_turkish_coffee_image",
  },
  {
    id: 17,
    name: "Vietnamese Coffee (Ca Phe Sua Da)",
    description:
      "Strong coffee brewed with a drip method, served with sweetened condensed milk.",
    price: 21.0,
    category: "Vietnamese",
    milk: "sweetened condensed milk",
    image_url: "url_to_vietnamese_coffee_image",
  },
  {
    id: 18,
    name: "Doppio",
    description: "A double shot of espresso.",
    price: 22.0,
    category: "Espresso",
    milk: "no milk",
    image_url: "url_to_doppio_image",
  },
  {
    id: 19,
    name: "Red Eye",
    description:
      "Espresso mixed with brewed coffee for an extra caffeine kick.",
    price: 24.0,
    category: "Espresso",
    milk: "no milk",
    image_url: "url_to_red_eye_image",
  },
  {
    id: 20,
    name: "Long Black",
    description:
      "A coffee drink made by pouring a double shot of espresso over hot water.",
    price: 25.0,
    category: "Espresso",
    milk: "no milk",
    image_url: "url_to_long_black_image",
  },
];

// Define the GET endpoint for /api/coffees
router.get("/coffees", (req, res) => {
  res.json(coffeeProducts);
});

// Export the router
export default router;
