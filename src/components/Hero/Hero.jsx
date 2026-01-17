import './Hero.css'
const Hero = () => {
  return (
    <section id="hero" className="section hero-bg">
      {/* 1. Блок із заголовком (завжди зверху) */}
      <div className="top-title-bar">
        <h1>MakMouse <span>|</span> Frontend Developer</h1>
      </div>

      {/* 2. Контейнер для фото та тексту */}
      <div className="container content-row">
        <div className="image-box hero-image-box">
          <img src="Models/MakMouse.jpg" alt="MakMouse Portrait" />
        </div>
        
        <div className="text-block">
          <span className="badge">Portfolio Building Mode</span>
          <h2>Pro-Level Code. Starter Prices. No Compromises.</h2>
          <p>Coming from a software engineering background, I don’t just 'build pages' — I write clean, logical code that actually works. I’m currently mastering React and scaling my professional portfolio with real-world projects. This is your chance to get a high-performance website at a fraction of the market cost. I’m 100% committed to your success because my reputation depends on your 5-star feedback. I’m not just a freelancer; I’m an engineer building my name. Let’s win together.</p>
          <a href="mailto:maksymfrankow@email.com" className="cta-button">LET'S BUILD IT</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;