import Header from './Components/Header/Header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {

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
}

export default App
