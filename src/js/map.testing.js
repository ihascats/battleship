const map = [];

for (let i = 0; i < 10; i += 1) {
  const row = [];

  for (let j = 0; j < 10; j += 1) {
    row.push(`${i}|${j}`);
  }
  map.push(row);
}

// eslint-disable-next-line no-unused-expressions
map;
