import React, { useState } from 'react';
import './Footer.css';
import { FaGithub, FaTelegramPlane, FaLinkedin, FaCheck } from 'react-icons/fa';

const Footer = () => {
  const [showToast, setShowToast] = useState(false);
  const myEmail = "maksymfrankow@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault(); 
    navigator.clipboard.writeText(myEmail).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500);
    });
  };

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/MakMouse/MakMouse_React_Portfolio", icon: <FaGithub /> },
    { label: "Telegram", url: "https://t.me/Andriy_aboba", icon: <FaTelegramPlane /> },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/maksym-frankov-191b363b2/", icon: <FaLinkedin />}
  ];

  return (
    <footer id="footer" className="main-footer">
      <div className="container footer-content">
        
        <div className="footer-logo">
          <h3>MakMouse<span>.</span></h3>
          <p>Building digital products that don't suck.</p>
        </div>

        <div className="footer-socials">
          <h4>CONNECT WITH ME</h4>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target={link.isEmail ? "_self" : "_blank"} 
                rel={link.isEmail ? "" : "noopener noreferrer"}
                className="social-item"
                onClick={link.isEmail ? handleCopyEmail : undefined} 
              >
                <span className="icon">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-cta">
          <h4>READY TO START?</h4>
          <a 
            href="#" 
            className="footer-mail"
            onClick={handleCopyEmail}
          >
            {myEmail}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MakMouse. All rights reserved. Made with ❤️ and caffeine.</p>
        </div>
      </div>
      <div className={`toast-notification ${showToast ? 'show' : ''}`}>
        <div className="toast-content">
          <FaCheck className="toast-icon" />
          <span>Email copied to clipboard!</span>
        </div>
        <div className="toast-progress"></div>
      </div>
    </footer>
  );
};

export default Footer;