import React from 'react';
import './App.css';
import { CTA, Navbar } from './components';
import Brand from './components/brand/brand.component';
import { Blog, Features, Header, Possibility, WhatGPT3 } from './containers';

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </div>
  );
}

export default App;
