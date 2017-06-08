
function getMatchedVector ({x, y, dx, dy, id}, data) {
  const points = []
  for (let cursorY = y, cursorX = x; ; cursorY += dy, cursorX += dx) {
    if (data[cursorX] && data[cursorX][cursorY] === id) {
      points.push({x: cursorX, y: cursorY})
    } else {
      return points
    }
  }
}

function getMatchedOrientation ({x, y, dx, dy, id}, data) {
  const forwLine = getMatchedVector({x: x + dx, y: y + dy, dx, dy, id}, data)
  const backLine = getMatchedVector({x: x - dx, y: y - dy, dx: -dx, dy: -dy, id}, data)
  return backLine
    .reverse()
    .concat({x, y})
    .concat(forwLine)
}

function findLine ({x, y, id, minLength}, data) {
  const orientations = [
    {dx: 0, dy: 1},
    {dx: 1, dy: 0},
    {dx: 1, dy: 1},
    {dx: 1, dy: -1}
  ]
  const foundLines = orientations
    .map(({dx, dy}) => getMatchedOrientation({x, y, dx, dy, id}, data))
  const longestMatchingLine = foundLines
    .filter(line => line.length >= minLength)
    .sort((a, b) => a.length - b.length)
    .pop()
  return longestMatchingLine
}

export default findLine
