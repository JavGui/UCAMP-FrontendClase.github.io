// FRONTEND02
import React from 'react'

import Header from './components/Header'
import Home from './components/Home/Home'
import GuitarState from './context/GuitarState';


import './App.css';

function App() {
  return (
  <div>
    <GuitarState>
      <Header/>
      <Home/>
    </GuitarState>
  </div>
)
}

export default App;

