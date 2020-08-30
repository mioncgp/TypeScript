var isSquare = function (n) {
  if (n % n === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isSquare(-1));
