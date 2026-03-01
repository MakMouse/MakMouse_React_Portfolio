import Header from './Components/Header/Header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';

const App = () => {

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Reviews />
    </div>
  );
}

export default App
