import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Confirmation() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Fetch order details from localStorage or an API
    const storedOrder = localStorage.getItem('razorpayOrder');
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    } else {
      // Redirect to home if no order details are found
      router.push('/');
    }
  }, [router]);

  return (
    <div className="confirmation-page">
      {/* Header */}
      <header className="header">
        <div className="logo">FWB</div>
        <nav className="nav-links">
          <Link href="/">Home</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="confirmation-main">
        <motion.section
          className="confirmation-details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="success-icon">
            <FaCheckCircle size={64} color="#4CAF50" />
          </div>
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase. Your order has been confirmed.</p>

          {orderDetails && (
            <div className="order-summary">
              <h3>Order Summary</h3>
              <p><strong>Order ID:</strong> {orderDetails.id}</p>
              <p><strong>Amount Paid:</strong> ₹999.00</p>
              <p><strong>Payment Status:</strong> Successful</p>
            </div>
          )}

          <Link href="/">
            <button className="home-button">Back to Home</button>
          </Link>
        </motion.section>
      </main>
    </div>
  );
}