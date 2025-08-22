import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import './main.css';
import HomePage from './Pages/HomePage.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HomePage />
    <Footer />
  </StrictMode>,
)
