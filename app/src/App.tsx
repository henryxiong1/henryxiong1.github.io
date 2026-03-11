import { Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencesPage from './pages/ExperiencesPage';
import PastCasesPage from './pages/PastCasesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/past-cases" element={<PastCasesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
