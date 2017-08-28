
function palindrome(str) {
  
  str = str.toLowerCase();
  
  isAlpha = function(c) {
    if ((c in "abcdefghijklmnopqrstuvwxyz") || (c in "1234567890")) {
      return true;
    }
  }
  
  for (var x=0; x<str.length; x++) {
    if (!isAlpha(str[x])) {
      str.replace(x, "");
    }
  }
  
  
  var j = str.length - 1;
  
  for (var i=0; i <= j; i++) {
    if (str[i] !== str[j]) {
      return false;
    } else {
      j--;
      continue;
    }
    }
  return true;
}



palindrome("eye");
