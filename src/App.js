import React, { Component } from 'react';
import './App.css';
import avengers from './avengerData';

class App extends Component {
	constructor() {
		super();
		this.state = {
			avengers: avengers
		};
	}
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Avengers by Emmeline</h1>
        </header>
        {this.state.avengers.map(avengers => {
          return (
            <p className="App-intro" key={avengers.id}>
            Name: {avengers.name} Species: {avengers.specialPowers}
            </p>
          );
        })};
      </div>
    );
  }
}

export default App;
