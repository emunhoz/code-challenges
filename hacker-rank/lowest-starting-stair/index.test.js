import { findLowestStartingStair } from './index'

describe('[Function]: findLowestStartingStair', () => {
  test('sample test example', () => {
    const sample = [-5, 4, -2, 3, 1, -1, -6, -1, 0, 5]
    expect(findLowestStartingStair(sample)).toBe(8)
  })

  test('another sample test example', () => {
    const sample = [1, -4, -2, 3]
    expect(findLowestStartingStair(sample)).toBe(6)
  })

  test('sample test example', () => {
    const sample = [-1, -2, -3, -4]
    expect(findLowestStartingStair(sample)).toBe(11)
  })

  test('sample test example', () => {
    const sample = [1, 3, 4]
    expect(findLowestStartingStair(sample)).toBe(1)
  })
})
