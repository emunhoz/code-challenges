export function findLowestStartingStair(arr) {
  let min = Number.MAX_VALUE
  let sum = 0

  for (const i of arr) {
    sum += i
    min = Math.min(sum, min)
  }

  return Math.max(0, -1 * min) + 1
}
