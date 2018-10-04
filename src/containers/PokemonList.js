import { connect } from 'react-redux'
import { fetchPokemons } from '../actions/PokemonActions'
import PokemonList from '../components/PokemonList'

const mapStateToProps = state => ({
  pokemons: state.pokemons.items
})

const mapDispatchToProps = dispatch => ({
  fetchPokemonsThenAdd: ids => dispatch(fetchPokemons(ids))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList)
