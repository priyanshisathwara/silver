import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlasticMolding from './pages/PlasticMolding';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plastic-molding" element={<PlasticMolding />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
