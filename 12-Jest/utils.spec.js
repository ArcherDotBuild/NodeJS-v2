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
    const result = mapObjectToArray({age: 30, height: 65}, mockCb)

    // expect(mockCb.mock.calls.length).toBe(33) // Failed
    expect(mockCb.mock.calls.length).toBe(2)
  })
})
