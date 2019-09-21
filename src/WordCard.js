import React,{Component} from 'react';
import CharacterCard from "./CharacterCard";
import _ from 'lodash';


const prepareStateFormWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}

export default class WordCard extends Component{
    constructor(props){
        super(props)
        this.state = prepareStateFormWord(this.props.value)
    }

    activationHandler = (c) =>{
        console.log(`${c} has been activateed.`)
        let guess = [this.state.guess]+c
        this.setState({guess : guess})
        if(guess.length == this.state.chars.length){
            if(guess == this.state.word){
                this.setState({guess : [] , completed: true})
                alert("You WIN!!")
            }else{
                this.setState({guess : [] , attempt: this.state.attempt+1})
                alert("You LOSE !!  Try Agains")
            }
        }
    }

    render(){
        return(
            <div className = "App">
            <p>Card-Game</p>
            <p>Round : {this.state.attempt}</p>
            {
                Array.from(this.state.chars).map((c,i) => <CharacterCard value = {c} key={i} attempt = {this.state.attempt}
                activationHandler = {this.activationHandler}/>)
            }
            
            <p>{this.state.completed? "WIN":" "}</p>
            </div>
        )
    }
}