/**
 * 定义一个方法，传入兩個參數：一个参数，一个参数列表
 * 打印出第一个参数在第二个列表中的位置
 * 如没有，则打印出-1
 * 不可用indexOf()
 */
function test(num, list) {
  for (let i = 0; i < list[0].length; i++) {
    if (num == list[0][i]) {
      return i;
    }
  }
  return -1;
}

console.log(test(0, [[2, 3, 4, 5, 1]]));

/**
 * [[1,2,3],[4,5,6]]
 * 第几个列表的第几个index
 */

console.log([[1, 2, 3]][0].indexOf(1));
