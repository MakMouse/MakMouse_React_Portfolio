import { useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {

  // --- ЛОГІКА: ЗАЛІЗОБЕТОННА ВИСОТА ---
  useEffect(() => {
    // 1. Міряємо висоту ОДИН РАЗ при завантаженні
    const vh = window.innerHeight;
    
    // 2. Записуємо це число (наприклад, "960px") у змінну
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // 3. ВАЖЛИВО: Ми НЕ додаємо слухача 'resize'.
    // Якщо користувач змінить масштаб - похуй. Висота залишиться старою.
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default App;