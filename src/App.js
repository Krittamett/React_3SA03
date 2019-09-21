import React, { Component } from 'react';
import WordCard from "./WordCard";
import Timer from "./Timer";
import AddName from "./AddName"
import  Footer from './Footer';
import './App.css';
const word = "Hello"
class App extends Component {
  constructor() {
    super()
    this.state = {
      message: "Answer"
    }
    this.answer = this.answer.bind(this);
  }

  answer(){
    this.setState({message:"HELLO"});
  }
  render() { 
    return ( 
    <div className = "page">
      <AddName/>
      <WordCard value = {word}/>
      <Timer/>
      <div className="Center"><button onClick = {this.answer}>ANSWER HERE</button><p>{this.state.message}</p></div>
      <Footer/>
    </div> 
    ); 
  } 
} 
export default App;
