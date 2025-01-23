import Link from 'next/link';
import { FaHome, FaMale, FaFemale, FaBoxOpen, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
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
      </nav>
      <button className="cta-button">Sign Up</button>
    </header>
  );
}