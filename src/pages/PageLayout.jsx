import { useState } from 'react'
import logo from '../assets/barberoLogo.jpeg'

export default function PageLayout({ children, activePage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="editorial-site">
      <div className="notice-bar">
        Inaugural visit privilege: complimentary botanical scalp therapy with code <strong>INAUGURAL</strong>
      </div>
      <header className="editorial-header">
        <a className="editorial-brand" href="#/" onClick={closeMenu}>
          <img src={logo} alt="Barbero logo" />
          <span>BARBERO</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav className={`editorial-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {[
            ['/', 'Home'],
            ['/services', 'Services & Rituals'],
            ['/about', 'About / Story'],
            ['/contact', 'Contact & Booking'],
          ].map(([href, label]) => (
            <a
              key={href}
              className={activePage === href ? 'active' : ''}
              href={`#${href}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="editorial-book-button" href="#/contact" onClick={closeMenu}>Book now</a>
      </header>
      <main>{children}</main>
      <footer className="editorial-footer">
        <div className="footer-brand-block">
          <a className="editorial-brand" href="#/">
            <img src={logo} alt="Barbero logo" />
            <span>BARBERO</span>
          </a>
          <p>Classic barbering tradition, thoughtfully reimagined for the modern gentleman.</p>
        </div>
        <div>
          <h3>Visit the atelier</h3>
          <p>17 Kingly Court<br />London W1B 5PW</p>
          <p>Mon–Fri 09:00–19:00<br />Saturday 09:00–17:00</p>
        </div>
        <div>
          <h3>Connect</h3>
          <a href="mailto:hello@barberoatelier.com">hello@barberoatelier.com</a>
          <a href="tel:+442079462145">+44 (0)20 7946 2145</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#/contact">Book an appointment</a>
        </div>
        <div>
          <h3>Legal</h3>
          <a href="#/about#terms">Terms & Conditions</a>
          <a href="#/about#etiquette">Appointment etiquette</a>
          <p>© 2026 Barbero Atelier</p>
        </div>
      </footer>
    </div>
  )
}
