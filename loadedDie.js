var loadedDie = (function () {
  // Intialize array list of hard coded die rolls
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  // intialized array index
  var iD = 0;

  return function () {
    // return array value at iD, and then increase array index by 1
    return list[iD++];
  }
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6