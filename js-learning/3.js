/**
 * 定义一个方法，传入一个字符串‘abbcccdddd’
 * 打印出每个字母的个数，以obj的格式
 */
function test1(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  console.log(obj);
}

test1("abbcccdddd");
