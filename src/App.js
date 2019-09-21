import React, { Component } from 'react';
import WordCard from "./WordCard";
import Timer from "./Timer";
import AddName from "./AddName"
import  Footer from './Footer';
import './App.css';
const word = "Hello"
class App extends Component { 
  render() { 
    return ( 
    <div className = "page">
      <AddName/>
      <WordCard value = {word}/>
      <Timer/>
      <Footer/>
    </div> 
    ); 
  } 
} 
export default App;
