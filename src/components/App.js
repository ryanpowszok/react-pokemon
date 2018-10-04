import React, { Component } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import PokemonList from '../containers/PokemonList'
import RandomPokemon from './RandomPokemon'

class App extends Component {
  render() {
    return (
      <div className="app">
        <SiteHeader />
        <div className="ui main container">
          <h1 className="ui header">Pokemon Characters</h1>
          <PokemonList />
          <RandomPokemon />
        </div>
        <SiteFooter />
      </div>
    )
  }
}

export default App
