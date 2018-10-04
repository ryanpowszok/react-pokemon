import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addRandomPokemon } from '../actions/PokemonActions'

const RandomPokemon = ({dispatch}) => {
  return (
    <div>
      <form
        style={{marginTop: '3em'}}
        onSubmit={e => {
          e.preventDefault()
          dispatch(addRandomPokemon())
        }}
      >
        <button className="ui button" type="submit">Add Random Pokemon</button>
      </form>
    </div>
  )
}

RandomPokemon.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(RandomPokemon)
