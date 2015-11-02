/* given an array of english words, figure out what
  the most common letter (anywhere in a word) is. */

var words = ['Rick', 'Craig'];
var letters = [];

function frequency(arr) {
  for(i = 0; i < arr.length; i++) {
    for(j = 0; j < arr[i].length; j++) {
      letters.push(arr[i].charAt(j).toLowerCase());
    }
  }
  console.log(letters);
  for(k = 0; k < letters.length; k++) {

  }
}
