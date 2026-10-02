'use client';

import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#skills', label: 'Skills', num: '02' },
  { href: '#experience', label: 'Experience', num: '03' },
  { href: '#projects', label: 'Projects', num: '04' },
  { href: '#events', label: 'Events', num: '05' },
  { href: '#education', label: 'Education', num: '06' },
  { href: '#contact', label: 'Contact', num: '07' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <a href="#" className="nav-brand" onClick={() => setIsOpen(false)}>
          <b>AS<i>_</i></b>
          <span className="nav-status-badge mono">● SEC_ENGINEER</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta-btn">
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={handleLinkClick}>
        <div
          className="mobile-menu-drawer"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="mobile-menu-header">
            <span className="nav-brand">
              <b>AS<i>_</i></b>
            </span>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="mobile-menu-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <span className="mono green">{item.num}</span>
                <span className="mobile-nav-text">{item.label}</span>
                <span className="mobile-nav-arrow">→</span>
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <a
              href="#contact"
              className="btn primary mobile-cta"
              onClick={handleLinkClick}
            >
              Contact Adnan
            </a>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {scrolled && (
        <button
          type="button"
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
        >
          ▲
        </button>
      )}
    </>
  );
}
