function groupAnimals(animals) {
  // you can only write your code here!
  var res = []
  var temp = []
  for(var i=92;i<=122;i++){
    for(var j=0;j<animals.length;j++){
      if(animals[j].charCodeAt(0)===i){
        temp.push(animals[j])
      }
    }
    if(temp.length!==0)
      res.push(temp)
    temp = []
  }
  return res
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]