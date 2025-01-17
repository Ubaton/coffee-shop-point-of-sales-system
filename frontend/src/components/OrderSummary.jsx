import PropTypes from "prop-types";

const OrderSummary = ({ cart }) => {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 bg-amber-100 min-w-[250px] rounded-l-2xl">
      <h2 className="text-xl font-bold">Current Order</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between py-2">
            <span>
              {item.name} x{item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount:</span>
          <span>-$5.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax:</span>
          <span>$2.25</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${(subtotal - 5 + 2.25).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default OrderSummary;
