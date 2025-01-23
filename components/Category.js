import { motion } from 'framer-motion';

export default function Category({ id, title, items }) {
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}