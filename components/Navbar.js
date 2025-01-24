import Link from 'next/link';
import { FaHome, FaMale, FaFemale, FaBoxOpen, FaInfoCircle, FaEnvelope, FaShoppingCart } from 'react-icons/fa';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { useCart } from '../context/CartContext'; // Import useCart

export default function Navbar() {
  const { cart } = useCart(); // Use the cart state from CartContext

  return (
    <header>
      <div className="logo">FWB</div>
      <nav className="nav">
        <Link href="#home" className="nav-link">
          <FaHome className="nav-icon" />
          <span>Home</span>
        </Link>
        <Link href="#men" className="nav-link">
          <FaMale className="nav-icon" />
          <span>Men</span>
        </Link>
        <Link href="#women" className="nav-link">
          <FaFemale className="nav-icon" />
          <span>Women</span>
        </Link>
        <Link href="#collections" className="nav-link">
          <FaBoxOpen className="nav-icon" />
          <span>Collections</span>
        </Link>
        <Link href="#about" className="nav-link">
          <FaInfoCircle className="nav-icon" />
          <span>About</span>
        </Link>
        <Link href="#contact" className="nav-link">
          <FaEnvelope className="nav-icon" />
          <span>Contact</span>
        </Link>
        <Link href="/cart" className="nav-link cart-icon">
          <FaShoppingCart className="nav-icon" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </nav>

      {/* Clerk Authentication */}
      <SignedOut>
        <SignInButton mode="modal">
          <button className="cta-button">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </header>
  );
}