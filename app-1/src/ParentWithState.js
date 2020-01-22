import React, {Component} from 'react';

export default class ParentWithState extends Component{
    constructor() {
        super();

        this.state = {
            userInput: ''
        }
    }

handleChange(value) {
    this.setState({userInput:value});
}

    render() {
        return (
            <div className='input'>
                <input className='inputline' onChange={(event) => this.handleChange(event.target.value)}></input><br></br>
                <p><span className='usertyping'>{(this.state.userInput)}</span></p>
            </div>

           
        )   
    }
}