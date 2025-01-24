import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaTrash, FaShoppingCart } from 'react-icons/fa'; // Import icons

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart
      </motion.h2>
      {cart.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Your cart is empty.
        </motion.p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              className="cart-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="cart-item-price">Rs. {item.price.toLocaleString('en-IN')}</p>
                <div className="cart-item-quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                    className="quantity-input"
                  />
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  <FaTrash className="icon" /> Remove
                </button>
              </div>
            </motion.div>
          ))}
          <motion.div
            className="cart-total"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3>Total: Rs. {totalPrice.toFixed(2)}/-</h3>
            <Link href="/checkout">
              <button className="checkout-button">
                <FaShoppingCart className="icon" /> Proceed to Checkout
              </button>
            </Link>
          </motion.div>
        </div>
      )}
    </section>
  );
}