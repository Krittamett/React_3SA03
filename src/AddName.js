import React, { Component } from 'react';

 export class AddName extends Component{
    constructor(props){
        super(props)
        alert("#### Welcome ####")
    }
    begin(){
        alert("BEGIN !!")
    }
    render(){
        return(
            <div className="addname">
                <p>Enter your name</p>
                <input type="text" id="userName" name="userName" />
                <button onClick={this.begin}>Start game</button>
            </div>
        )

    }
}
export default AddName 