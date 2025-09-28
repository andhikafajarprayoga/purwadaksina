import Link from 'next/link';
import Image from 'next/image';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image 
              src="/assets/images/Logo-hitam.svg" 
              alt="Purwadaksina Logo" 
              width={190} 
              height={40} 
              style={{objectFit: 'contain'}} 
            />
          </div>
          
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li><Link href="/mission">Mission</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/newsletter">Newsletter</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
              <li><Link href="/faq">FAQ's</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Social</h3>
            <ul>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
              <li><Link href="#">YouTube</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>Copyright © Purwadaksina</p>
          </div>
          <div className="footer-terms">
            <Link href="/terms">Terms of Service</Link>
          </div>
          <div className="footer-back-to-top">
            <button
              className="back-to-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
