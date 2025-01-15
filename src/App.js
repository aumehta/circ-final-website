import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Research from './pages/Research';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import HomePage from './pages/HomePage';  // Import the new HomePage component


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          {/* <Route path="/opportunities" element={<Opportunities />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
