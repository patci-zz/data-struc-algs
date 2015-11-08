/* given an array of english words, figure out what
  the most common letter is. */

module.exports.frequency = function frequency(arr) {
  var letters = '';
  // Object use per convo with Jordan Bundy and Tyler Morgan.
  var alphabet = {};
  var mostFreq;
  for(i = 0; i < arr.length; i++) {
    (letters += arr[i]).toLowerCase();
  }
  for(i = 0; i < letters.length; i++) {
    if (alphabet[letters[i].toLowerCase()]) {
      ++alphabet[letters[i].toLowerCase()];
    } else alphabet[letters[i].toLowerCase()] = 1;
    if ((alphabet[mostFreq] || 0) < alphabet[letters[i]]) mostFreq = letters[i];
  }
  return mostFreq;
}






