import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="logo">FWB</div>
            <nav className="nav">
                <Link href="#home">Home</Link>
                <Link href="#men">Men</Link>
                <Link href="#women">Women</Link>
                <Link href="#collections">Collections</Link>
                <Link href="#about">About</Link>
                <Link href="#contact">Contact</Link>
            </nav>
            <button className="cta-button">Sign Up</button>
        </header>
    );
}