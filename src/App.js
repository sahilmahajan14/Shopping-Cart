import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="bg-slate-900 shadow-lg">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
