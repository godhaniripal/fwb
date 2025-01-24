import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Category({ id, title, items }) {
  const { addToCart } = useCart();

  return (
    <section id={id} className="category">
      <h2>{title}</h2>
      <div className="category-grid">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={item.image} alt={item.alt} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="price">₹{item.price.toLocaleString('en-IN')}</p> {/* Display price in INR */}
            <button
              onClick={() => addToCart(item)}
              className="buy-now-button"
            >
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}