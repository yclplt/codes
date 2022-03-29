const codeA = "a".charCodeAt();

function grid(N) {
  if (N < 0) return null;
  const grid = [];
  for (let row = 0; row < N; row++) {
    const cells = [];
    for (let cell = 0; cell < N; cell++) {
      cells.push(String.fromCharCode(codeA + ((row + cell) % 26)));
    }
    grid.push(cells.join(" "));
  }
  return grid.join("\n");
}

module.exports = grid;
