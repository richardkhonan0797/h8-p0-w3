function palindrome(kata) {
  var ans = "";

  for (var i = 0; i < kata.length / 2; i++) {
    if (kata[i] === kata[kata.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
