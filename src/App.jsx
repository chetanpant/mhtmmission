import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/dash"  element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
