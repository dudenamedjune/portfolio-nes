import React from 'react';
import './App.css';
import 'nes.css/css/nes.min.css';
import { Router, Link } from "@reach/router";
import { Header } from './Header';
import Home from './Home';
import { Work } from './Work';
import { Footer } from './Footer';
import { AboutMe } from './AboutMe';
function App() {
  return (
    <div className="grid grid-rows-7">
      <div className="nes-container is-dark row-span-1">
        <Header />
      </div>
      <div className="nes-container row-span-1 m-1 m-4">
        <nav className="grid gird-cols-1 md:grid-cols-3">
          <Link to="/">
            <button type="button" className="nes-btn">
              Home
            </button>
          </Link>
          <Link to="work">
            <button type="button" className="nes-btn is-error">
              Work 
            </button>
          </Link> 
          <Link to='about-me'>
            <button type="button" className="nes-btn is-success ">
              About Me
            </button>         
          </Link> 
       </nav>
      </div>
      <div className="row-span-4 router__container mx-4 mt-4">
      <Router>
        <Home path='/' />
        <Work path='/work' />
        <AboutMe path='/about-me' />
      </Router>
      </div>
      <div className="row-span-1 row-start-7 row-end-7">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;