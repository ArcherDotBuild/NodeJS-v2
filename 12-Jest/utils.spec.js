const { getNewUser, mapObjectToArray } = require('./utilities')

// Described is like you're describing the piece of code that you're about to test
describe('mapObjectToArray', () => {
  test('maps values to array using callback', () => {
    const result = mapObjectToArray({ age: 30, height: 65 }, (k, v) => {
      return v + 10
    })

    // expect(result).toEqual([50, 85]) // Failed
    expect(result).toEqual([40, 75])
  })

  test('callback gets called', () => {
    // This creates a Mock Callback
    const mockCb = jest.fn()
    const result = mapObjectToArray({ age: 30, height: 65 }, mockCb)

    // expect(mockCb.mock.calls.length).toBe(33) // Failed
    expect(mockCb.mock.calls.length).toBe(2)
  })
})

/*
  Asynchronous Tests
*/

describe('getNewUser()', () => {
  test('it gets user', async () => {
    const user = await getNewUser(1)
    expect(user).toBeTruthy()
    // expect(user.id).toBe(90) //Failed
    expect(user.id).toBe(1)
  })

    test('no user found', async () => {
      expect.assertions(1)
      
      try {
        // const user = await getNewUser(1) // Failed
        const user = await getNewUser(10909)
      } catch(e) {
        expect(e).toBeTruthy()
      }
    })
})
