function getMinMax(str) {
  let result = {};
  
  let arr = str.split(' ')
  .map((item) => parseFloat(item))
  .filter((item) => !Number.isNaN(item));
  
  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
 
  return result
}