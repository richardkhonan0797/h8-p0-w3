function targetTerdekat(arr) {
  // you can only write your code here!
  var index_o = 0;
  var o = 0;
  var index_x = 0;
  var x = 0;
  var jarak = 0;
  var i = 0;
  if(arr.indexOf('x')>-1 && arr.indexOf('o')>-1){
    while(o===0 || x===0){
        if(arr[i] === 'o'){
            index_o = i;
            o++;
            i++;
        }
        else if(arr[i] === 'x'){
            index_x = i;
            x++;
            i++;
        }
        else{
            i++;
        }
      }
      jarak = index_o - index_x;
      return Math.abs(jarak);
  }
  else{
      return jarak;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x']))