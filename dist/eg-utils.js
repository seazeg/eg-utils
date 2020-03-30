/*!
 * egUtils.js version 1.1.6
 * Author Evan.G
 * For more information, please visit https://github.com/seazeg/eg-utils
 * egUtils.js is available under the terms of the MIT license.
 */
window.egUtils=function(r){var o={};function n(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}return n.m=r,n.c=o,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,r){"use strict";e.__esModule=!0;var o=(n.prototype.isString=function(t){return"String"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isNumber=function(t){return"Number"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isBoolean=function(t){return"Boolean"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isFunction=function(t){return"Function"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isNull=function(t){return"Null"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isUndefined=function(t){return"Undefined"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isObject=function(t){return"Object"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isArray=function(t){return"Array"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isDate=function(t){return"Date"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isRegExp=function(t){return"RegExp"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isError=function(t){return"Error"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isSymbol=function(t){return"Symbol"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isPromise=function(t){return"Promise"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isSet=function(t){return"Set"===Object.prototype.toString.call(t).slice(8,-1)},n.prototype.isEmpty=function(t){return void 0===t||null==t||""==t},n.prototype.isEmptyObject=function(t){return!Object.keys(t).length},n.prototype.isInteger=function(t){return this.isNumber(t)&&isFinite(t)&&Math.floor(t)===t},n.prototype.isFloat=function(t){return!this.isInteger(t)},n.prototype.isIos=function(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},n.prototype.isAndroid=function(){return-1<navigator.userAgent.indexOf("Android")||-1<navigator.userAgent.indexOf("Linux")},n.prototype.isPC=function(){for(var t=!0,e=navigator.userAgent,r=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=0;o<r.length;o++)if(0<e.indexOf(r[o])){t=!1;break}return t},n.prototype.isWebp=function(){return!![].map&&0==document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")},n.prototype.isLeapYear=function(t){return t%400==0||t%4==0&&t%100!=0},n.prototype.isHtml=function(t){return/<("[^"]*"|'[^']*'|[^'">])*>/.test(t)},n.prototype.isCardID=function(t){if(this.isNumber(t)&&(t=new String(t)),!/^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/.test(t))return!1;var e=t.substr(6,4),r=t.substr(10,2),o=t.substr(12,2),n=Date.parse(r+"-"+o+"-"+e),a=Date.parse((new Date).toString()),i=new Date(e,r,0).getDate();if(a<n||i<o)return!1;for(var c=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],u=t.split(""),p=0,s=0;s<17;s++)p+=parseInt(u[s])*c[s];return u[17].toUpperCase()==["1","0","X","9","8","7","6","5","4","3","2"][p%11].toUpperCase()},n.prototype.isVerify=function(t,e){switch(e){case"num":return/^[0-9]$/.test(t);case"en":return/^[a-zA-Z]+$/.test(t);case"chn":return/^[\u4E00-\u9FA5]+$/.test(t);case"lower":return/^[a-z]+$/.test(t);case"upper":return/^[A-Z]+$/.test(t);case"phone":return/^1[3|4|5|7|8][0-9]{9}$/.test(t);case"tel":return/^0\d{2,3}-\d{7,8}(-\d{1,6})?$/.test(t);case"url":return/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(t);case"ip":return/([0-9]{1,3}\.{1}){3}[0-9]{1,3}/.test(t);case"date":return/^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(t)||/^(\d{4})\-(\d{2})\-(\d{2})$/.test(t);case"email":return/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(t);case"postal":return/[1-9]\d{5}(?!\d)/.test(t);default:return!1}},n);function n(){}e.BaseMod=o},function(t,e,r){"use strict";var o=r(0),n=r(2),a=r(3),i=r(4),c=r(5),u=r(6),p=r(7),s=r(8),l=(f.prototype._extend=function(t,e){if("[object Object]"===Object.prototype.toString.call(t)&&"[object Object]"===Object.prototype.toString.call(e))for(var r in e)t[r]=t[r]&&"[object Object]"===t[r].toString()?this._extend(t[r],e[r]):t[r]=e[r];return t},f.prototype._init=function(){var t={BaseMod:o.BaseMod,StringMod:n.StringMod,NumberMod:a.NumberMod,DateMod:i.DateMod,ArrayMod:c.ArrayMod,DomMod:u.DomMod,BrowserMod:p.BrowserMod,OtherMod:s.OtherMod},e={};for(var r in t)e=this._extend(e,new t[r]);return e.help=function(){console.info("目前共有函数方法个数："+Object.keys(e).length),console.table(Object.keys(e))},e},f);function f(){}t.exports=(new l)._init()},function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var a,i=r(0),c=(a=i.BaseMod,n(u,a),u.prototype.trim=function(t,e){switch(e=e||"all"){case"all":return t.replace(/\s+/g,"");case"side":return t.replace(/(^\s*)|(\s*$)/g,"");case"left":return t.replace(/(^\s*)/g,"");case"right":return t.replace(/(\s*$)/g,"");default:return t}},u.prototype.replaceAll=function(t,e,r){return t.replace(new RegExp(e,"gm"),r)},u.prototype.replaceSubString=function(t){return t.str.substring(t.subStart,t.subEnd).replace(t.beforeStr,t.afterStr)},u.prototype.filterHtmlCode=function(t){var e={"<":"&lt;",">":"&gt","&":"&amp;","(":"&#40;",")":"&#41;"," ":"&nbsp;",'"':"&quot;","'":"&#39;"};return t.replace(/[<>&|() '"]/g,function(t){return e[t]})},u.prototype.fristCharUpperCase=function(t){return a.prototype.isEmpty.call(this,t)?t:t.replace(/^[a-z]/,function(t){return t.toLocaleUpperCase()})},u.prototype.fristCharLowerCase=function(t){return a.prototype.isEmpty.call(this,t)?t:t.replace(/^[A-Z]/,function(t){return t.toLocaleLowerCase()})},u.prototype.compressRepeatedStr=function(t,e){var r=new RegExp("([a-z])\\1+",e?"gi":"g");return t.replace(r,function(t,e){return t.length+e})},u.prototype.toUnicode=function(t){return a.prototype.isEmpty.call(this,t)?t:escape(t).toLocaleLowerCase().replace(/%u/gi,"\\u")},u.prototype.toGB2312=function(t){return a.prototype.isEmpty.call(this,t)?t:unescape(t.replace(/\\u/gi,"%u"))},u.prototype.getAbsoluteUrl=function(t){var e;return(e=e||document.createElement("a")).href=t,e.href},u);function u(){return null!==a&&a.apply(this,arguments)||this}e.StringMod=c},function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var a,i=r(0),c=(a=i.BaseMod,n(u,a),u.prototype.numAdd=function(t,e){var r,o,n,a;try{r=t.toString().split(".")[1].length}catch(t){r=0}try{o=e.toString().split(".")[1].length}catch(t){o=0}if(a=Math.abs(r-o),n=Math.pow(10,Math.max(r,o)),0<a){var i=Math.pow(10,a);e=o<r?(t=Number(t.toString().replace(".","")),Number(e.toString().replace(".",""))*i):(t=Number(t.toString().replace(".",""))*i,Number(e.toString().replace(".","")))}else t=Number(t.toString().replace(".","")),e=Number(e.toString().replace(".",""));return(t+e)/n},u.prototype.numSub=function(t,e){var r,o,n,a;try{r=t.toString().split(".")[1].length}catch(t){r=0}try{o=e.toString().split(".")[1].length}catch(t){o=0}return n=Math.pow(10,Math.max(r,o)),a=o<=r?r:o,Math.abs(Number(((e*n-t*n)/n).toFixed(a)))},u.prototype.numMul=function(t,e){var r=0,o=t.toString(),n=e.toString();try{r+=o.split(".")[1].length}catch(t){}try{r+=n.split(".")[1].length}catch(t){}return Number(o.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,r)},u.prototype.numDivi=function(t,e){var r=0,o=0;try{r=t.toString().split(".")[1].length}catch(t){}try{o=e.toString().split(".")[1].length}catch(t){}return Number(t.toString().replace(".",""))/Number(e.toString().replace(".",""))*Math.pow(10,o-r)},u.prototype.getPlaceRandomNum=function(t,e){return"float"==e?Math.random()*t:Math.ceil(Math.random()*t)},u.prototype.getRangeRandomNum=function(t,e,r){return"float"==r?t+Math.random()*(e+1-t):Math.floor(t+Math.random()*(e+1-t))},u.prototype.getFormatCurrency=function(t){return t.split("").reverse().join("").replace(/(\d{3}(?=\d)(?!\d+\.|$))/g,"$1,").split("").reverse().join("")},u.prototype.changeToChnCurrency=function(t){if("number"==typeof t&&(t=new String(t)),t=t.replace(/,/g,"").replace(/ /g,"").replace(/￥/g,""),isNaN(t))return"";for(var e=String(t).split("."),r="",o=e[0].length-1;0<=o;o--){if(10<e[0].length)return"";var n="",a=e[0].charAt(o);switch(a){case"0":n="零"+n;break;case"1":n="壹"+n;break;case"2":n="贰"+n;break;case"3":n="叁"+n;break;case"4":n="肆"+n;break;case"5":n="伍"+n;break;case"6":n="陆"+n;break;case"7":n="柒"+n;break;case"8":n="捌"+n;break;case"9":n="玖"+n}switch(e[0].length-o-1){case 0:n+="元";break;case 1:0!=a&&(n+="拾");break;case 2:0!=a&&(n+="佰");break;case 3:0!=a&&(n+="仟");break;case 4:n+="万";break;case 5:0!=a&&(n+="拾");break;case 6:0!=a&&(n+="佰");break;case 7:0!=a&&(n+="仟");break;case 8:n+="亿";break;case 9:n+="拾"}r=n+r}if(-1!=t.indexOf("."))for(2<e[1].length&&(e[1]=e[1].substr(0,2)),o=0;o<e[1].length;o++){switch(n="",e[1].charAt(o)){case"0":n="零"+n;break;case"1":n="壹"+n;break;case"2":n="贰"+n;break;case"3":n="叁"+n;break;case"4":n="肆"+n;break;case"5":n="伍"+n;break;case"6":n="陆"+n;break;case"7":n="柒"+n;break;case"8":n="捌"+n;break;case"9":n="玖"+n}0==o&&(n+="角"),1==o&&(n+="分"),r+=n}for(;-1!=r.search("零零");)r=r.replace("零零","零").replace("零亿","亿").replace("亿万","亿").replace("零万","万").replace("零元","元").replace("零角","").replace("零分","");return"元"==r.charAt(r.length-1)&&(r+="整"),r},u);function u(){return null!==a&&a.apply(this,arguments)||this}e.NumberMod=c},function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var a,i=r(0),c=(a=i.BaseMod,n(u,a),u.prototype.formatDate=function(t,e){if(0===arguments.length)return null;10===(t+"").length&&(t=1e3*Number(t));var r,o=e||"yyyy-MM-dd hh:mm:ss",n={yyyy:(r="object"==typeof t?t:new Date(t)).getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),hh:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds()};return o.replace(/(yyyy|MM|dd|hh|mm|ss)+/g,function(t,e){var r=n[e];return 0<t.length&&r<10&&(r="0"+r),r||0})},u.prototype.formatTime=function(t){return 3600<=t?Math.floor(t/3600)+"小时"+Math.floor(t%3600/60)+"分"+t%60+"秒":60<=t?Math.floor(t/60)+"分"+t%60+"秒":t%60+"秒"},u.prototype.getDayMinus=function(t,e){return Math.floor((Number(new Date(e))-Number(new Date(t)))/864e5)},u.prototype.getYearDays=function(t){var e=365;return 29==this.getMonthDays(t+"-2")&&(e=366),e},u.prototype.getMonthDays=function(t){var e=new Date(t),r=e.getFullYear();return[31,null,31,30,31,30,31,31,30,31,30,31][e.getMonth()]||(a.prototype.isLeapYear.call(this,r)?29:28)},u.prototype.getWhichWeek=function(t){for(var e=new Date(t),r=e.getFullYear(),o=e.getMonth(),n=e.getDate(),a=new Date(r,0,1).getDay()||7,i=0;i<o;i++)n+=this.getMonthDays(r+"-"+i);return 1==a?Math.ceil(n/a):(n-=7-a+1,Math.ceil(n/7)+1)},u.prototype.getDateMinusDaysDate=function(t,e){var r=new Date(t);return r.setDate(Number(new Date(t).getDate())+e),r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate()},u);function u(){return null!==a&&a.apply(this,arguments)||this}e.DateMod=c},function(t,e,r){"use strict";e.__esModule=!0;var o=(n.prototype.arrUnique=function(t){for(var e=[],r=0;r<t.length;r++)-1==e.indexOf(t[r])&&e.push(t[r]);return e},n.prototype.arrSort=function(r,o){return r.sort(function(t,e){switch(o){case"down":return e-t;case"up":return t-e;case"rad":return Math.random()-.5;default:return r}})},n.prototype.arrRemove=function(t,e){var r=t.indexOf(e);return-1<r&&t.splice(r,1),t},n.prototype.arrRemoveObj=function(t,e,r){for(var o=0;o<t.length;o++)t[o][e]===r&&t.splice(o,1);return t},n.prototype.arrUnion=function(t,e){return this.arrUnique(t.concat(e))},n.prototype.arrIntersect=function(e,t){return t.filter(function(t){return-1!==e.indexOf(t)})},n.prototype.arrMax=function(t){return Math.max.apply(null,t)},n.prototype.arrMin=function(t){return Math.min.apply(null,t)},n.prototype.arrSum=function(t){return t.reduce(function(t,e){return t+e})},n.prototype.arrAverage=function(t){return this.arrSum(t)/t.length},n.prototype.arrEqual=function(t,e){if(t===e)return!0;if(t.length!=e.length)return!1;for(var r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0},n.prototype.mergeJSON=function(t,e){var r={};if(t&&e){for(var o in e)t[o]=e[o];r=t}return r},n.prototype.deepCopy=function(t){return JSON.parse(JSON.stringify(t))},n.prototype.getObjectLen=function(t){return Object.keys(t).length},n.prototype.countOccurrences=function(t,r){return t.reduce(function(t,e){return e===r?t+1:t+0},0)},n);function n(){}e.ArrayMod=o},function(t,e,r){"use strict";e.__esModule=!0;var o=(n.prototype.hasClass=function(t,e){return new RegExp("(\\s|^)"+e+"(\\s|$)").test(t.className)},n.prototype.addClass=function(t,e){this.hasClass(t,e)||(t.className+=" "+e)},n.prototype.removeClass=function(t,e){this.hasClass(t,e)&&(t.className=t.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)")," "))},n.prototype.htmlToStirng=function(t){var e=document.createElement("div");return e.appendChild(t),e.innerHTML},n.prototype.stringToHtml=function(t){var e=document.createElement("div");return e.innerHTML=t,e.children[0]},n.prototype.viewModel=function(t,e){var r=new Object,o=null;Object.defineProperty(r,"key",{set:function(t){o=t,e.value=t},get:function(){return o}}),t.addEventListener("input",function(){r.key=t.value})},n);function n(){}e.DomMod=o},function(t,e,r){"use strict";e.__esModule=!0;var o=(n.prototype.getBrowser=function(){var t,e={},r=navigator.userAgent.toLowerCase();return(t=r.match(/rv:([\d.]+)\) like gecko/))||(t=r.match(/msie ([\d\.]+)/))?e.ie=t[1]:(t=r.match(/edge\/([\d\.]+)/))?e.edge=t[1]:(t=r.match(/firefox\/([\d\.]+)/))?e.firefox=t[1]:(t=r.match(/(?:opera|opr).([\d\.]+)/))?e.opera=t[1]:(t=r.match(/chrome\/([\d\.]+)/))?e.chrome=t[1]:(t=r.match(/version\/([\d\.]+).*safari/))&&(e.safari=t[1]),e.ie?"IE: "+e.ie:e.edge?"EDGE: "+e.edge:e.firefox?"Firefox: "+e.firefox:e.chrome?"Chrome: "+e.chrome:e.opera?"Opera: "+e.opera:e.safari?"Safari: "+e.safari:"Unkonwn"},n.prototype.getOS=function(){var t="navigator"in window&&"userAgent"in navigator&&navigator.userAgent.toLowerCase()||"",e=("navigator"in window&&"vendor"in navigator&&navigator.vendor.toLowerCase(),"navigator"in window&&"appVersion"in navigator&&navigator.appVersion.toLowerCase()||"");return/mac/i.test(e)?"MacOSX":/win/i.test(e)?"windows":/linux/i.test(e)?"linux":(/iphone/i.test(t)||/ipad/i.test(t)||/ipod/i.test(t),/android/i.test(t)?"android":/win/i.test(e)&&/phone/i.test(t)?"windowsPhone":void 0)},n.prototype.getQueryParam=function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null!=e?decodeURIComponent(e[2]):null},n.prototype.parseQueryParam=function(t){var e=(t=null==t?window.location.href:t).substring(t.lastIndexOf("?")+1);return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}},n.prototype.stringfyQueryParam=function(t){if(!t)return"";var e=[];for(var r in t){var o=t[r];if(o instanceof Array)for(var n=0;n<o.length;++n)e.push(encodeURIComponent(r+"["+n+"]")+"="+encodeURIComponent(o[n]));else e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]))}return e.join("&")},n.prototype.setCookie=function(t,e,r){var o=r||2592e6,n=new Date;n.setTime(n.getTime()+o),document.cookie=t+"="+escape(e)+";expires="+n.toUTCString()},n.prototype.getCookie=function(t){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));return null!=e?e[2]:""},n.prototype.delCookie=function(t){var e=new Date;e.setTime(e.getTime()-1);var r=this.getCookie(t);null!=r&&(document.cookie=t+"="+r+";expires="+e.toUTCString())},n.prototype.getScrollPosition=function(t){return void 0===t&&(t=window),{x:void 0!==t.pageXOffset?t.pageXOffset:t.scrollLeft,y:void 0!==t.pageYOffset?t.pageYOffset:t.scrollTop}},n.prototype.rollToViewArea=function(t){document.querySelector(t).scrollIntoView({behavior:"smooth"})},n.prototype.storageSet=function(t,e,r,o){void 0===r&&(r=!0),"object"==typeof e&&(e=JSON.stringify(e)),r?localStorage.setItem(t,e):sessionStorage.setItem(t,e),o&&setTimeout(function(){localStorage.removeItem(t)},o)},n.prototype.storageGet=function(t,e){return void 0===e&&(e=!0),localStorage.getItem(t)},n.prototype.storageRemove=function(t,e){void 0===e&&(e=!0),e?localStorage.removeItem(t):sessionStorage.removeItem(t)},n);function n(){}e.BrowserMod=o},function(t,e,r){"use strict";e.__esModule=!0;var o=(n.prototype.guid=function(){for(var t="",e=1;e<=32;e++)t+=Math.floor(16*Math.random()).toString(16),8!=e&&12!=e&&16!=e&&20!=e||(t+="-");return t},n.prototype.getRandomColor=function(){return"#"+function(t){return(t+="0123456789abcdef"[Math.floor(16*Math.random())])&&6==t.length?t:arguments.callee(t)}("")},n.prototype.checkPwd=function(t){var e=0;return t.length<6||(/[0-9]/.test(t)&&e++,/[a-z]/.test(t)&&e++,/[A-Z]/.test(t)&&e++,/[\.|-|_]/.test(t)&&e++),e},n.prototype.HEXToRGB=function(t){if((t=t.toLowerCase())&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){for(var e="#",r=1;r<4;r+=1)e+=t.slice(r,r+1).concat(t.slice(r,r+1));t=e}var o=[];for(r=1;r<7;r+=2)o.push(parseInt("0x"+t.slice(r,r+2)));return"RGB("+o.join(",")+")"}return t},n.prototype.RGBToHEX=function(t){var e="";if(/^(rgb|RGB)/.test(t)){for(var r=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),o="#",n=0;n<r.length;n++){var a=Number(r[n]).toString(16);"0"===a&&(a+=a),o+=a}7!==o.length&&(o=t),e=o}else if(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){var i=t.replace(/#/,"").split("");if(6===i.length)return t;if(3===i.length){var c="#";for(n=0;n<i.length;n+=1)c+=i[n]+i[n];e=c}}else e=t;return e},n.prototype.once=function(t,e){var r,o=this;return function(){return t&&(r=t.apply(e||o,arguments),t=null),r}},n.prototype.debounce=function(e,r){var o=null,n=this;return function(){var t=arguments;o&&clearTimeout(o),o=setTimeout(function(){e.apply(n,t)},r)}},n.prototype.throttle=function(e,r){var o=!1,n=this;return function(){var t=Array.prototype.slice.apply(arguments);o||(o=!0,setTimeout(function(){e.apply(n,t),o=!1},r))}},n);function n(){}e.OtherMod=o}]);