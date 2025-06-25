// Iterative Fibonacci function
function fibs(n) {
  const result = [0, 1];
  if (n <= 0) return [];
  if (n === 1) return [0];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

// Recursive Fibonacci function
function fibsRec(n) {
  console.log("This was printed recursively");
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const arr = fibsRec(n - 1);
  return [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
}

// Export functions
module.exports = { fibs, fibsRec };
