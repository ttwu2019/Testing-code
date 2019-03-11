/**
 * 定义一个方法，传入一个字符串‘abbcccdddd’
 * 打印出每个字母的个数，以obj的格式
 */

function test(str) {
    let obj = {}, num;
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            num = num + 1;
            obj[str[i]] = num;
        } else {
            num = 1;
            obj[str[i]] = num;
        }
    }
    console.log(obj);
}

test('abbcccdddd')