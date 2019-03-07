const SPIDER_URL = "http://doc-review.dev.cybozu.co.jp:8000/ja/k/index.html";
let run = require("./defineMethod");

run.spider(SPIDER_URL);
console.log(`The result can be seen in the following file.\nout.txt`);
