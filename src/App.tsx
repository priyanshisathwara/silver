import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlasticMolding from './pages/PlasticMolding';
import AlliedServices from './pages/AlliedServices';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plastic-molding" element={<PlasticMolding />} />
        <Route path="/allied-service" element={<AlliedServices />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
