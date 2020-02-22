// Solution 2


function dictionary(str, word) {
    const indexEnd = str.length;
    const lowerCaseStr = str.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    if (lowerCaseWord.substring(lowerCaseStr, indexEnd) === str) {
      return true;
    } else {
      return false;
    }
  };
  console.log(dictionary("bu", "button"));                               // expected output: true
  console.log(dictionary("ca", "caffee"));                              // expected output: true
  console.log(dictionary("chili", "Malaysia foods are spicy"));        // expected output: false
  
  