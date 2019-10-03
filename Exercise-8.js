function pasanganTerbesar(num) {
  // you can only write your code here!
  var angkaTerbesar = 0;
  ketemuAngkaTerbesar = 0;
  var strNum = num.toString().split("");

  for (var i = 0; i < strNum.length; i++) {
    if (strNum[i] >= angkaTerbesar) {
      angkaTerbesar = strNum[i];
    }
  }

  var j = 0;
  while(ketemuAngkaTerbesar === 0){
      if(strNum[j]===angkaTerbesar){
          return angkaTerbesar+strNum[j+1];
          ketemuAngkaTerbesar++;
      }else{
          j++;
      }
  }
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
