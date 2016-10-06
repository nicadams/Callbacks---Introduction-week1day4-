function map(arr, cb) {
  emptyArr = [];
   for (var i = 0; i < arr.length; i++) {
      emptyArr.push(cb(arr[i]));
   }
   return emptyArr;
}

map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });