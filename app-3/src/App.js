import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        userInput: '',
        array: ['Apples', 'Bananas', 'Kiwis', 'Strawberries'],
        filteredArray: []
    }
}

handleChange(value) {
  this.setState({userInput:value});
}

// filterArray(value) {
//     let array = this.state.array;
//     let filteredArray= [];

//     for (let i=0; i < array.length; i++) {
//       if (array[i].hasOwnProperty(value)) {
//         filteredArray.push(array[i]);
//       }
//     }
//     this.setState({filteredArray:filteredArray});
// }

render() {
  // let displayArray = this.state.array.map((element, index) => {
  //   return <h2 key={index}>{element}</h2>;
  let displayArray = this.state.array.filter((element, index) => { 
    return element.includes(this.state.userInput);
  })
  .map((element,index) => {
    return <h2 key={index}>{element}</h2>;
  });

  return (
    <div className="App"><br></br>
       <input className='inputLine' onChange={(event) => this.handleChange(event.target.value)}></input><br></br>
       {displayArray}
       {/* <span className='filteredArray'>{(this.state.filteredArray, null, 10)}</span> */}
    </div>
    );
  }
}

export default App;