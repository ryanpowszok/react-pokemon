import React, { Component } from 'react';
import PokemonContainer from './components/PokemonContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pokemon App</h1>
        <PokemonContainer />
      </div>
    )
  }
}

export default App;
