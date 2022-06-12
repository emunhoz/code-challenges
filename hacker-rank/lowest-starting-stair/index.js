export function findLowestStartingStair(arr) {
  let min = Number.MAX_VALUE
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    min = Math.min(sum, min)
  }

  return Math.max(0, -1 * min) + 1
}
