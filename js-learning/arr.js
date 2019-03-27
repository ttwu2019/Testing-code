//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let arr = [2, 2, 40, 5];
arr.sort(function compareNumbers(a, b) {
    return a - b;
  });
console.log(arr);
