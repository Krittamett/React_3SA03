import React, { Component } from 'react';

 export class AddName extends Component{
    constructor(props){
        super(props)
        alert("#### Welcome ####")
    }
    render(){
        return(
            <div className="addname">
                <p>Enter your name</p>
                <input type="string" onBlur={this.onBlur} />
            </div>
        )

    }
}
export default AddName 