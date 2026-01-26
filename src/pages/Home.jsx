import Hero from '../components/Hero';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import CoreValues from '../components/CoreValues';
import Machines from '../components/Machines';
import Services from '../components/Services';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      setTimeout(() => {
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <VisionMission />
      <CoreValues />
      <Stats />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Contact />
    </div>
  );
}

export default Home;
