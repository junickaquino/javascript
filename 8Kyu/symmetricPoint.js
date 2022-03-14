function symmetricPoint(p, q) {
  return [2 * q[0] - p[0], 2 * q[1] - p[1]];
}

console.log(symmetricPoint([0, 0], [1, 1]));

/*

function symmetricPoint(p, q) {
  const p1 = (q[0] * 2) - p[0]
  const p2 = (q[1] * 2) - p[1]
  
  return [p1, p2]
}

*/
