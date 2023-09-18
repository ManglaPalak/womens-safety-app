import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Map from './pages/Map';
import Database from './pages/Database';
import EntryForm from './pages/EntryForm';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        {/* Render the appropriate component based on the URL path */}
        {/* For a real app, use react-router or similar */}
        {window.location.pathname === '/about' && <About />}
        {window.location.pathname === '/contact' && <Contact />}
        {window.location.pathname === '/feedback' && <Feedback />}
        {window.location.pathname === '/map' && <Map />}
        {window.location.pathname === '/database' && <Database />}
        {window.location.pathname === '/entry-form' && <EntryForm />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
