import React from 'react';
import './App.css';
import { Navbar } from './layouts/Navbar';
import { MainImage } from './layouts/MainImage';
import { Categories } from './layouts/Categories';
import { Footer } from './layouts/Footer';
import { HeroLeftText } from './layouts/HeroLeftText';

function App() {
  return (
    <div>
    <Navbar/>
    <MainImage/>
    <Categories/>
    <HeroLeftText/>
    <Footer/>
    </div>
  );
}

export default App;
