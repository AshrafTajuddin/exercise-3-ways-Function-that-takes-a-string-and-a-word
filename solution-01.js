// Solution 1



function dictionary(str, word) {
    let firstChar= word.slice(0, str.length);
    if (firstChar.includes(str)) {
      console.log("true");
    } else {
      console.log("false");
    }
  };
  
  dictionary("bu", "button");                         // expected output: true
  dictionary("ca", "caffee");                        //  expected output: true
  dictionary("chili", "Malaysia foods are spicy");  //   expected output: false