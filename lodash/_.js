// const { isNull } = require("lodash");

const _ = {
  // Clamps number within the inclusive lower and upper bounds. Returns the upper if number is greater than (upper)
  // Returns lower if number is lower than (lower).
  clamp(number, lower, upper) {
    var lowerClampedValue = Math.max(number, lower)
    var clampedValue = Math.min(lowerClampedValue, upper);

    return clampedValue;
  },
// Checks to see if number is in range of start and end
  inRange(number, start, end) {
    if (end == null) {
      end = start
      start = 0
    };
    if (start > end) {
      temp = end
      end = start
      start = temp
    };
    var isInRange = start <= number && number < end;
    return isInRange
  },
// Returns a string split with space between each word.
  words(string) {
    var words = string.split(' ')

    return words;
  },
// Returns a string with space of len between the string.
  pad(string, len) {
    if (len <= string.length) {
      return string;
    }
    const startPaddingLength = Math.floor(Math.abs(len - string.length) / 2);
    const endPaddingLength = len - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    
    return paddedString;
  },
// Checks to see if a value has been defined at object's key.
  has(object, key) {
    const hasValue = object[key]
    if (hasValue == undefined) {
      return false;
    } return true;
  },
// Takes an object as input and switches the key with the value.
  invert(object) { 
    let invertedObject = {};
    for (let key in object) {
      var originalValue = object[key];
      invertedObject = {originalValue : key};
    }
    return invertedObject;
  },

// TAKES TWO ARGUMENTS (an object and a predicate function) a function that returns a boolean value
// RETURNS THE FIRST KEY THAT HAS A VALUE THAT RETURNS A TRUTHY VALUE FROM THE PREDICATE FUNCTION
findKey(object, predicate) {
  for (key in object) {
    var value = object[key]
    var predicateReturnValue =  predicate(value)
    if (predicateReturnValue == true) {
      return key;
    }
  }
  return undefined;
},
// Creates a slice of array with n elements (num) dropped from the beginning.
drop(array, num) {
  if (num == undefined) {
    num = 1
  }
  var newArray = array.slice(num, array.length);
  return newArray;
},

// Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
dropWhile(array, predicate) {
  var anonym = (element, index) => {
    return !predicate(element, index, array);
  }
  var dropNumber = array.findIndex(anonym);
  var droppedArray = this.drop(array, dropNumber);
  return droppedArray;
},
// TAKES IN AN ARRAY AND BREAKS DOWN THE ARRAY INTO (SIZE) OF CHUNKS.
chunk(array, size) {
  if (size == undefined) {
    size = 1;
  }
  var arrayChunks = [];
  for (let i = 0; i < array.length; i += size) {
    var arrayChunk = array.slice(i, i + size);
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks;
}
};



// Do not write or modify code below this line.
module.exports = _;