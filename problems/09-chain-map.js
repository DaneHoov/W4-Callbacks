/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/
// Write a function `chainMap` that accepts a value and any number of callbacks as
// arguments. The function should return the final result of passing the value through
// all of the given callbacks. In other words, if three callbacks are given then:

// - the value is given to the first callback
// - the result of the first callback is given to the second callback
// - the result of the second callback is given to the third callback
// - the result of the third callback is the final result

function chainMap(val, ...callbacks) {
  // let result = val;
  if (callbacks === undefined) {
    return val;
  }
  else {
    callbacks.forEach(element => {
      val = element(val);
    })
    return val;
  }

  // if (cb2 === undefined && cb3 === undefined) {
  //   let res1 = cb1(val);
  //   return res1;
  // } else if (cb3 === undefined) {
  //   let res2 = cb2(res1)
  //   return res2;
  // }
  // else {
  //   let res3 = cb3(res2)
  //   return res3;
  // }
}

let add5 = function (n) {
  return n + 5;
};

let half = function (n) {
  return n / 2;
};

let square = function (n) {
  return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = chainMap;
} catch (e) {
  return null;
}
