import React, { Component } from 'react';
import WordCard from "./WordCard";
import Timer from "./Timer";
import  Footer from './Footer';
import './App.css';
const word = "Hello"
class App extends Component {
  constructor() {
    super()
    this.state = {
      message: "Answer",
      type:""
    }
    this.answer = this.answer.bind(this);
  }
  setName(event){
    this.setState({type:event.target.value})
  }

  begin(){
    alert("BEGIN !!")
}
  answer(){
    this.setState({message:"HELLO"});
  }
  render() { 
    return ( 
    <div className = "page">
      <div className="setname">
                <p>Enter your name</p>
                <input type="text" onChange={this.setName.bind(this)} />
                <button onClick={this.begin}>Start game</button>
                <p>Welcome : {this.state.type}</p>
            </div>
      <WordCard value = {word}/>
      <Timer/>
      <div className="Center"><button onClick = {this.answer}>ANSWER HERE</button><p>{this.state.message}</p></div>
      <Footer/>
    </div> 
    ); 
  } 
} 
export default App;
