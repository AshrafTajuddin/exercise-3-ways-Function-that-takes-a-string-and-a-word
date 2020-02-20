# Function that takes a string and a word

## Data Structure
* Create a function that takes a string and a word.
* Then returns true or false depending on whether the word starts with the initial string.

**Expected output**
```javascript
* dictionary("bu", "button") ➞ true
* dictionary("tri", "triplet") ➞ true
```

## Solutions

- [First Solution]()
  ![Imgur](https://i.imgur.com/P1EZnwF.gif)

  ```javascript

  // 1. Created a Function Declaration that have 2 parameters str and word.
  // 2. Used slice() method to extracts a section of a string and returns it as a new string.
  // 3. Used includes() method o determines whether one string may be found within another string n will returning true or false.
  // 3. At the end call the function dictionary and put something to test the output.
  ```

- [Second Solution]()
  ![Imgur](https://i.imgur.com/7DFUqTU.gif)

  ```javascript
  // 1. Created a Function Declaration that have 2 parameters str and word.
  // 2. Used .length to check the length property of a String object contains the length of the string that counted the first character starting with 1.
  // 3. Used .toLowerCase method to returns the calling string value converted to lower case.
  // 4. At the end call the function dictionary and put something to test the output.


  ```

- [Third Solution]()
  ![Imgur](https://i.imgur.com/slvu0W9.gif)

  ```javascript
  // 1. Created a Function Declaration that have 2 parameters str and word.
  // 2. Inside the function , use loop that integer have small or same value of the length of string.
  // 3. Used substring method to returns the part of the string between the start and end indexes, or to the end of the string.  
  //4. At the end call the function dictionary and put something to test the output.

  ```



## Resources
- [Substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
- [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [String length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)










