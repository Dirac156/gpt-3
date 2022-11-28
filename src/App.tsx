import React from 'react';
import './App.css';
import { Navbar } from './components';
import Brand from './components/brand/brand.component';
import { Header, WhatGPT3 } from './containers';

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
    </div>
  );
}

export default App;
