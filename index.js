const sumItems = function(array) {
  let sum = 0;
  for (const item of array) {
    if (Array.isArray(item) === true) {
      sum += sumItems(item);
    } else  {
      sum += parseInt(item);
    }
  }
  return sum;
};

module.exports = sumItems;