/*unique: implement a function called unique.
  It takes an array and returns a copy of the array
  with all the duplicates removed.*/

function unique(arr) {
  var arrCopy = [];
  // Idea to use object from Jordan Bundy and Tyler Morgan
  var checkAgainst = {};
  for (var i = 0; i < arr.length; i++) {
    if (!checkAgainst[arr[i]]) {
      checkAgainst[arr[i]] = arr[i];
      arrCopy[arrCopy.length] = arr[i];
    }
  }
  return arrCopy;
}
