import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { hotjar } from 'react-hotjar';
import './App.css';
import Home from './components/home/Home';
import Facts from './components/facts/Facts';

function App() {
  useEffect(()=>{
    hotjar.initialize(3385271, 6);
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/facts/:animeName' element={<Facts />} />
      </Routes>
    </div>
  );
}

export default App;
