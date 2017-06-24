function findLongestWord(arr) {
  var lenOfLongest = 0;
  var longestStr = '';
  for (var i=0; i < arr.length; i++) {
      if (arr[i].length > lenOfLongest) {
          lenOfLongest = arr[i].length
          longestStr = arr[i]
      }
  }
  return longestStr
}



var arr = ['abc', 'adfasdfklewfo asdf', 'abdced', 'adfsadfewwe']

console.log(findLongestWord(arr));
