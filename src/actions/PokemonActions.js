const TOTAL_NUM_POKEMONS = 100 // This number isn't accurate but easier to just hard code because of time contraint
const REMOVE_RANDOM_POKEMON = true
let POKEMONS_IDS = []
let PREV_RANDOM_ID = false

export const addPokemon = pokemon => {
  if(POKEMONS_IDS.includes(pokemon.id)) return

  POKEMONS_IDS.push(pokemon.id)

  return {
    type: 'ADD_POKEMON',
    data: pokemon
  }
}

export const removePokemon = id => {
  if(!POKEMONS_IDS.includes(id)) return

  POKEMONS_IDS = POKEMONS_IDS.filter((i) => i !== id)

  return {
    type: 'REMOVE_POKEMON',
    id: id
  }
}

export const addRandomPokemon = () => {
  return dispatch => {
    let randomId
    do {
      randomId = Math.floor(Math.random() * TOTAL_NUM_POKEMONS) + 1
    } while (POKEMONS_IDS.includes(randomId))

    if(REMOVE_RANDOM_POKEMON && PREV_RANDOM_ID) {
      dispatch(removePokemon(PREV_RANDOM_ID))
    }
    dispatch(fetchPokemon(randomId))
    PREV_RANDOM_ID = randomId
  }
}

export const fetchPokemons = (ids) => {
  return dispatch => {
    if(!ids) return

    return ids.reduce((promise, id) => {
      return promise.then((result) => dispatch(fetchPokemon(id)))
    }, Promise.resolve())
  }
}

export const fetchPokemon = (id) => {
  return dispatch => {
    if(!id) return

    return getPokemonAPI(id)
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        dispatch(addPokemon(data))
        dispatch(fetchPokemonsSuccess())
        return data
      })
      .catch(error => dispatch(fetchPokemonsFailure(error)))
  }
}

const getPokemonAPI = (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
  return fetch(URL, { method: 'GET'})
}

const fetchPokemonsSuccess = () => {
  return {
    type: "FETCH_POKEMONS_SUCCESS"
  }
}

const fetchPokemonsFailure = (error) => {
  return {
    type: "FETCH_POKEMONS_FAILURE",
    error
  }
}

// Handle HTTP errors since fetch won't.
const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
