import { FaTruck, FaPaintBrush, FaHome } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>FlashWear Bureau delivers fashion at lightning speed. Our highlights:</p>
      <ul>
        <li>
          <FaTruck size={40} color="#e91e63" />
          <h3>1-Hour Delivery</h3>
          <p>Get your fashion delivered to your doorstep in just 1 hour.</p>
        </li>
        <li>
          <FaPaintBrush size={40} color="#e91e63" />
          <h3>Custom Designs</h3>
          <p>We create custom designs tailored to your preferences in 24 hours.</p>
        </li>
        <li>
          <FaHome size={40} color="#e91e63" />
          <h3>In-Home Trials</h3>
          <p>Try before you buy with our exclusive in-home trial service.</p>
        </li>
      </ul>
    </section>
  );
}