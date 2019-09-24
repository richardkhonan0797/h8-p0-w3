function angkaPalindrome(num) {
  // you can only write your code here!
  var palindrome = 0;
  while(palindrome == 0){
      reverse = num.toString().split("").reverse().join("");
      reverse = parseInt(reverse);
      if(reverse === num){
          palindrome = 1;
      }
      else{
          num++;
      }
  }
  if(num<11){
      return num += 1;
  }
  return num;
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
