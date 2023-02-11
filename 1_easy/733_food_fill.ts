/* 
Food fill

Leetcode easy question - https://leetcode.com/problems/flood-fill/submissions/895856232/

*/

const DIRS = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
]
function fill(
  image: number[][],
  seen: boolean[][],
  sr: number,
  sc: number,
  initialColor: number,
  color: number
): number[][] {
  // off the map
  if (sr >= image.length || sr < 0 || sc >= image[0].length || sc < 0) {
    return image
  }
  // already visited
  if (seen[sr][sc]) return image

  // not initial color
  if (image[sr][sc] !== initialColor) return image
  seen[sr][sc] = true
  image[sr][sc] = color

  for (const dir of DIRS) {
    const [x, y] = dir
    fill(image, seen, sr + x, sc + y, initialColor, color)
  }
  return image
}

export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const seen = Array(image.length)
    .fill(null)
    .map(() => Array(image[0].length).fill(false))
  return fill(image, seen, sr, sc, image[sr][sc], color)
}
