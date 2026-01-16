import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  // 1. Стан для активної секції (твоя логіка)
  const [activeSection, setActiveSection] = useState('hero');
  
  // 2. Стан для смужки завантаження (НОВЕ)
  const [isLoading, setIsLoading] = useState(false);

  // Функція, яка обробляє клік: і смужку запускає, і секцію перемикає
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId); // Миттєво підсвічуємо кнопку
    setIsLoading(true);          // Запускаємо смужку
    
    // Через 800мс вимикаємо смужку (щоб вона зникла і повернулася на старт)
    setTimeout(() => setIsLoading(false), 800);
  };

  // --- ТВОЯ ЛОГІКА СКРОЛУ (БЕЗ ЗМІН) ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      const sections = ['about', 'skills', 'reviews'];
      const detectionLine = window.innerHeight * 0.3;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= detectionLine && rect.bottom >= detectionLine) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="main-header">
      
      {/* --- СМУЖКА ЗАВАНТАЖЕННЯ (НОВЕ) --- */}
      <div className={`loading-bar ${isLoading ? 'active' : ''}`}></div>

      <nav className="container">
        {/* Логотип теж може запускати анімацію, якщо хочеш */}
        <a href="#hero" className="logo" onClick={() => handleNavClick('hero')}>
          MakMouse<span>.</span>
        </a>

        <div className="nav-links">
          {/* Оновлені посилання:
             1. href="#..." - щоб скролило
             2. className - твоя логіка підсвітки
             3. onClick - запускає нашу нову функцію handleNavClick
          */}
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleNavClick('about')}
          >
            About me
          </a>
          
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => handleNavClick('skills')}
          >
            Skills
          </a>
          
          <a 
            href="#reviews" 
            className={activeSection === 'reviews' ? 'active' : ''}
            onClick={() => handleNavClick('reviews')}
          >
            Reviews
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;