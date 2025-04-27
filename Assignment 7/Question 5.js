// Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case.

word = "abra karba";

l = 0;
r = word.length;
let charCode;
r--
while (l < r) {
  charCode = word[l].charCodeAt(0);
  harCode = word[r].charCodeAt(0);
  if (
    !(charCode > 47 && charCode < 58) &&
    !(charCode > 96 && charCode < 123) &&
    !(charCode > 64 && charCode < 91)
  ) {
    l++;
    
  }
  else if (
    !(harCode > 47 && harCode < 58) &&
    !(harCode > 96 && harCode < 123) &&
    !(harCode > 64 && harCode < 91)
  ) {
    r--;
  }
  else{
    if (word[l].toLowerCase() !== word[r].toLowerCase()) {
        console.log("False")
        break}
    else{
        l++
        r--
    }
  }
}


if (r-l<=0){
    console.log("It is a palindrome")
}