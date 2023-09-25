import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About.js';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Map from './pages/Map';
import Database from './pages/Database';
import EntryForm from './pages/EntryForm';
import TestimonialsContainer from './components/TestimonialsContainer';
import SafetySurveyForm from './components/SafetySurveyForm';
import './App.css';

function App() {

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SafetySurveyForm /> {/* Render TestimonialsContainer on the home page */}
                </>
              }
            />
            <Route 
              path="/about" 
              element={
                <>
                <About />
                </>
              } 
            />
            <Route path="/contact" component={Contact} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/map" component={Map} />
            <Route path="/database" component={Database} />
            <Route path="/entryform" component={EntryForm} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
