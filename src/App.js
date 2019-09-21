import React, { Component } from 'react';
import WordCard from "./WordCard";

import './App.css';
const word = "Hello"
class App extends Component { 
  render() { 
    return ( 
    <div className = "page">
      <WordCard value = {word}/>
    </div> 
    ); 
  } 
} 
export default App;
