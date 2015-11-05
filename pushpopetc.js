/* re-implement: Push, Pop, Shift, and Unshift
for Array.prototype, without using any library functions */

Array.prototype.RickPush = function(arg) {
  var positions = this.length;
  this[positions] = arg;
  return this.length;
}

Array.prototype.RickPop = function() {
  var popped = this[this.length-1];
  this.length --;
  return popped;
}

Array.prototype.RickShift = function() {
  return this.splice(0,1);
}

Array.prototype.RickUnshift = function(arg) {

  return this.length;
}
