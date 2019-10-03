function cariMean(arr) {
    // you can only write your code here!
    total = 0
    for(i=0;i<arr.length;i++){
        intArr = parseInt(arr[i]);
        total = total + intArr;
    }
    mean = total/arr.length;
    
    sisa = mean % Math.floor(mean);
    if(sisa>=0.5){
        pembulatan = Math.ceil(sisa);
        return Math.floor(mean)+pembulatan;
    }else{
        pembulatan = Math.floor(sisa);
        return Math.floor(mean)+pembulatan;
    }
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7