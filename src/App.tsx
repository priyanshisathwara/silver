import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import Machines from './components/Machines';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <VisionMission />
      <CoreValues />
      <Stats />
      <Machines />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
