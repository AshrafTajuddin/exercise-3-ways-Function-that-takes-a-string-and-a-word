// Solution 3


function dictionary (str, word) {
    for (let i = 0; i <= str.length; i++) {
        if (str.substring(0,str.length) === word.substring(0,str.length)) {
            return true; 
        } else {
            return false;
        }
      }
    }
    console.log(dictionary("bu", "button"));                          // expected output: true
    console.log(dictionary("ca", "caffee"));                         // expected output: true
    console.log(dictionary("chili", "Malaysia foods are spicy"));   // expected output: false