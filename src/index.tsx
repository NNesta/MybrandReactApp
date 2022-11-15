import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/navbar';
import Works from './components/Works';
import Footer from './components/Footer';
import { Home } from './components/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='relative flex flex-col overflow-x-hidden '>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
