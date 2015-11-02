/*unique: implement a function called unique.
  It takes an array and returns a copy of the array
  with all the duplicates removed.*/

function unique(arr) {
  arr2 = arr.sort(function(a,b) {
  return a > b;
  });
  for(i = 0; i < arr2.length; i++) {
    if(arr2[i] === arr2[i+1]) {
      arr2.splice(i+1, 1);
    }
  }
  console.log(arr2);
  return arr2;
}
