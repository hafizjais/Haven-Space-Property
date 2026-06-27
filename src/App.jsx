import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import BrowseRooms from './pages/BrowseRooms';
import HouseDetail from './pages/HouseDetail';
import RoomDetail from './pages/RoomDetail';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

// Scroll Restoration helper component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll top on route changes
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cream-100 text-charcoal">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<BrowseRooms />} />
            <Route path="/houses/:houseId" element={<HouseDetail />} />
            <Route path="/rooms/:roomId" element={<RoomDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback redirect */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer Area */}
        <Footer />

        {/* Floating WhatsApp Action Button Site-wide */}
        <WhatsAppButton floating={true} />

      </div>
    </Router>
  );
}
