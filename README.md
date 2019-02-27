# Javascript 常用工具类库

[![npm version](https://img.shields.io/npm/v/eg-utils.svg?style=flat-square)](https://www.npmjs.org/package/eg-utils)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/xe-utils/blob/master/LICENSE)

eg-Utils 提供常用的一些工具函数和方法

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6.1+ ✔ |

## npm 安装

```javascript
npm i eg-utils -S
```
CDN

```html
<script src="https://cdn.jsdelivr.net/npm/eg-utils@1.0.61/dist/eg-utils.js"></script>
```

unpkg
```html
<script src="https://unpkg.com/eg-utils@1.0.61/dist/eg-utils.js"></script>
```

nodejs

```javascript
const egUtils = require('eg-utils')
```

ES6

```javascript
import egUtils from 'eg-utils'
```
 
## API 

* *基础判断函数* 

  * [isString (value) 判断字符串类型]()
  * [isNumber (value) 判断数字类型]()
  * [isBoolean (value) 判断布尔类型]() 
  * [isFunction (value) 判断Function类型]()
  * [isNull (value) 判断null类型]()
  * [isUndefined (value) 判断undefined类型]()
  * [isObject (value) 判断object类型]()
  * [isArray (value) 判断array类型]() 
  * [isDate (value) 判断date类型]()
  * [isRegExp (value) 判断regExp类型]()
  * [isError (value) 判断error类型]()
  * [isSymbol (value) 判断symbol类型]() 
  * [isPromise (value) 判断promise类型]()
  * [isSet (value) 判断set类型]()
  * [isEmpty (value) 判断是否为空]()
  * [isEmptyObject (value) 判断对象是否为空]()
  * [isIos () 判断是否为ios]()
  * [isAndroid () 判断是否为android]()
  * [isPC () 判断是否为pc]()
  * [isLeapYear (value) 判断是否为闰年]()
  * [isHtml (value) 判断是否含有html标签]()
  * [isCardID (value) 判断校验身份证信息]()
  * [isVerify (value,type) 字符串综合校验]()
  * ...
  
* *字符串操作函数* 

  * [trim (str,type) 去除字符串空格]()
  * [replaceAll (str, beforeStr, afterStr) 替换字符串中所有指定字符]()
  * [replaceSubString (options) 替换被截取字符串]()
  * [filterHtmlCode (str) 过滤html操作符]()
  * [fristCharUpperCase (str) 首字母小写]()
  * [fristCharLowerCase (str) 首字母小写]()
  * [compressRepeatedStr (str, ignoreCase) 压缩相同且连续的字符]()
  * [toUnicode (str) 中文转Unicode码]()
  * [toGB2312 (str) Unicode码转中文]()
  * ...

* *数字操作函数* 

  * [getPlaceRandomNum (placeRange, returnType) 生成指定位数的随机数]()
  * [getRangeRandomNum (min, max) 生成指定范围的随机数]()
  * [getFormatCurrency (value) 格式化成货币格式]()
  * [changeToChnCurrency (value) 转换成大写货币格式]()
  * ...

* *数组对象操作函数* 

  * [arrUnique (arr) 数组元素去重]()
  * [arrSort (arr,type) 数组元素排序]()
  * [arrRemove (arr, ele) 删除指定的数组元素]()
  * [arrUnion (a,b) 获得两个数组的并集]()
  * [arrIntersect (a,b) 获得两个数组的交集]()
  * [arrMax (arr) 数组元素最大值（number）]()
  * [arrMin (arr) 数组元素最小值（number）]()
  * [arrSum (arr) 数组元素求和（number）]()
  * [arrAverage (arr) 数组元素平均值（number）]()
  * [arrEqual (arr) 数组元素平均值（number）]()
  * [mergeJSON (a,b) 合并两个对象]()
  * [deepCopy (obj) 深拷贝数组或对象]()
  * ...

* *日期操作函数* 

  * [formatDate (date,type) 格式化日期]()
  * [formatTime (time) 格式化时分秒]()
  * [getDayMinus (startDate,endDate) 获取两个日期间差值]()
  * [getYearDays (year) 获取某年有多少天]()
  * [getMonthDays (date) 获取某年某月有多少天]()
  * [getWhichWeek (date) 获取某年某天是第几周]()
  * [getDateMinusDaysDate (date,minusDays) 获取某日期前后若干天数的日期]() 
  * ...

* *DOM操作函数* 
  * [hasClass (ele,cls) 判断是否有指定class]()
  * [addClass (ele,cls) 添加class]()
  * [removeClass (ele,cls) 删除class]()
  * [htmlToStirng (htmlDOM) html转成字符串]()
  * [stringToHtml (htmlString) 字符串转html]()
  * ...

* *浏览器函数* 

  * [getBrowser () 获取当前浏览器版本]()
  * [getOS () 获取当前操作系统类型]()
  * [getQueryParam (param) 获取url中指定参数值]()
  * [parseQueryParam (url) url地址参数序列化]()
  * [stringfyQueryParam (paramObj) url参数对象反序列化]()
  * [relativePathToFullPath (url) 获取相对路径的绝对路径]()
  * [setCookie (key,value) 设置cookie]()
  * [getCookie (key) 获取指定cookie]()
  * [delCookie (key) 删除指定cookie]()
  * ...

* *其他操作函数* 

  * [getRandomColor () 随机生成色值]()
  * [checkPwd (str) 校验密码强度(通用)]()
  * [HEXToRGB (str) 颜色16进制转RGB]()
  * [RGBToHEX (str) 颜色RGB转16进制]()
  * ...

## License

Copyright (c) 2019-present, Evan.G