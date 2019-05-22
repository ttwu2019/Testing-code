# https://beautifulsoup.readthedocs.io/zh_CN/v4.4.0/

import requests
from bs4 import BeautifulSoup

r = requests.get("http://doc-review.dev.cybozu.co.jp:8000/ja/k/index.html")

html = BeautifulSoup(r.text, 'html.parser')

a = html.find_all('a')
b = {}

for link in a:
    b[link.get_text()] = link.get('href')
print(b)
