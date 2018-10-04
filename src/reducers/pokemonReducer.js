const pokemons = (state = {items: []}, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        items: [...state.items, {...action.data}],
        lastUpdated: Date.now()
      }
    case 'REMOVE_POKEMON':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
        lastUpdated: Date.now()
      }
    default:
      return state
  }
}

export default pokemons
