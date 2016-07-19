/**
 * @param {number} numRows
 * @return {number[][]}
 */
 
var generate = function(numRows) {
  if(numRows === 0) return [];

  var result = [[1]];
  var i = 1;

  while(i < numRows) {
   result = addSum(result, i);
   i++;
  }

  return result;
};

function addSum(arr, num) {
  var temp = [1];
  var counter = 0;

  while(counter + 1 < num) {
    sum =  arr[arr.length - 1][counter] + arr[arr.length - 1][counter + 1];
    temp.push(sum);
    counter++;
  }

  temp.push(1);
  arr.push(temp);

  return arr;
}
