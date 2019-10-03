function groupAnimals(animals) {
    // you can only write your code here!
    var newArr = [];
    var temp = [];
    animals.sort();
    index = 0;
    
    for(i=0;i<animals.length;i++){
      if(i===0){
        temp.push(animals[i]);
      }else if(animals[i][0]===animals[i-1][0]){
        temp.push(animals[i]);
      }else{
        newArr.push(temp);
        temp = [];
        temp.push(animals[i]);
      }
    }
    newArr.push(temp);
    return newArr;
  }
  
  //['ayam','anoa','cacing','kuda','kancil']
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]