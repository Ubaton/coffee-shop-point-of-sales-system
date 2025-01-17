import { Button, Card } from "@heroui/react";
import PropTypes from "prop-types";

const CoffeeProducts = ({ coffees, addToCart }) => {
  return (
    <div className="overflow-auto">
      <div className="grid grid-cols-5 gap-4">
        {coffees.map((product) => (
          <Card isPressable shadow="sm" key={product.id} className="border p-4">
            <img src={product.image_url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: R {product.price.toFixed(2)}</p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

CoffeeProducts.propTypes = {
  coffees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      milk: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CoffeeProducts;
