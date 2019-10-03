function perkalianUnik(arr) {
  // you can only write your code here!
  arrBaru = [];
  jumlahPerkalian = 1;
  for(i=0;i<arr.length;i++){
    var splicedIndex = arr.splice(i,1);
    for(j=0;j<arr.length;j++){
      jumlahPerkalian = jumlahPerkalian * arr[j];
    }
    arrBaru.push(jumlahPerkalian);
    jumlahPerkalian = 1;
    arr.splice(i,0, ...splicedIndex);
  }
  return arrBaru; 
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
