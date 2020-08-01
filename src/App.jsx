import React from 'react';
import './App.css';
import 'nes.css/css/nes.min.css';
import { Router, Link } from "@reach/router"
import { Header } from './Header';
import Home from './Home';
import { Footer } from './Footer'
function App() {
  return (
    <div className="grid grid-rows-7">
      <div class="nes-container is-dark row-span-1">
        <Header />
      </div>
      <div className="nes-container row-span-1">
        <nav className="grid gird-cols-1 md:grid-cols-4 ">
          <Link to="/">
            <button type="button" class="nes-btn w-11/12">
              Home
            </button>
          </Link>
          <Link to="work">
            <button type="button" class="nes-btn is-error w-11/12">
              Work 
            </button>
          </Link> 
          <Link to='about-me'>
            <button type="button" class="nes-btn is-success w-11/12">
              About Me
            </button>         
          </Link> 
          <Link to='blog'>
            <button type="button" class="nes-btn is-warning w-11/12">
              Blog
            </button>         
          </Link> 
       </nav>
      </div>
      <div className="row-span-4 router__container">
      <Router>
        <Home path='/' />
      </Router>
      </div>
      <div className="row-span-1 row-start-7 row-end-7">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;