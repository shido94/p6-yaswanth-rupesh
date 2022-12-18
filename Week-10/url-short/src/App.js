import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Header.js';
import Footer from './Footer.js';
import HomePage from './components/pages/HomePage'
import ContactUsPage from './components/pages/ContactPage'


function App() {
  return (
      <Router>
        <div>
            <Header />
            <Routes>
                <Route path='/' element={ <HomePage /> }  exact/>
                <Route path='/contact' element={ <ContactUsPage /> } />
            </Routes>
            <Footer />
        </div>
      </Router>
  );
}


export default App;
