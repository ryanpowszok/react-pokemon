import reducer from './pokemonReducer';

describe('pokemon reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({items: []})
  })

  it('should handle ADD_POKEMON', () => {
    const startAction = {
      type: 'ADD_POKEMON',
      data: {
        id: 1,
        name: 'foo'
      }
    }

    const realDateNow = Date.now.bind(global.Date)
    const dateNowFake = jest.fn(() => 1530518207007)
    global.Date.now = dateNowFake

    expect(reducer(undefined, startAction)).toEqual({
      items: [{
        id: 1,
        name: 'foo'
      }],
      lastUpdated: dateNowFake()
    })

    global.Date.now = realDateNow
  });

  it('should handle REMOVE_POKEMON', () => {
    const startAction = {
      type: 'REMOVE_POKEMON',
      id: 1
    }

    const realDateNow = Date.now.bind(global.Date)
    const dateNowFake = jest.fn(() => 1530518207007)
    global.Date.now = dateNowFake

    expect(reducer({
      items: [{
        id: 1,
        name: 'foo'
      }]
    }, startAction)).toEqual({items: [], lastUpdated: dateNowFake()})

    global.Date.now = realDateNow
  });
});
