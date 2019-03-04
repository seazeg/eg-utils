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
<script src="https://cdn.jsdelivr.net/npm/eg-utils@1.0.91/dist/eg-utils.js"></script>
```

unpkg
```html
<script src="https://unpkg.com/eg-utils@1.0.91/dist/eg-utils.js"></script>
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

  - [基础判断函数](#%E5%9F%BA%E7%A1%80%E5%88%A4%E6%96%AD%E5%87%BD%E6%95%B0)
    - [isString (value) 判断字符串类型](#isstring-value-%E5%88%A4%E6%96%AD%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%B1%BB%E5%9E%8B)
    - [isNumber (value) 判断数字类型](#isnumber-value-%E5%88%A4%E6%96%AD%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B)
    - [isBoolean (value) 判断布尔类型](#isboolean-value-%E5%88%A4%E6%96%AD%E5%B8%83%E5%B0%94%E7%B1%BB%E5%9E%8B)
    - [isFunction (value) 判断Function类型](#isfunction-value-%E5%88%A4%E6%96%ADfunction%E7%B1%BB%E5%9E%8B)
    - [isNull (value) 判断null类型](#isnull-value-%E5%88%A4%E6%96%ADnull%E7%B1%BB%E5%9E%8B)
    - [isUndefined (value) 判断undefined类型](#isundefined-value-%E5%88%A4%E6%96%ADundefined%E7%B1%BB%E5%9E%8B)
    - [isObject (value) 判断object类型](#isobject-value-%E5%88%A4%E6%96%ADobject%E7%B1%BB%E5%9E%8B)
    - [isArray (value) 判断array类型](#isarray-value-%E5%88%A4%E6%96%ADarray%E7%B1%BB%E5%9E%8B)
    - [isDate (value) 判断date类型](#isdate-value-%E5%88%A4%E6%96%ADdate%E7%B1%BB%E5%9E%8B)
    - [isRegExp (value) 判断regExp类型](#isregexp-value-%E5%88%A4%E6%96%ADregexp%E7%B1%BB%E5%9E%8B)
    - [isError (value) 判断error类型](#iserror-value-%E5%88%A4%E6%96%ADerror%E7%B1%BB%E5%9E%8B)
    - [isSymbol (value) 判断symbol类型](#issymbol-value-%E5%88%A4%E6%96%ADsymbol%E7%B1%BB%E5%9E%8B)
    - [isPromise (value) 判断promise类型](#ispromise-value-%E5%88%A4%E6%96%ADpromise%E7%B1%BB%E5%9E%8B)
    - [isSet (value) 判断set类型](#isset-value-%E5%88%A4%E6%96%ADset%E7%B1%BB%E5%9E%8B)
    - [isEmpty (value) 判断是否为空](#isempty-value-%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E4%B8%BA%E7%A9%BA)
    - [isEmptyObject (value) 判断对象是否为空](#isemptyobject-value-%E5%88%A4%E6%96%AD%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E4%B8%BA%E7%A9%BA)
    - [isInteger (value) 判断是否是整数](#isinteger-value-%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%98%AF%E6%95%B4%E6%95%B0)
    - [isFloat (value) 判断是否是小数](#isfloat-value-%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%98%AF%E5%B0%8F%E6%95%B0)
    - [isIos () 判断是否为ios](#isios--%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E4%B8%BAios)
    - [isAndroid () 判断是否为android](#isandroid--%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E4%B8%BAandroid)
    - [isPC () 判断是否为pc](#ispc--%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E4%B8%BApc)
    - [isWebp () 判断是否支持webp](#iswebp--%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81webp)
    - [isLeapYear (value) 判断是否为闰年](#isleapyear-value-%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E4%B8%BA%E9%97%B0%E5%B9%B4)
    - [isHtml (value) 判断是否含有html标签](#ishtml-value-%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E5%90%AB%E6%9C%89html%E6%A0%87%E7%AD%BE)
    - [isCardID (value) 判断校验身份证信息](#iscardid-value-%E5%88%A4%E6%96%AD%E6%A0%A1%E9%AA%8C%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%BF%A1%E6%81%AF)
    - [isVerify (value,type) 字符串综合校验](#isverify-valuetype-%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%BB%BC%E5%90%88%E6%A0%A1%E9%AA%8C)
  - [字符串操作函数](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0)
    - [trim (str,type) 去除字符串空格](#trim-strtype-%E5%8E%BB%E9%99%A4%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%A9%BA%E6%A0%BC)
    - [replaceAll (str, beforeStr, afterStr) 替换字符串中所有指定字符](#replaceall-str-beforestr-afterstr-%E6%9B%BF%E6%8D%A2%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E6%89%80%E6%9C%89%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6)
    - [replaceSubString (options) 替换被截取字符串](#replacesubstring-options-%E6%9B%BF%E6%8D%A2%E8%A2%AB%E6%88%AA%E5%8F%96%E5%AD%97%E7%AC%A6%E4%B8%B2)
    - [filterHtmlCode (str) 过滤html操作符](#filterhtmlcode-str-%E8%BF%87%E6%BB%A4html%E6%93%8D%E4%BD%9C%E7%AC%A6)
    - [fristCharUpperCase (str) 首字母大写](#fristcharuppercase-str-%E9%A6%96%E5%AD%97%E6%AF%8D%E5%A4%A7%E5%86%99)
    - [fristCharLowerCase|首字母小写](#fristcharlowercase%E9%A6%96%E5%AD%97%E6%AF%8D%E5%B0%8F%E5%86%99)
    - [compressRepeatedStr (str, ignoreCase) 压缩相同且连续的字符](#compressrepeatedstr-str-ignorecase-%E5%8E%8B%E7%BC%A9%E7%9B%B8%E5%90%8C%E4%B8%94%E8%BF%9E%E7%BB%AD%E7%9A%84%E5%AD%97%E7%AC%A6)
    - [toUnicode (str) 中文转Unicode码](#tounicode-str-%E4%B8%AD%E6%96%87%E8%BD%ACunicode%E7%A0%81)
    - [toGB2312 (str) Unicode码转中文](#togb2312-str-unicode%E7%A0%81%E8%BD%AC%E4%B8%AD%E6%96%87)
  - [数字操作函数](#%E6%95%B0%E5%AD%97%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0)
    - [numAdd (num1, num2) 数字精确相加](#numadd-num1-num2-%E6%95%B0%E5%AD%97%E7%B2%BE%E7%A1%AE%E7%9B%B8%E5%8A%A0)
    - [numSub (num1, num2) 数字精确相减](#numsub-num1-num2-%E6%95%B0%E5%AD%97%E7%B2%BE%E7%A1%AE%E7%9B%B8%E5%87%8F)
    - [numMul (num1, num2) 数字精确相乘](#nummul-num1-num2-%E6%95%B0%E5%AD%97%E7%B2%BE%E7%A1%AE%E7%9B%B8%E4%B9%98)
    - [numDivi (num1, num2) 数字精确相除](#numdivi-num1-num2-%E6%95%B0%E5%AD%97%E7%B2%BE%E7%A1%AE%E7%9B%B8%E9%99%A4)
    - [getPlaceRandomNum (placeRange, returnType) 生成指定位数内的随机数](#getplacerandomnum-placerange-returntype-%E7%94%9F%E6%88%90%E6%8C%87%E5%AE%9A%E4%BD%8D%E6%95%B0%E5%86%85%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B0)
    - [getRangeRandomNum (min, max) 生成指定范围的随机数](#getrangerandomnum-min-max-%E7%94%9F%E6%88%90%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B0)
    - [getFormatCurrency (value) 格式化成货币格式](#getformatcurrency-value-%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%88%90%E8%B4%A7%E5%B8%81%E6%A0%BC%E5%BC%8F)
    - [changeToChnCurrency (value) 转换成大写货币格式](#changetochncurrency-value-%E8%BD%AC%E6%8D%A2%E6%88%90%E5%A4%A7%E5%86%99%E8%B4%A7%E5%B8%81%E6%A0%BC%E5%BC%8F)
  - [数组操作函数](#%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0)
    - [arrUnique (arr) 数组元素去重](#arrunique-arr-%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E5%8E%BB%E9%87%8D)
    - [arrSort (arr,type) 数组元素排序](#arrsort-arrtype-%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E6%8E%92%E5%BA%8F)
    - [arrRemove (arr, ele) 删除指定的数组元素](#arrremove-arr-ele-%E5%88%A0%E9%99%A4%E6%8C%87%E5%AE%9A%E7%9A%84%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0)
    - [arrUnion (a,b) 获得两个数组的并集](#arrunion-ab-%E8%8E%B7%E5%BE%97%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B6%E9%9B%86)
    - [arrIntersect (a,b) 获得两个数组的交集](#arrintersect-ab-%E8%8E%B7%E5%BE%97%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86)
    - [arrMax (arr) 数组元素最大值（number）](#arrmax-arr-%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E6%9C%80%E5%A4%A7%E5%80%BCnumber)
    - [arrMin (arr) 数组元素最小值（number）](#arrmin-arr-%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E6%9C%80%E5%B0%8F%E5%80%BCnumber)
    - [arrSum (arr) 数组元素求和（number）](#arrsum-arr-%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E6%B1%82%E5%92%8Cnumber)
    - [arrAverage (arr) 数组元素平均值（number）](#arraverage-arr-%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E5%B9%B3%E5%9D%87%E5%80%BCnumber)
    - [arrEqual (arr) 比较两个数组是否相等](#arrequal-arr-%E6%AF%94%E8%BE%83%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E6%98%AF%E5%90%A6%E7%9B%B8%E7%AD%89)
    - [getObjectLen (obj) 获取对象长度](#getobjectlen-obj-%E8%8E%B7%E5%8F%96%E5%AF%B9%E8%B1%A1%E9%95%BF%E5%BA%A6)
    - [mergeJSON (a,b) 合并两个对象](#mergejson-ab-%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E5%AF%B9%E8%B1%A1)
    - [deepCopy (obj) 深拷贝数组或对象](#deepcopy-obj-%E6%B7%B1%E6%8B%B7%E8%B4%9D%E6%95%B0%E7%BB%84%E6%88%96%E5%AF%B9%E8%B1%A1)
  - [日期操作函数](#%E6%97%A5%E6%9C%9F%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0)
    - [formatDate (date,type) 格式化日期](#formatdate-datetype-%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%97%A5%E6%9C%9F)
    - [formatTime (time) 格式化时分秒](#formattime-time-%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%97%B6%E5%88%86%E7%A7%92)
    - [getDayMinus (startDate,endDate) 获取两个日期间差值](#getdayminus-startdateenddate-%E8%8E%B7%E5%8F%96%E4%B8%A4%E4%B8%AA%E6%97%A5%E6%9C%9F%E9%97%B4%E5%B7%AE%E5%80%BC)
    - [getYearDays (year) 获取某年有多少天](#getyeardays-year-%E8%8E%B7%E5%8F%96%E6%9F%90%E5%B9%B4%E6%9C%89%E5%A4%9A%E5%B0%91%E5%A4%A9)
    - [getMonthDays (date) 获取某年某月有多少天](#getmonthdays-date-%E8%8E%B7%E5%8F%96%E6%9F%90%E5%B9%B4%E6%9F%90%E6%9C%88%E6%9C%89%E5%A4%9A%E5%B0%91%E5%A4%A9)
    - [getWhichWeek (date) 获取某年某天是第几周](#getwhichweek-date-%E8%8E%B7%E5%8F%96%E6%9F%90%E5%B9%B4%E6%9F%90%E5%A4%A9%E6%98%AF%E7%AC%AC%E5%87%A0%E5%91%A8)
    - [getDateMinusDaysDate (date,minusDays) 获取某日期前后若干天数的日期](#getdateminusdaysdate-dateminusdays-%E8%8E%B7%E5%8F%96%E6%9F%90%E6%97%A5%E6%9C%9F%E5%89%8D%E5%90%8E%E8%8B%A5%E5%B9%B2%E5%A4%A9%E6%95%B0%E7%9A%84%E6%97%A5%E6%9C%9F)
  - [DOM操作函数](#dom%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0)
    - [hasClass (ele,cls) 判断是否有指定class](#hasclass-elecls-%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%9C%89%E6%8C%87%E5%AE%9Aclass)
    - [addClass (ele,cls) 添加class](#addclass-elecls-%E6%B7%BB%E5%8A%A0class)
    - [removeClass (ele,cls) 删除class](#removeclass-elecls-%E5%88%A0%E9%99%A4class)
    - [htmlToStirng (htmlDOM) html转成字符串](#htmltostirng-htmldom-html%E8%BD%AC%E6%88%90%E5%AD%97%E7%AC%A6%E4%B8%B2)
    - [stringToHtml (htmlString) 字符串转html](#stringtohtml-htmlstring-%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AChtml)
  - [浏览器函数](#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%87%BD%E6%95%B0)
    - [getBrowser () 获取当前浏览器版本](#getbrowser--%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E6%B5%8F%E8%A7%88%E5%99%A8%E7%89%88%E6%9C%AC)
    - [getOS () 获取当前操作系统类型](#getos--%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%B1%BB%E5%9E%8B)
    - [getQueryParam (param) 获取url中指定参数值](#getqueryparam-param-%E8%8E%B7%E5%8F%96url%E4%B8%AD%E6%8C%87%E5%AE%9A%E5%8F%82%E6%95%B0%E5%80%BC)
    - [parseQueryParam (url) url地址参数序列化](#parsequeryparam-url-url%E5%9C%B0%E5%9D%80%E5%8F%82%E6%95%B0%E5%BA%8F%E5%88%97%E5%8C%96)
    - [stringfyQueryParam (paramObj) url参数对象反序列化](#stringfyqueryparam-paramobj-url%E5%8F%82%E6%95%B0%E5%AF%B9%E8%B1%A1%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96)
    - [getAbsoluteUrl (url) 获取相对路径的绝对路径](#getabsoluteurl-url-%E8%8E%B7%E5%8F%96%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84%E7%9A%84%E7%BB%9D%E5%AF%B9%E8%B7%AF%E5%BE%84)
    - [setCookie (key,value) 设置cookie](#setcookie-keyvalue-%E8%AE%BE%E7%BD%AEcookie)
    - [getCookie (key) 获取指定cookie](#getcookie-key-%E8%8E%B7%E5%8F%96%E6%8C%87%E5%AE%9Acookie)
    - [delCookie (key) 删除指定cookie](#delcookie-key-%E5%88%A0%E9%99%A4%E6%8C%87%E5%AE%9Acookie)
  - [其他操作函数](#%E5%85%B6%E4%BB%96%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0)
    - [getRandomColor () 随机生成色值](#getrandomcolor--%E9%9A%8F%E6%9C%BA%E7%94%9F%E6%88%90%E8%89%B2%E5%80%BC)
    - [checkPwd (str) 校验密码强度(通用)](#checkpwd-str-%E6%A0%A1%E9%AA%8C%E5%AF%86%E7%A0%81%E5%BC%BA%E5%BA%A6%E9%80%9A%E7%94%A8)
    - [HEXToRGB (str) 颜色16进制转RGB](#hextorgb-str-%E9%A2%9C%E8%89%B216%E8%BF%9B%E5%88%B6%E8%BD%ACrgb)
    - [RGBToHEX (str) 颜色RGB转16进制](#rgbtohex-str-%E9%A2%9C%E8%89%B2rgb%E8%BD%AC16%E8%BF%9B%E5%88%B6)
    - [once (func,context) 一次执行函数](#once-funccontext-%E4%B8%80%E6%AC%A1%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0)
    - [debounce (func,wait) 防抖函数](#debounce-funcwait-%E9%98%B2%E6%8A%96%E5%87%BD%E6%95%B0)
    - [throttle (func,wait) 节流函数](#throttle-funcwait-%E8%8A%82%E6%B5%81%E5%87%BD%E6%95%B0)



  
&nbsp; 
## 基础判断函数 
### isString (value) 判断字符串类型
```javascript
egUtils.isString('evang') //true
```
### isNumber (value) 判断数字类型
```javascript
egUtils.isNumber(123) //true
```
### isBoolean (value) 判断布尔类型
```javascript
egUtils.isBoolean(true) //true
```
### isFunction (value) 判断Function类型
```javascript
egUtils.isFunction(function(){}) //true
```
### isNull (value) 判断null类型
```javascript
egUtils.isNull(null) //true
```
### isUndefined (value) 判断undefined类型
```javascript
egUtils.isUndefined(undefined) //true
```
### isObject (value) 判断object类型
```javascript
egUtils.isObject({}) //true
```
### isArray (value) 判断array类型
```javascript
egUtils.isArray([]) //true
```
### isDate (value) 判断date类型
```javascript
egUtils.isDate(new Date()) //true
```
### isRegExp (value) 判断regExp类型
```javascript
egUtils.isRegExp(new RegExp('g')) //true
```
### isError (value) 判断error类型
```javascript
egUtils.isError(new Error()) //true
```
### isSymbol (value) 判断symbol类型
```javascript
egUtils.isSymbol(Symbol()) //true
```
### isPromise (value) 判断promise类型
```javascript
egUtils.isPromise(new Promise(function (resolve, reject) {}))) //true
```
### isSet (value) 判断set类型
```javascript
egUtils.isSet(new Set()) //true
```
### isEmpty (value) 判断是否为空
```javascript
egUtils.isEmpty('') //true
```
### isEmptyObject (value) 判断对象是否为空
```javascript
egUtils.isEmptyObject({}) //true
```
### isInteger (value) 判断是否是整数
```javascript
egUtils.isInteger(1) //true
```
### isFloat (value) 判断是否是小数
```javascript
egUtils.isFloat(1.2) //true
```
### isIos () 判断是否为ios
```javascript
//如果系统是ios可获得以下判断
egUtils.isIos() //true
```
### isAndroid () 判断是否为android
```javascript
//如果系统是Android可获得以下判断
egUtils.isAndroid() //true
```
### isPC () 判断是否为pc
```javascript
//如果系统是非移动端可获得以下判断
egUtils.isPC() //true
```
### isWebp () 判断是否支持webp
```javascript
//如果浏览器支持webp可获得以下判断
egUtils.isWebp() //true
```
### isLeapYear (value) 判断是否为闰年
```javascript
egUtils.isLeapYear(1984) //true
```
### isHtml (value) 判断是否含有html标签
```javascript
egUtils.isHtml('<div>html</div>') //true
```
### isCardID (value) 判断校验身份证信息
```javascript
egUtils.isString('370902201809093241') //true
```
### isVerify (value,type) 字符串综合校验
```javascript
egUtils.isVerify(1, 'num') //数字 true
egUtils.isVerify('en', 'en') //英文 true
egUtils.isVerify('中文', 'chn') //中文 true
egUtils.isVerify('en', 'lower') //小写 true
egUtils.isVerify('EN', 'upper') //大写 true
egUtils.isVerify('15066876086', 'phone') //手机号 true
egUtils.isVerify('0532-88888888', 'tel') //座机号 true
egUtils.isVerify('http://baidu.com', 'url') //网址 true
egUtils.isVerify('192.168.1.1', 'ip') //ip地址 true
egUtils.isVerify('2019-01-01', 'date') //日期格式 true
egUtils.isVerify('seazeg@126.com', 'email') //邮箱格式 true
egUtils.isVerify('266000', 'postal') //邮编 true
```

&nbsp; 
## 字符串操作函数
### trim (str,type) 去除字符串空格
```javascript
egUtils.trim(' ab c ', 'all') //去除全部空格
egUtils.trim(' ab c ', 'side') //去除两边空格
egUtils.trim(' ab c ', 'left') //去除左边空格
egUtils.trim(' ab c ', 'right') //去除右边空格
```
### replaceAll (str, beforeStr, afterStr) 替换字符串中所有指定字符
```javascript
egUtils.replaceAll('aabbccc', 'b', 'f') // aaffccc
```
### replaceSubString (options) 替换被截取字符串
```javascript
egUtils.replaceSubString({
        str: 'aabbcc',
        subStart: 1,
        subEnd: 3,
        beforeStr: 'a',
        afterStr: 'o'
}) //ob
```
### filterHtmlCode (str) 过滤html操作符
```javascript
egUtils.filterHtmlCode('<div>&123</div>') //&lt;div&gt&amp;123&lt;/div&gt
```
### fristCharUpperCase (str) 首字母大写
```javascript
egUtils.fristCharUpperCase('abc') //Abc
```
### fristCharLowerCase|首字母小写
```javascript
egUtils.fristCharLowerCase('ABC') //aBC
```
### compressRepeatedStr (str, ignoreCase) 压缩相同且连续的字符
```javascript
egUtils.compressRepeatedStr('bbbccccc') //3b5c
```
### toUnicode (str) 中文转Unicode码
```javascript
egUtils.toUnicode('中文') //\\u4e2d\\u6587
```
### toGB2312 (str) Unicode码转中文
```javascript
egUtils.toGB2312('\\u4e2d\\u6587') //中文
```

&nbsp;
## 数字操作函数
### numAdd (num1, num2) 数字精确相加
```javascript
egUtils.numAdd(300,3.14) //303.14
```
### numSub (num1, num2) 数字精确相减
```javascript
egUtils.numSub(300,3.14) //296.86
```
### numMul (num1, num2) 数字精确相乘
```javascript
egUtils.numMul(300,3.14) //942
```
### numDivi (num1, num2) 数字精确相除
```javascript
egUtils.numDivi(300,2.5) //120
```
### getPlaceRandomNum (placeRange, returnType) 生成指定位数内的随机数
```javascript
egUtils.getPlaceRandomNum(10) //十位整数
egUtils.getPlaceRandomNum(100,'float') //百位小数
```
### getRangeRandomNum (min, max) 生成指定范围的随机数
```javascript
egUtils.getRangeRandomNum(90,100) //90~100 整数
egUtils.getRangeRandomNum(90,100,'float') //90~100 小数
```
### getFormatCurrency (value) 格式化成货币格式
```javascript
egUtils.getFormatCurrency('10000') //10,000
```
### changeToChnCurrency (value) 转换成大写货币格式
```javascript
egUtils.changeToChnCurrency('100') //壹佰元整
```

&nbsp; 
## 数组操作函数
### arrUnique (arr) 数组元素去重
```javascript
egUtils.arrUnique([1, 1, 2, 3]) //[1,2,3]
```
### arrSort (arr,type) 数组元素排序
```javascript
egUtils.arrSort([1, 3, 2], 'down') //降序 [3,2,1]
egUtils.arrSort([1, 3, 2], 'up') //升序 [1,2,3]
egUtils.arrSort([1, 3, 2], 'rad') //乱序 [2,1,3]
```
### arrRemove (arr, ele) 删除指定的数组元素
```javascript
egUtils.arrRemove(['aa', 'bb', 'cc'], 'bb') //['aa', 'cc']
```
### arrUnion (a,b) 获得两个数组的并集
```javascript
egUtils.arrUnion([1, 2, 3], [1, 3, 4]) //[1, 2, 3, 4]
```
### arrIntersect (a,b) 获得两个数组的交集
```javascript
egUtils.arrIntersect([1, 2, 3], [1, 3, 4]) //[1, 3]
```
### arrMax (arr) 数组元素最大值（number）
```javascript
egUtils.arrMax([1, 2, 3]) //3
```
### arrMin (arr) 数组元素最小值（number）
```javascript
egUtils.arrMin([1, 2, 3]) //1
```
### arrSum (arr) 数组元素求和（number）
```javascript
egUtils.arrSum([1, 2, 3]) //6
```
### arrAverage (arr) 数组元素平均值（number）
```javascript
egUtils.arrAverage([1, 2, 3]) //2
```
### arrEqual (arr) 比较两个数组是否相等
```javascript
egUtils.arrEqual([1, 2, 3], [1, 2, 3]) //true
```
### getObjectLen (obj) 获取对象长度
```javascript
egUtils.getObjectLen({a:1,b:2}) //2
```
### mergeJSON (a,b) 合并两个对象
```javascript
let o1 = {a:1,b:2};
let o2 = {c:1,e:2}
egUtils.mergeJSON(o1,o2) //{a:1,b:2,c:1,e:2}
```
### deepCopy (obj) 深拷贝数组或对象
```javascript
let arr = [1,2,3]
egUtils.deepCopy(arr) //[1,2,3]
```

&nbsp; 
## 日期操作函数
### formatDate (date,type) 格式化日期
```javascript
egUtils.formatDate(1551184404277, 'yyyy-MM-dd hh:mm:ss') //2019-02-26 20:33:24
```
### formatTime (time) 格式化时分秒
```javascript
egUtils.formatTime(3620) //1小时0分20秒
```
### getDayMinus (startDate,endDate) 获取两个日期间差值
```javascript
egUtils.getDayMinus('2018-12-3', '2019-2-26') //85
```
### getYearDays (year) 获取某年有多少天
```javascript
egUtils.getYearDays(2019) //365
```
### getMonthDays (date) 获取某年某月有多少天
```javascript
egUtils.getMonthDays('1984-2') //29
```
### getWhichWeek (date) 获取某年某天是第几周
```javascript
egUtils.getWhichWeek('2019-2-26') //8
```
### getDateMinusDaysDate (date,minusDays) 获取某日期前后若干天数的日期
```javascript
egUtils.getDateMinusDaysDate('2018-12-3', 158) //2019-5-10
egUtils.getDateMinusDaysDate('2018-12-3', -11) //2018-11-22
```

&nbsp; 
## DOM操作函数
### hasClass (ele,cls) 判断是否有指定class
```html
<div class="name"></div>
```
```javascript
let ele = document.querySelector('div')
egUtils.hasClass(ele,'name') //true
```
### addClass (ele,cls) 添加class
```html
<div class="name"></div>
```
```javascript
let ele = document.querySelector('div')
egUtils.addClass(ele,'title') //<div class="name title"></div>
```
### removeClass (ele,cls) 删除class
```html
<div class="name"></div>
```
```javascript
let ele = document.querySelector('div')
egUtils.removeClass(ele,'name') //<div class=""></div>
```
### htmlToStirng (htmlDOM) html转成字符串
```html
<div class="name"></div>
```
```javascript
let ele = document.querySelector('div')
console.log(egUtils.htmlToStirng(ele)) //'<div class="name"></div>'
```
### stringToHtml (htmlString) 字符串转html
```javascript
let string = '<div class="name">dom</div>'
let body = document.querySelector('body')
let res = egUtils.stringToHtml(string)
body.append(res)
```

&nbsp; 
## 浏览器函数
### getBrowser () 获取当前浏览器版本
```javascript
egUtils.getBrowser()
//Chrome浏览器下结果: Chrome: 72.0.3626.119
```
### getOS () 获取当前操作系统类型
```javascript
egUtils.getOS()
//mac系统下结果: MacOSX
```
### getQueryParam (param) 获取url中指定参数值
```javascript
//地址栏：http://www.google.com/?lan=cn
egUtils.getQueryParam('lan') //cn
```
### parseQueryParam (url) url地址参数序列化
```javascript
egUtils.parseQueryParam('http://www.google.com/?lan=cn&id=100') //{lan:'cn',id:'100'}
```
### stringfyQueryParam (paramObj) url参数对象反序列化
```javascript
egUtils.parseQueryParam({lan:'cn',id:'100'}) //lan=cn&id=100
```
### getAbsoluteUrl (url) 获取相对路径的绝对路径
```javascript
egUtils.getAbsoluteUrl('./ucenter') //http://www.abc.com/ucenter
```
### setCookie (key,value) 设置cookie
```javascript
egUtils.setCookie('cname','1000') //默认30天
egUtils.setCookie('cname','1000', 7 * 24 * 3600 * 1000) //设置7天过期
```
### getCookie (key) 获取指定cookie
```javascript
egUtils.getCookie('cname') 
```
### delCookie (key) 删除指定cookie
```javascript
egUtils.delCookie('cname') 
```
&nbsp; 
## 其他操作函数
### getRandomColor () 随机生成色值
```javascript
egUtils.getRandomColor() //#321425
```
### checkPwd (str) 校验密码强度(通用)
```javascript
//长度小于6
egUtils.checkPwd('12345') // 0
//且全部只是数字
egUtils.checkPwd('123456') // 1
//且包含小写字母
egUtils.checkPwd('12345ab') // 2
//且包含大写字母
egUtils.checkPwd('12345abC') // 3
//且包含特殊字符
egUtils.checkPwd('12345abC_') // 4

```
### HEXToRGB (str) 颜色16进制转RGB
```javascript
egUtils.HEXToRGB('#000000') //RGB(0,0,0)
```
### RGBToHEX (str) 颜色RGB转16进制
```javascript
egUtils.RGBToHEX('RGB(0,0,0)') //#000000
```
### once (func,context) 一次执行函数
```javascript
window.onresize = egUtils.once(function(){
    console.log('一次函数')
})
```
### debounce (func,wait) 防抖函数
```javascript
//多次resize，只执行最后一次结果
window.onresize = egUtils.debounce(function(){
    console.log('防抖函数')
},500)
```
### throttle (func,wait) 节流函数
```javascript
//间隔若干时间执行resize
window.onresize = egUtils.throttle(function(){
    console.log('节流函数')
},1000)
```



## License

Copyright (c) 2019-present, Evan.G