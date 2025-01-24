import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';
import Script from 'next/script';

export default function Checkout() {
  const { cart } = useCart(); // Destructure cart from context
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.email || !formData.phone || !formData.address) {
      alert('Please fill out all fields.');
      return;
    }

    // Create a Razorpay order with a static amount of ₹999
    try {
      const response = await fetch('/api/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const order = await response.json();

      // Open Razorpay payment modal
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Razorpay Key ID
        amount: order.amount, // Static amount in paise (₹999 = 99900 paise)
        currency: 'INR',
        name: 'FWB',
        description: 'Payment for your order',
        order_id: order.id,
        handler: async function (response) {
          // Handle successful payment
          console.log('Payment successful:', response);

          // Redirect to confirmation page
          router.push('/confirmation');
        },
        prefill: {
          name: 'Customer Name', // You can customize this
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#e91e63', // Customize the theme color
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="checkout-page">
      {/* Load Razorpay SDK */}
      <Script
        id="razorpay-sdk"
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      {/* Header */}
      <header className="header">
        <div className="logo">FWB</div>
        <nav className="nav-links">
          {/* Removed unnecessary links */}
        </nav>
      </header>

      {/* Main Content */}
      <main className="checkout-main">
        {/* Checkout Form */}
        <motion.section
          className="checkout-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Checkout</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="icon" /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone className="icon" /> Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">
                <FaMapMarkerAlt className="icon" /> Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="place-order-button">
              <FaShoppingCart className="icon" /> Pay ₹999
            </button>
          </form>
        </motion.section>

        {/* Cart Summary */}
        <motion.section
          className="cart-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Your Order</h3>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>Rs. {item.price} x {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h4>Total: Rs. 999.00</h4> {/* Static total amount */}
          </div>
        </motion.section>
      </main>
    </div>
  );
}