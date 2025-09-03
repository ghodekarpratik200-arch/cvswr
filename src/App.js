import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './them/global.css'
import Header from './compoents/Header';
import Home from './pages/Home';
import Footer from './compoents/Footer';


function App() {
  return (
<Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
