import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsLoading(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => setIsLoading(false), 800);
  };
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    const sections = ['hero', 'about', 'skills', 'reviews'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Якщо хедер існує І клік відбувся ПОВЗ нього (!contains)
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false); // Ховаємо меню!
      }
    };

    // Вішаємо "слухача" кліків тільки тоді, коли меню відкрите
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Очищаємо за собою (правило хорошого тону в React)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);  

  return (
    <header className="main-header" ref={headerRef}>
      <div className={`loading-bar ${isLoading ? 'active' : ''}`}></div>
      <nav className="container">
        <a href="#hero" className="logo" onClick={() => handleNavClick('hero')}>
          MakMouse<span>.</span>
        </a>
          <button 
            className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {activeSection === 'hero' ? 'Menu' : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            <span className="arrow">◄</span>
          </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {['about', 'skills', 'reviews'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className={activeSection === item ? 'active' : ''}
              onClick={() => handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;