import React from 'react';
import './App.css';
import 'nes.css/css/nes.min.css';
import { Router, Link } from "@reach/router"
import Home from './Home';

function App() {
  return (
    <main class="nes-container is-dark h-screen">
    <header class="message -left">
        <div class="nes-balloon from-left is-dark w-full">
          <p class='title text-center'>June Lara</p>
                </div>
      </header>
      <nav className="grid gird-cols-1 md:grid-cols-5 ml-4 mt-6">
          <button type="button" class="nes-btn">Home</button>
          <button type="button" class="nes-btn is-primary">Work</button>
          <button type="button" class="nes-btn is-error">Resume</button>
          <button type="button" class="nes-btn is-success">About Me</button>
          <button type="button" class="nes-btn is-warning">Blog</button>
      </nav>
      <section className='mt-24'>
      <Router>
            <Home path='/' />
      </Router>
      </section>

    </main>
  );
}

export default App;