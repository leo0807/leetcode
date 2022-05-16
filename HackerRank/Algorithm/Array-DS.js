function reverseArray(a) {
  // Write your code here
  const len = a.length;
  for (let i = 0; i < (len >> 1); i++) {
    [a[i], a[len - i - 1]] = [a[len - i - 1], a[i]]
  }
  return a;
}