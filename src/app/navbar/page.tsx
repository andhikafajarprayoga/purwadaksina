import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link href="/">
            <Image src="/assets/images/Logo-hitam.svg" alt="Purwadaksina Logo" width={180} height={40} style={{objectFit: 'contain'}} />
          </Link>
        </div>
        
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="navbar-actions">
          <button className="btn-primary">
            Hubungi Kami
          </button>
        </div>
      </div>
    </nav>
  );
}
