function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var perkalian = arr[1] / arr[0];
  var ans;
  for (i = 0; i < arr.length; i++) {
    if (i === 0) {
      ans = true;
    } else if (arr[i] === arr[i - 1] * perkalian) {
      ans = true;
    } else {
      ans = false;
    }
  }
  return ans;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
