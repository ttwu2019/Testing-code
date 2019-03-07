let util = require("util");
let fs = require("fs");
let cheerio = require("cheerio"); //筛选网页信息
let request = require("request"); //异步的http模块,获取网页内容
let path = require("path");
let proxySet = {
  proxy: "http://dc-ty3-squid-1.cb.local:3128", //设置代理
  method: "get"
};
let allMap = new Map();
const OUT_FILE = path.join(__dirname, "out.txt");
const SUFFIX_LIST = ["xlsx", "csv", "pdf"];
const PAGE_ELEMENTS = [".main", ".footer"];

class defineMethod {
  spider(url) {
    //let outMap = new Map();
    proxySet.url = url;
    /*
        利用request模块，发送Get请求
        第一个参数:请求的完整URL,包括参数
        第二个参数:请求结果回调函数,会传入3个参数,第一个错误,第二个响应对象,第三个请求数据
        */
    request(proxySet, (err, response, body) => {
      if (err) {
        console.log(err);
        console.log("***" + proxySet.url);
      } else {
        let pageMap = this.getLink(body);
        if (pageMap.size != 0) {
          for (let [key, value] of pageMap) {
            if (!allMap.has(key)) {
              //判断如果allMap已经含有这个url了，不做递归
              allMap.set(key, value);
              this.spider(key);
            }
          }
        } else {
          //util.inspect 将任意对象转换为字符串，这里将map对象转化为字符串再写入文件
          //直接写入的话,文件里只显示[object Map]
          fs.writeFileSync(OUT_FILE, util.inspect(allMap), "utf8");
        }
      }
    });
  }

  getLink(body) {
    let reMap = new Map();
    let $ = cheerio.load(body); //jquiry语法  首先需要加载HTML，这是首选
    for (let i in PAGE_ELEMENTS) {
      /*
        .find(selector)
        获取当前匹配元素,集中每个元素的后代，并通过选择器，jQuery对象或元素进行过滤
    */
      let list = $(PAGE_ELEMENTS[i]).find("a"); //查找link
      let text;
      let url;
      if (list) {
        for (let i = 0; i < list.length; i++) {
          text = $(list[i]).text(); //获取链接上的文本内容
          url = $(list[i]).attr("href"); //获取网页的链接地址
          if (url.indexOf("http") == -1) {
            url = "https://help.kintone.com" + url; //输出完整网页地址
          }
          let splitUrl = url.split(".");
          let suffixName = splitUrl[splitUrl.length - 1]; //去除文件下载的链接
          if (
            SUFFIX_LIST.indexOf(suffixName) == -1 &&
            url.indexOf("/ja/k/") != -1
          ) {
            reMap.set(url, text);
          }
        }
      }
    }
    return reMap;
  }
}

module.exports = new defineMethod();
