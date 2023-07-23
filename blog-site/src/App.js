import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Hero from './components/Hero';
import Linkbar from './components/Linkbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Linkbar/>
      <Routes>
        <Route path="/blogs" element={<Blog />} />
        <Route path="/" element={<Hero />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
