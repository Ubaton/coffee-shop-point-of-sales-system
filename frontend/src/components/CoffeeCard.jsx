import PropTypes from "prop-types";

const CoffeeCard = ({ coffee, addToCart }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-bold">{coffee.name}</h3>
      <p className="text-gray-600">{coffee.description}</p>
      <p className="text-xl font-semibold">${coffee.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(coffee)}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CoffeeCard;
