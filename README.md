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

## 开始使用

CDN / unpkg
```html
<script src="https://cdn.jsdelivr.net/npm/eg-utils@1.0.91/dist/eg-utils.js"></script>
<!-- <script src="https://unpkg.com/eg-utils@1.0.91/dist/eg-utils.js"></script> -->
<script>
egUtils.isString('evang') //true
</script>
```

nodejs
```javascript
const egUtils = require('eg-utils');
egUtils.isString('evang') //true
```

ES6
```javascript
import egUtils from 'eg-utils'
egUtils.isString('evang') //true
```

## API 
* *基础判断函数* 

  * [isString|判断字符串类型](#isString|判断字符串类型)
  * [isNumber|判断数字类型](#isNumber|判断数字类型)
  * [isBoolean|判断布尔类型](#isBoolean|判断布尔类型) 
  * [isFunction|判断Function类型](#isFunction|判断Function类型)
  * [isNull|判断null类型](#isNull|判断null类型)
  * [isUndefined|判断undefined类型](#isUndefined|判断undefined类型)
  * [isObject|判断object类型](#isObject|判断object类型)
  * [isArray|判断array类型](#isArray|判断array类型) 
  * [isDate|判断date类型](#isDate|判断date类型)
  * [isRegExp|判断regExp类型](#isRegExp|判断regExp类型)
  * [isError|判断error类型](#isError|判断error类型)
  * [isSymbol|判断symbol类型](#isSymbol|判断symbol类型) 
  * [isPromise|判断promise类型](#isPromise|判断promise类型)
  * [isSet|判断set类型](#isSet|判断set类型)
  * [isEmpty|判断是否为空](#isEmpty|判断是否为空)
  * [isEmptyObject|判断对象是否为空](#isEmptyObject|判断对象是否为空)
  * [isInteger|判断是否是整数](#isInteger|判断是否是整数)
  * [isFloat|判断是否是小数](#isFloat|判断是否是小数)
  * [isIos|判断是否为ios](#isIos|判断是否为ios)
  * [isAndroid|判断是否为android](#isAndroid|判断是否为android)
  * [isPC|判断是否为pc](#isPC|判断是否为pc)
  * [isWebp|判断是否支持webp](#isWebp|判断是否支持webp)
  * [isLeapYear|判断是否为闰年](#isLeapYear|判断是否为闰年)
  * [isHtml|判断是否含有html标签](#isHtml|判断是否含有html标签)
  * [isCardID|判断校验身份证信息](#isCardID|判断校验身份证信息)
  * [isVerify|字符串综合校验](#isVerify|字符串综合校验)
  * ...
  
* *字符串操作函数* 

  * [trim|去除字符串空格](#trim|去除字符串空格)
  * [replaceAll|替换字符串中所有指定字符](#replaceAll|替换字符串中所有指定字符)
  * [replaceSubString|替换被截取字符串](#replaceSubString|替换被截取字符串)
  * [filterHtmlCode|过滤html操作符](#filterHtmlCode|过滤html操作符)
  * [fristCharUpperCase|首字母小写](#fristCharUpperCase|首字母小写)
  * [fristCharLowerCase|首字母小写](#fristCharLowerCase|首字母小写)
  * [compressRepeatedStr|压缩相同且连续的字符](#compressRepeatedStr|压缩相同且连续的字符)
  * [toUnicode|中文转Unicode码](#toUnicode|中文转Unicode码)
  * [toGB2312|Unicode码转中文](#toGB2312|Unicode码转中文)
  * ...

* *数字操作函数* 

  * [numAdd|数字精确相加](#numAdd|数字精确相加)
  * [numSub|数字精确相减](#numSub|数字精确相减)
  * [numMul|数字精确相乘](#numMul|数字精确相乘)
  * [numDivi|数字精确相除](#numDivi|数字精确相除)
  * [getPlaceRandomNum|生成指定位数内的随机数](#getPlaceRandomNum|生成指定位数内的随机数)
  * [getRangeRandomNum|生成指定范围的随机数](#getRangeRandomNum|生成指定范围的随机数)
  * [getFormatCurrency|格式化成货币格式](#getFormatCurrency|格式化成货币格式)
  * [changeToChnCurrency|转换成大写货币格式](#changeToChnCurrency|转换成大写货币格式)
  * ...

* *数组对象操作函数* 

  * [arrUnique|数组元素去重](#arrUnique|数组元素去重)
  * [arrSort|数组元素排序](#arrSort|数组元素排序)
  * [arrRemove|删除指定的数组元素](#arrRemove|删除指定的数组元素)
  * [arrUnion|获得两个数组的并集](#arrUnion|获得两个数组的并集)
  * [arrIntersect|获得两个数组的交集](#arrIntersect|获得两个数组的交集)
  * [arrMax|数组元素最大值（number）](#arrMax|数组元素最大值（number）)
  * [arrMin|数组元素最小值（number）](#arrMin|数组元素最小值（number）)
  * [arrSum|数组元素求和（number）](#arrSum|数组元素求和（number）)
  * [arrAverage|数组元素平均值（number）](#arrAverage|数组元素平均值（number）)
  * [arrEqual|比较两个数组是否相等](#arrEqual|比较两个数组是否相等)
  * [getObjectLen|获取对象长度](#getObjectLen|获取对象长度)
  * [mergeJSON|合并两个对象](#mergeJSON|合并两个对象)
  * [deepCopy|深拷贝数组或对象](#deepCopy|深拷贝数组或对象)
  * ...

* *日期操作函数* 

  * [formatDate|格式化日期](#formatDate|格式化日期)
  * [formatTime|格式化时分秒](#formatTime|格式化时分秒)
  * [getDayMinus|获取两个日期间差值](#getDayMinus|获取两个日期间差值)
  * [getYearDays|获取某年有多少天](#getYearDays|获取某年有多少天)
  * [getMonthDays|获取某年某月有多少天](#getMonthDays|获取某年某月有多少天)
  * [getWhichWeek|获取某年某天是第几周](#getWhichWeek|获取某年某天是第几周)
  * [getDateMinusDaysDate|获取某日期前后若干天数的日期](#getDateMinusDaysDate|获取某日期前后若干天数的日期) 
  * ...

* *DOM操作函数* 
  * [hasClass|判断是否有指定class](#hasClass|判断是否有指定class)
  * [addClass|添加class](#addClass|添加class)
  * [removeClass|删除class](#removeClass|删除class)
  * [htmlToStirng|html转成字符串](#htmlToStirng|html转成字符串)
  * [stringToHtml|字符串转html](#stringToHtml|字符串转html)
  * ...

* *浏览器函数* 

  * [getBrowser|获取当前浏览器版本](#getBrowser|获取当前浏览器版本)
  * [getOS|获取当前操作系统类型](#getOS|获取当前操作系统类型)
  * [getQueryParam|获取url中指定参数值](#getQueryParam|获取url中指定参数值)
  * [parseQueryParam|url地址参数序列化](#parseQueryParam|url地址参数序列化)
  * [stringfyQueryParam|url参数对象反序列化](#stringfyQueryParam|url参数对象反序列化)
  * [getAbsoluteUrl|获取相对路径的绝对路径](#getAbsoluteUrl|获取相对路径的绝对路径)
  * [setCookie|设置cookie](#setCookie|设置cookie)
  * [getCookie|获取指定cookie](#getCookie|获取指定cookie)
  * [delCookie|删除指定cookie](#delCookie|删除指定cookie)
  * ...

* *其他操作函数* 

  * [getRandomColor|随机生成色值](#getRandomColor|随机生成色值)
  * [checkPwd|校验密码强度(通用)](#checkPwd|校验密码强度(通用))
  * [HEXToRGB|颜色16进制转RGB](#HEXToRGB|颜色16进制转RGB)
  * [RGBToHEX|颜色RGB转16进制](#RGBToHEX|颜色RGB转16进制)
  * [once|一次执行函数](#once|一次执行函数)
  * [debounce|防抖函数](#debounce|防抖函数)
  * [throttle|节流函数](#throttle|节流函数)
  * ...
  
&nbsp; 
## 基础判断函数 
### isString|判断字符串类型
```javascript
egUtils.isString('evang') //true
```
### isNumber|判断数字类型
```javascript
egUtils.isNumber(123) //true
```
### isBoolean|判断布尔类型
```javascript
egUtils.isBoolean(true) //true
```
### isFunction|判断Function类型
```javascript
egUtils.isFunction(function(){}) //true
```
### isNull|判断null类型
```javascript
egUtils.isNull(null) //true
```
### isUndefined|判断undefined类型
```javascript
egUtils.isUndefined(undefined') //true
```
### isObject|判断object类型
```javascript
egUtils.isObject({}) //true
```
### isArray|判断array类型
```javascript
egUtils.isArray([]) //true
```
### isDate|判断date类型
```javascript
egUtils.isDate(new Date()) //true
```
### isRegExp|判断regExp类型
```javascript
egUtils.isRegExp(new RegExp('g')) //true
```
### isError|判断error类型
```javascript
egUtils.isError(new Error()) //true
```
### isSymbol|判断symbol类型
```javascript
egUtils.isSymbol(Symbol()) //true
```
### isPromise|判断promise类型
```javascript
egUtils.isPromise(new Promise(function (resolve, reject) {}))) //true
```
### isSet|判断set类型
```javascript
egUtils.isSet(new Set()) //true
```
### isEmpty|判断是否为空
```javascript
egUtils.isEmpty('') //true
```
### isEmptyObject|判断对象是否为空
```javascript
egUtils.isEmptyObject({}) //true
```
### isInteger|判断是否是整数
```javascript
egUtils.isInteger(1) //true
```
### isFloat|判断是否是小数
```javascript
egUtils.isFloat(1.2) //true
```
### isIos|判断是否为ios
```javascript
//如果系统是ios可获得以下判断
egUtils.isIos() //true
```
### isAndroid|判断是否为android
```javascript
//如果系统是Android可获得以下判断
egUtils.isAndroid() //true
```
### isPC|判断是否为pc
```javascript
//如果系统是非移动端可获得以下判断
egUtils.isPC() //true
```
### isWebp|判断是否支持webp
```javascript
//如果浏览器支持webp可获得以下判断
egUtils.isWebp() //true
```
### isLeapYear|判断是否为闰年
```javascript
egUtils.isLeapYear(1984) //true
```
### isHtml|判断是否含有html标签
```javascript
egUtils.isHtml('<div>html</div>') //true
```
### isCardID|判断校验身份证信息
```javascript
egUtils.isString('370902201809093241') //true
```
### isVerify|字符串综合校验
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
...
&nbsp; 
## 字符串操作函数
### trim|去除字符串空格
```javascript
egUtils.trim(' ab c ', 'all') //去除全部空格
egUtils.trim(' ab c ', 'side') //去除两边空格
egUtils.trim(' ab c ', 'left') //去除左边空格
egUtils.trim(' ab c ', 'right') //去除右边空格
```
### replaceAll|替换字符串中所有指定字符
```javascript
egUtils.replaceAll('aabbccc', 'b', 'f') // aaffccc
```
### replaceSubString|替换被截取字符串
```javascript
egUtils.replaceSubString({
        str: 'aabbcc',
        subStart: 1,
        subEnd: 3,
        beforeStr: 'a',
        afterStr: 'o'
}) //ob
```
### filterHtmlCode|过滤html操作符
```javascript
egUtils.filterHtmlCode('<div>&123</div>') //&lt;div&gt&amp;123&lt;/div&gt
```
### fristCharUpperCase|首字母小写
```javascript
egUtils.fristCharUpperCase('abc') //Abc
```
### fristCharLowerCase|首字母小写
```javascript
egUtils.fristCharLowerCase('ABC') //aBC
```
### compressRepeatedStr|压缩相同且连续的字符
```javascript
egUtils.compressRepeatedStr('bbbccccc') //3b5c
```
### toUnicode|中文转Unicode码
```javascript
egUtils.toUnicode('中文') //\\u4e2d\\u6587
```
### toGB2312|Unicode码转中文
```javascript
egUtils.toGB2312('\\u4e2d\\u6587') //中文
```
...
&nbsp;
## 数字操作函数
### numAdd|数字精确相加
```javascript
egUtils.numAdd(300,3.14) //303.14
```
### numSub|数字精确相减
```javascript
egUtils.numSub(300,3.14) //296.86
```
### numMul|数字精确相乘
```javascript
egUtils.numMul(300,3.14) //942
```
### numDivi|数字精确相除
```javascript
egUtils.numDivi(300,2.5) //120
```
### getPlaceRandomNum|生成指定位数内的随机数
```javascript
egUtils.getPlaceRandomNum(10) //十位整数
egUtils.getPlaceRandomNum(100,'float') //百位小数
```
### getRangeRandomNum|生成指定范围的随机数
```javascript
egUtils.getRangeRandomNum(90,100) //90~100 整数
egUtils.getRangeRandomNum(90,100,'float') //90~100 小数
```
### getFormatCurrency|格式化成货币格式
```javascript
egUtils.getFormatCurrency('10000') //10,000
```
### changeToChnCurrency|转换成大写货币格式
```javascript
egUtils.changeToChnCurrency('100') //壹佰元整
```
...
&nbsp; 
## 数组操作函数
### arrUnique|数组元素去重
```javascript
egUtils.arrUnique([1, 1, 2, 3]) //[1,2,3]
```
### arrSort|数组元素排序
```javascript
egUtils.arrSort([1, 3, 2], 'down') //降序 [3,2,1]
egUtils.arrSort([1, 3, 2], 'up') //升序 [1,2,3]
egUtils.arrSort([1, 3, 2], 'rad') //乱序 [2,1,3]
```
### arrRemove|删除指定的数组元素
```javascript
egUtils.arrRemove(['aa', 'bb', 'cc'], 'bb') //['aa', 'cc']
```
### arrUnion|获得两个数组的并集
```javascript
egUtils.arrUnion([1, 2, 3], [1, 3, 4]) //[1, 2, 3, 4]
```
### arrIntersect|获得两个数组的交集
```javascript
egUtils.arrIntersect([1, 2, 3], [1, 3, 4]) //[1, 3]
```
### arrMax|数组元素最大值（number）
```javascript
egUtils.arrMax([1, 2, 3]) //3
```
### arrMin|数组元素最小值（number）
```javascript
egUtils.arrMin([1, 2, 3]) //1
```
### arrSum|数组元素求和（number）
```javascript
egUtils.arrSum([1, 2, 3]) //6
```
### arrAverage|数组元素平均值（number）
```javascript
egUtils.arrAverage([1, 2, 3]) //2
```
### arrEqual|比较两个数组是否相等
```javascript
egUtils.arrEqual([1, 2, 3], [1, 2, 3]) //true
```
### getObjectLen|获取对象长度
```javascript
egUtils.getObjectLen({a:1,b:2}) //2
```
### mergeJSON|合并两个对象
```javascript
let o1 = {a:1,b:2};
let o2 = {c:1,e:2}
egUtils.mergeJSON(o1,o2) //{a:1,b:2,c:1,e:2}
```
### deepCopy|深拷贝数组或对象
```javascript
let arr = [1,2,3]
egUtils.deepCopy(arr) //[1,2,3]
```
...
&nbsp; 
## 日期操作函数
### formatDate|格式化日期
```javascript
egUtils.formatDate(1551184404277, 'yyyy-MM-dd hh:mm:ss') //2019-02-26 20:33:24
```
### formatTime|格式化时分秒
```javascript
egUtils.formatTime(3620) //1小时0分20秒
```
### getDayMinus|获取两个日期间差值
```javascript
egUtils.getDayMinus('2018-12-3', '2019-2-26') //85
```
### getYearDays|获取某年有多少天
```javascript
egUtils.getYearDays(2019) //365
```
### getMonthDays|获取某年某月有多少天
```javascript
egUtils.getMonthDays('1984-2') //29
```
### getWhichWeek|获取某年某天是第几周
```javascript
egUtils.getWhichWeek('2019-2-26') //8
```
### getDateMinusDaysDate|获取某日期前后若干天数的日期
```javascript
egUtils.getDateMinusDaysDate('2018-12-3', 158) //2019-5-10
egUtils.getDateMinusDaysDate('2018-12-3', -11) //2018-11-22
```
...
&nbsp; 
## DOM操作函数
### hasClass|判断是否有指定class
```html
<div class="name"></div>
```
```javascript
let ele = document.querySelector('div')
egUtils.hasClass(ele,'name') //true
```
### addClass|添加class
```html
<div class="name"></div>
```
```javascript
let ele = document.querySelector('div')
egUtils.addClass(ele,'title') //<div class="name title"></div>
```
### removeClass|删除class
```html
<div class="name"></div>
```
```javascript
let ele = document.querySelector('div')
egUtils.removeClass(ele,'name') //<div class=""></div>
```
### htmlToStirng|html转成字符串
```html
<div class="name"></div>
```
```javascript
let ele = document.querySelector('div')
console.log(egUtils.htmlToStirng(ele)) //'<div class="name"></div>'
```
### stringToHtml|字符串转html
```javascript
let string = '<div class="name">dom</div>'
let body = document.querySelector('body')
let res = egUtils.stringToHtml(string)
body.append(res)
```
...
&nbsp; 
## 浏览器函数
### getBrowser|获取当前浏览器版本
```javascript
egUtils.getBrowser()
//Chrome浏览器下结果: Chrome: 72.0.3626.119
```
### getOS|获取当前操作系统类型
```javascript
egUtils.getOS()
//mac系统下结果: MacOSX
```
### getQueryParam|获取url中指定参数值
```javascript
//地址栏：http://www.google.com/?lan=cn
egUtils.getQueryParam('lan') //cn
```
### parseQueryParam|url地址参数序列化
```javascript
egUtils.parseQueryParam('http://www.google.com/?lan=cn&id=100') //{lan:'cn',id:'100'}
```
### stringfyQueryParam|url参数对象反序列化
```javascript
egUtils.parseQueryParam({lan:'cn',id:'100'}) //lan=cn&id=100
```
### getAbsoluteUrl|获取相对路径的绝对路径
```javascript
egUtils.getAbsoluteUrl('./ucenter') //http://www.abc.com/ucenter
```
### setCookie|设置cookie
```javascript
egUtils.setCookie('cname','1000') //默认30天
egUtils.setCookie('cname','1000', 7 * 24 * 3600 * 1000) //设置7天过期
```
### getCookie|获取指定cookie
```javascript
egUtils.getCookie('cname') 
```
### delCookie|删除指定cookie
```javascript
egUtils.delCookie('cname') 
```
&nbsp; 
## 其他操作函数
### getRandomColor|随机生成色值
```javascript
egUtils.getRandomColor() //#321425
```
### checkPwd|校验密码强度(通用)
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
### HEXToRGB|颜色16进制转RGB
```javascript
egUtils.HEXToRGB('#000000') //RGB(0,0,0)
```
### RGBToHEX|颜色RGB转16进制
```javascript
egUtils.RGBToHEX('RGB(0,0,0)') //#000000
```
### once|一次执行函数
```javascript
window.onresize = egUtils.once(function(){
    console.log('一次函数')
})
```
### debounce|防抖函数
```javascript
//多次resize，只执行最后一次结果
window.onresize = egUtils.debounce(function(){
    console.log('防抖函数')
},500)
```
### throttle|节流函数
```javascript
//间隔若干时间执行resize
window.onresize = egUtils.throttle(function(){
    console.log('节流函数')
},1000)
```

...

## License

Copyright (c) 2019-present, Evan.G