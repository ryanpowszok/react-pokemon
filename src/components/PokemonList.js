import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Pokemon from './Pokemon'

class PokemonList extends Component {

  componentDidMount() {
    this.props.fetchPokemonsThenAdd([7,4,1])
  }

  render() {
    const { pokemons } = this.props

    return (
      <div className="ui four cards">
        {pokemons.map(pokemon =>
          <Pokemon
            key={pokemon.id}
            {...pokemon}
          />
        )}
      </div>
    )
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.array
}

export default PokemonList
