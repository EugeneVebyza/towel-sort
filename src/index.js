
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
} else {
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        let nextArr = [];
        if (i % 2 > 0) {
            nextArr = nextArr.concat(matrix[i].reverse());
        } else {
            nextArr = nextArr.concat(matrix[i]);
        }
        res = res.concat(nextArr);
    }
    return res;
}

  return [];
}
