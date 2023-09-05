const isLetter = (c) => {
  return c.toLowerCase() !== c.toUpperCase();
}

const isPalindromePhrase = (pWord) => {
  var data2Return = false;

  if (pWord.length >= 2) {
    pWord = pWord.replace(/[^A-Z0-9]/ig, "_");
    var fwdWordArray = [];
    var fwdWord = "";
    var bwdWordArray = [];
    var bwdWord = "";

    for (var i = 0; i < pWord.length; i++) {
      if (isLetter(pWord[i])) {
        fwdWordArray.push(pWord[i]);
      }
    }

    for (i = pWord.length - 1; i >= 0; i--) {
      if (isLetter(pWord[i])) {
        bwdWordArray.push(pWord[i]);
      }
    }

    fwdWord = fwdWordArray.join("");
    bwdWord = bwdWordArray.join("");
    data2Return = fwdWord === bwdWord;
  }
  return data2Return;
}

const longestPalindrome = (pWord) => {
  const charLength = pWord.length;
  var longestPalindrome = "";

  for (var i = 1; i <= charLength; i++) {
    for (var j = 0; j < charLength; j++) {
      const substring = pWord.substring(j, j + i);
      if (isPalindromePhrase(substring) && substring.length > longestPalindrome.length) {
        longestPalindrome = substring;
      }
    }
  }
  return longestPalindrome;
}
