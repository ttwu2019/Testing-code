/**
 * 定义一个方法，传入一个参数数字，
 * 根据数字打印出乘法表
 * 不可用for循环，用while循环
 * 用console.log打印
 */

function test(num) {
    let i = 1;
    let str = '';
    while (i <= num) {
        let j = 1;
        while (j <= i) {
            str += j + '*' + i + '=' + (i * j) + ' ';
            if (i === j) {
                str += "\n";
            }
            j++;
        }
        i++;
    }
    console.log(str);
}

test(9);