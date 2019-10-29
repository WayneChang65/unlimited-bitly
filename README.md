[![npm](https://img.shields.io/npm/v/@waynechang65/unlimited-bitly.svg)](https://www.npmjs.com/package/@waynechang65/unlimited-bitly)
[![npm](https://img.shields.io/npm/dm/@waynechang65/unlimited-bitly.svg)](https://www.npmjs.com/package/@waynechang65/unlimited-bitly)
[![Build Status](https://travis-ci.org/WayneChang65/unlimited-bitly.svg?branch=master)](https://travis-ci.org/WayneChang65/unlimited-bitly)
[![GitHub](https://img.shields.io/github/license/waynechang65/unlimited-bitly.svg)](https://github.com/WayneChang65/unlimited-bitly/)
# unlimited-bitly
unlimited-bitly 是一個將**多個**[Bitly](https://bitly.com)帳號的轉短址額度結合起來而成為**一個較大且幾乎可無限擴充額度容量**的模組。  

unlimited-bitly is a module which can **combine many [Bitly](https://bitly.com) accounts together** to be an extensible quota usage.  

## 前言(Overview)
[Bitly](https://bitly.com)是很常被使用來將長網址轉成短網址的服務商，且有提供免費轉短網址服務。不過，免費帳號每個月只有1000個連結轉址的額度。如果有機會每個月使用超過1000個轉址額度，就可以使用本模組將多個帳號(包含付費與免費帳號)結合起來一併使用。  

[Bitly](https://bitly.com) is a service provider that is often used to convert long URLs into short, and also offers free service. However, the free account has only 1000 links for re-directing each month. If you need to use more than 1000 links quotas per month, you can use this module to combine multiple accounts(including paid and free accounts) as one.  

## 這個模組能做什麼事？ (What can it do ?)
* 將多個帳號的轉址額度合併使用，跟使用單一帳號一樣簡單。    
Combine multiple Bitly accounts to use as one account easy.

## 如何在您的專案使用？ (How to use it in your project ?)
* 利用 npm 套件進行下載  
Use npm to install
```
npm install --save @waynechang65/unlimited-bitly
```
* 在您的專案環境中，引用 @waynechang65/unlimited-bitly模組。  
Include @waynechang65/unlimited-bitly package in your project
```javascript
const unlimited_bitly = require('@waynechang65/unlimited-bitly');
```

* 接下來，用**async函式**包含下面幾行程式就搞定了。值得注意的是，BITLY_KEYS陣列要放Bitly帳號的KEY，放幾個帳號都可以。(以下範例是4個帳號)  
Add programs below in an **async function** in your project. It should be mention that please put keys of Bitly accounts in BITLY_KEYS array.(example shows below by 4 Bitly accounts)
```javascript
const BITLY_KEYS = [
	process.env.TOSMM_BITLY_1_KEY,
	process.env.TOSMM_BITLY_2_KEY,
	process.env.TOSMM_BITLY_3_KEY,
	process.env.TOSMM_BITLY_4_KEY
];
let ubitly = unlimited_bitly.init(BITLY_KEYS);
try {
    console.log(await ubitly.shorten(LONG_URL));
} catch(e) {
    console.log(e);
}
```  

* shorten函式會傳回已縮完的短網址。  
The function "shorten" will return a shortened url.  


## 如何跑範例程式？ (How to run the example ?)

* 從GitHub下載unlimited-bitly專案程式  
Clone unlimited-bitly from GitHub
```
git clone https://github.com/WayneChang65/unlimited-bitly.git
```

* 在unlimited-bitly專案環境中，下載必要模組。  
Install dependencies in the cloned unlimited-bitly folder
```
npm install
```

* 將Bitly Key增加TOSMM_BITLY_1_KEY-TOSMM_BITLY_4_KEY的環境變數中。  
Add Bitly Key to env variables(TOSMM_BITLY_1_KEY~TOSMM_BITLY_4_KEY).

* 透過 npm 直接使用以下指令。(實際範例程式在 ./examples/demo.js)  
Run it with npm. (the demo example is in ./examples/demo.js)
```
npm start
```

![image](https://raw.githubusercontent.com/WayneChang65/unlimited-bitly/master/img/demo_result_1.png)  

## 基本函式 (Base Methods)
* init(BITLY_KEYS): 初始化物件(BITLY KEYs 陣列), initialize unlimited-bitly object(BITLY KEYs Array)  
* shorten(longUrl): 進行取得短網址, get shortened url  
> longUrl: 欲縮成短網址的長網址, long url which wants to shorten    

## 參考網站 (Reference)
* [Bitly](https://bitly.com)  

## 貢獻一己之力 (Contribution)
unlimited-bitly 雖然是一個小模組，但本人還是希望這個專案能夠持續進步！若有發現臭蟲(bug)或問題，請幫忙在Issue留言告知詳細情形。  
歡迎共同開發。歡迎Fork / Pull Request，謝謝。:)  

Even though unlimited-bitly is a small project, I hope it can be improving. If there is any issue, please comment and welcome to fork and send Pull Request. Thanks. :)
