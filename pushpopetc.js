/* re-implement: Push, Pop, Shift, and Unshift
for Array.prototype, without using any library functions */


module.exports.RickPush = function RickPush(arr) {
  for (var i = 1; i < arguments.length; i ++) {
    arr[arr.length] = arguments[i];
  }
  return arr.length;
}

module.exports.RickPop = function RickPop(arr) {
  var popped = arr[arr.length-1];
  arr.length --;
  return popped;
}

module.exports.RickShift = function RickShift(arr) {
  var shifted = arr[0];
  for (var i = 0; i < arr.length-1; ++i) {
    arr[i] = arr[i+1];
  }
  arr.length --;
  return shifted;
}

module.exports.RickUnShift = function RickUnShift(arr) {
  // Worked with Jordan Bundy on this part:
  for (var i = arr.length-1; i >= 0; i--) {
    arr[(arguments.length-1) + i] = arr[i];
  }
  for (i = 1; i < arguments.length; i++) {
    arr[i-1] = arguments[i];
  }
  return arr.length;
}


