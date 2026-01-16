import './About.css'

const About = () => {
  return (
    <section id="about" className="section about-bg">
        <div className="about-glow"></div>
            <div className="top-title-bar">
                <h2>About me</h2>
            </div>
            <div className="container content-row reverse">
                <div className="image-box about-image-box">
                    <img src="Models/About me-1.jpg" alt="Max - Developer looking over the city architecture"/>
                </div>
                <div className="text-block">
                    <span className="badge">Engineering-Driven Solutions</span>
                    <h3>Professional Background</h3>
                    
                    <p>I am a Front-end Developer with a solid engineering background. My journey began in a structured corporate environment, where I learned the importance of clean, scalable code. Now, I bring that professional discipline to freelancing, crafting modern websites that work as good as they look.</p>

                    <p>I don’t just build pages - I create reliable digital products optimized for speed and performance. I value clear communication and strict deadlines, ensuring you get a high-quality result without technical headaches. My goal is simple: to deliver a solution that helps your business grow.</p>
                    
                    <a href="#skills" className="cta-button" style={{textDecoration: 'none', display: 'inline-block', textAlign: 'center'}}>Explore My Tech Stack</a>
                </div>
            </div>
        </section>
  ); // <--- Ось цей return з дужками обов'язковий!
};

export default About;