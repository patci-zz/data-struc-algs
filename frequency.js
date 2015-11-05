/* given an array of english words, figure out what
  the most common letter (anywhere in a word) is. */

var words = ['Rick', 'Craig'];
var letters = [];

function getLetters(arr) {
  letters.push(arr.join('').toLowerCase());
  letters = letters[0].split('').sort();
  return letters;
}

getLetters(words);

function mostCommon(stringArr) {
  var theMost = '';
  for (i = 0; i < stringArr.length; i++) {

    if(stringArr[i] )
  }
}

