import React from 'react';
import './Footer.css';

// 1. Імпортуємо іконки (не забудь, що react-icons має бути встановлений)
import { FaGithub, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  
  // 2. Додаємо іконки до об'єктів
  const socialLinks = [
    { label: "GitHub", url: "https://github.com/MakMouse/MakMouse_Portfolio", icon: <FaGithub /> },
    { label: "Telegram", url: "https://t.me/Andriy_aboba", icon: <FaTelegramPlane /> },
    { label: "Email", url: "mailto:maksymfrankow@email.com", icon: <FaEnvelope /> }
  ];

  return (
    <footer className="main-footer">
      <div className="container footer-content">
        
        {/* Логотип та опис */}
        <div className="footer-logo">
          <h3>MakMouse<span>.</span></h3>
          <p>Building digital products that don't suck.</p>
        </div>

        {/* Соцмережі через масив */}
        <div className="footer-socials">
          <h4>Connect with me</h4>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-item" // Додав клас для зручності
              >
                {/* Рендеримо іконку перед текстом */}
                <span className="icon">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Заклик до дії */}
        <div className="footer-cta">
          <h4>Ready to start?</h4>
          <a href="mailto:maksymfrankow@email.com" className="footer-mail">
            maksymfrankow@email.com
          </a>
        </div>
      </div>

      {/* Копірайт */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MakMouse. All rights reserved. Made with ❤️ and caffeine.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;