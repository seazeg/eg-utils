window["egUtils"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Modules = /** @class */ (function () {
    function Modules() {
    }
    /**
     * @description 判断字符串类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isString = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'String';
    };
    /**
     * @description 判断数字类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isNumber = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Number';
    };
    /**
     * @description 判断布尔类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isBoolean = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Boolean';
    };
    /**
     * @description 判断Function类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isFunction = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Function';
    };
    /**
     * @description 判断null类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isNull = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Null';
    };
    /**
     * @description 判断undefined类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isUndefined = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Undefined';
    };
    /**
     * @description 判断object类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isObject = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Object';
    };
    /**
     * @description 判断array类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isArray = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Array';
    };
    /**
     * @description 判断date类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isDate = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Date';
    };
    /**
     * @description 判断regExp类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isRegExp = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'RegExp';
    };
    /**
     * @description 判断error类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isError = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Error';
    };
    /**
     * @description 判断symbol类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isSymbol = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Symbol';
    };
    /**
     * @description 判断promise类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isPromise = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Promise';
    };
    /**
     * @description 判断set类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isSet = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Set';
    };
    /**
     * @description 判断是否为空
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isEmpty = function (value) {
        return typeof value == "undefined" || value == null || value == "" ? true : false;
    };
    /**
     * @description 判断对象是否为空
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isEmptyObject = function (value) {
        if (!value || typeof value !== 'object' || Array.isArray(value))
            return false;
        return !Object.keys(value).length;
    };
    /**
     * @description 判断是否是整数
     * @param {*} value
     * @returns {boolean}
     */
    Modules.prototype.isInteger = function (value) {
        return this.isNumber(value) &&
            isFinite(value) &&
            Math.floor(value) === value;
    };
    ;
    /**
     * @description 判断是否是小数
     * @param {*} value
     * @returns {boolean}
     */
    Modules.prototype.isFloat = function (value) {
        return !this.isInteger(value);
    };
    ;
    /**
     * @description 判断是否为ios
     * @returns {Boolean}
     */
    Modules.prototype.isIos = function () {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    };
    /**
     * @description 判断是否为android
     * @returns {Boolean}
     */
    Modules.prototype.isAndroid = function () {
        return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1;
    };
    /**
     * @description 判断是否为pc端
     * @returns {Boolean}
     */
    Modules.prototype.isPC = function () {
        var flag = true;
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"
        ];
        for (var i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    };
    /**
     * @description 判断是否支持webp
     * @returns {boolean}
     */
    Modules.prototype.isWebp = function () {
        return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    };
    /**
     * @description 判断是否为闰年
     * @param {*} value
     * @returns {boolean}
     */
    Modules.prototype.isLeapYear = function (value) {
        return (value % 400 == 0) || (value % 4 == 0 && value % 100 != 0);
    };
    /**
     * @description 判断是否含有html标签
     * @param {*} value
     * @returns {boolean}
     */
    Modules.prototype.isHtml = function (value) {
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(value);
    };
    /**
     * @description 判断校验身份证信息
     * @param {*} value
     * @returns {boolean}
     */
    Modules.prototype.isCardID = function (value) {
        var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
        if (this.isNumber(value)) {
            value = new String(value);
        }
        ;
        //初步校验-号码规则校验
        if (!format.test(value)) {
            return false;
        }
        //二级校验-区位码校验
        var year = value.substr(6, 4), //身份证年
        month = value.substr(10, 2), //身份证月
        day = value.substr(12, 2), //身份证日
        time = Date.parse(month + '-' + day + '-' + year), //身份证日期时间戳
        nowtime = Date.parse(new Date().toString()), //当前时间戳
        nowday = (new Date(year, month, 0)).getDate(); //身份证当月天数
        if (time > nowtime || day > nowday) {
            return false;
        }
        //三级校验-校验码判断 {https://jingyan.baidu.com/article/7f41ececff944a593d095c8c.html}
        var c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //系数
        var b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']; //校验码对照表
        var idArr = value.split("");
        var sum = 0;
        for (var i = 0; i < 17; i++) {
            sum += parseInt(idArr[i]) * c[i];
        }
        if (idArr[17].toUpperCase() != b[sum % 11].toUpperCase()) {
            return false;
        }
        return true;
    };
    /**
     * @description 字符串综合校验
     * @param {*} value num-数字 en-英文 chn-中文 lower-小写 upper-大写 phone-手机号码 tel-座机 url-网址 ip-IP地址 date-日期格式 email-邮箱 postal-邮政编码
     * @returns {boolean}
     */
    Modules.prototype.isVerify = function (value, type) {
        switch (type) {
            case 'num':
                return /^[0-9]$/.test(value);
            case 'en':
                return /^[a-zA-Z]+$/.test(value);
            case 'chn':
                return /^[\u4E00-\u9FA5]+$/.test(value);
            case 'lower':
                return /^[a-z]+$/.test(value);
            case 'upper':
                return /^[A-Z]+$/.test(value);
            case 'phone':
                return /^1[3|4|5|7|8][0-9]{9}$/.test(value);
            case 'tel':
                return /^0\d{2,3}-\d{7,8}(-\d{1,6})?$/.test(value);
            case 'url':
                return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value);
            case 'ip':
                return /([0-9]{1,3}\.{1}){3}[0-9]{1,3}/.test(value);
            case 'date':
                return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(value) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(value);
            case 'email':
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value);
            case 'postal':
                return /[1-9]\d{5}(?!\d)/.test(value);
            default:
                return false;
        }
    };
    return Modules;
}());
exports.BaseMod = Modules;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var base_1 = __webpack_require__(0);
var string_1 = __webpack_require__(2);
var number_1 = __webpack_require__(3);
var date_1 = __webpack_require__(4);
var array_1 = __webpack_require__(5);
var dom_1 = __webpack_require__(6);
var browser_1 = __webpack_require__(7);
var other_1 = __webpack_require__(8);
/**
 * @description 入口主函数
 * @class Center
 */
var Center = /** @class */ (function () {
    function Center() {
    }
    Center.prototype._extend = function (target, source) {
        if (Object.prototype.toString.call(target) === '[object Object]' && Object.prototype.toString.call(source) === '[object Object]') {
            for (var key in source) {
                target[key] = target[key] && target[key].toString() === "[object Object]" ?
                    this._extend(target[key], source[key]) : target[key] = source[key];
            }
        }
        return target;
    };
    Center.prototype._init = function () {
        var modules = {
            'BaseMod': base_1.BaseMod,
            'StringMod': string_1.StringMod,
            'NumberMod': number_1.NumberMod,
            'DateMod': date_1.DateMod,
            'ArrayMod': array_1.ArrayMod,
            'DomMod': dom_1.DomMod,
            'BrowserMod': browser_1.BrowserMod,
            'OtherMod': other_1.OtherMod
        };
        var res = {};
        for (var m in modules) {
            res = this._extend(res, new modules[m]);
        }
        res.help = function () {
            console.info('目前共有函数方法个数：' + Object.keys(res).length);
            try {
                console.table(Object.keys(res));
            }
            catch (e) {
                console.log(Object.keys(res));
            }
        };
        return res;
    };
    return Center;
}());
module.exports = (new Center())._init();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = __webpack_require__(0);
var modules = /** @class */ (function (_super) {
    __extends(modules, _super);
    function modules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description 去除字符串空格
     * @param {string} str 字符串
     * @param {number} type 1-所有空格  2-前后空格  3-前空格 4-后空格
     * @returns {string}
     */
    modules.prototype.trim = function (str, type) {
        type = type || 1;
        switch (type) {
            case 1:
                return str.replace(/\s+/g, "");
            case 2:
                return str.replace(/(^\s*)|(\s*$)/g, "");
            case 3:
                return str.replace(/(^\s*)/g, "");
            case 4:
                return str.replace(/(\s*$)/g, "");
            default:
                return str;
        }
    };
    /**
     * @description 替换字符串中所有指定字符
     * @param {string} str 内容
     * @param {string} beforeStr 需要替换字符
     * @param {string} afterStr 替换成的字符
     * @returns {(string)}
     */
    modules.prototype.replaceAll = function (str, beforeStr, afterStr) {
        return str.replace(new RegExp(beforeStr, 'gm'), afterStr);
    };
    /**
     * @description 替换被截取字符串
     * @param {string} str 内容
     * @param {number} subStart 截取开始位置
     * @param {number} subEnd 截取结束位置
     * @param {string} beforeStr 需要替换字符
     * @param {string} afterStr 替换成的字符
     * @returns {(string)}
     */
    modules.prototype.replaceSubString = function (options) {
        var temp = options.str.substring(options.subStart, options.subEnd);
        return temp.replace(options.beforeStr, options.afterStr);
    };
    /**
     * @description 过滤html操作符
     * @param {string} value
     * @returns {string}
     */
    modules.prototype.filterHtmlCode = function (str) {
        var temp = {
            '<': '&lt;',
            '>': '&gt',
            '&': '&amp;',
            '(': '&#40;',
            ')': '&#41;',
            ' ': '&nbsp;',
            '"': '&quot;',
            '\'': "&#39;"
        };
        return str.replace(/[<>&|() '"]/g, function (chr) {
            return temp[chr];
        });
    };
    /**
     * @description 首字母大写
     * @param {string} str
     * @returns {string}
     */
    modules.prototype.fristCharUpperCase = function (str) {
        if (!_super.prototype.isEmpty.call(this, str)) {
            return str.replace(/^[a-z]/, function (chr) {
                return chr.toLocaleUpperCase();
            });
        }
        else {
            return str;
        }
    };
    /**
     * @description 首字母小写
     * @param {string} str
     * @returns {string}
     */
    modules.prototype.fristCharLowerCase = function (str) {
        if (!_super.prototype.isEmpty.call(this, str)) {
            return str.replace(/^[A-Z]/, function (chr) {
                return chr.toLocaleLowerCase();
            });
        }
        else {
            return str;
        }
    };
    /**
     * @description 压缩相同且连续的字符
     * @param {string} str
     * @param {boolean} 是否区分大小写
     * @returns {string} bbbssss => 3b4s
     */
    modules.prototype.compressRepeatedStr = function (str, ignoreCase) {
        var regex = new RegExp("([a-z])\\1+", ignoreCase ? "gi" : "g");
        return str.replace(regex, function (str, group) {
            return str.length + group;
        });
    };
    /**
     * @description 中文转Unicode码
     * @param {string} str
     * @returns {string}
     */
    modules.prototype.toUnicode = function (str) {
        if (!_super.prototype.isEmpty.call(this, str)) {
            return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
        }
        else {
            return str;
        }
    };
    /**
     * @description Unicode码转中文
     * @param {string} str
     * @returns {string}
     */
    modules.prototype.toGB2312 = function (str) {
        if (!_super.prototype.isEmpty.call(this, str)) {
            return unescape(str.replace(/\\u/gi, '%u'));
        }
        else {
            return str;
        }
    };
    return modules;
}(base_1.BaseMod));
exports.StringMod = modules;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = __webpack_require__(0);
var modules = /** @class */ (function (_super) {
    __extends(modules, _super);
    function modules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description 数字精确相加
     * @param {*} num1
     * @param {*} num2
     * @returns {number}
     */
    modules.prototype.numAdd = function (num1, num2) {
        var temp1, temp2, times, abs;
        try {
            temp1 = num1.toString().split(".")[1].length;
        }
        catch (e) {
            temp1 = 0;
        }
        try {
            temp2 = num2.toString().split(".")[1].length;
        }
        catch (e) {
            temp2 = 0;
        }
        abs = Math.abs(temp1 - temp2);
        times = Math.pow(10, Math.max(temp1, temp2));
        if (abs > 0) {
            var ctimes = Math.pow(10, abs);
            if (temp1 > temp2) {
                num1 = Number(num1.toString().replace(".", ""));
                num2 = Number(num2.toString().replace(".", "")) * ctimes;
            }
            else {
                num1 = Number(num1.toString().replace(".", "")) * ctimes;
                num2 = Number(num2.toString().replace(".", ""));
            }
        }
        else {
            num1 = Number(num1.toString().replace(".", ""));
            num2 = Number(num2.toString().replace(".", ""));
        }
        return (num1 + num2) / times;
    };
    /**
     * @description 数字精确相减
     * @param {*} num1
     * @param {*} num2
     * @returns
     */
    modules.prototype.numSub = function (num1, num2) {
        var temp1, temp2, times, n;
        try {
            temp1 = num1.toString().split(".")[1].length;
        }
        catch (e) {
            temp1 = 0;
        }
        try {
            temp2 = num2.toString().split(".")[1].length;
        }
        catch (e) {
            temp2 = 0;
        }
        times = Math.pow(10, Math.max(temp1, temp2));
        n = temp1 >= temp2 ? temp1 : temp2;
        return Math.abs(Number(((num2 * times - num1 * times) / times).toFixed(n)));
    };
    /**
     * @description 数字精确相乘
     * @param {*} num1
     * @param {*} num2
     * @returns
     */
    modules.prototype.numMul = function (num1, num2) {
        var m = 0, temp1 = num1.toString(), temp2 = num2.toString();
        try {
            m += temp1.split(".")[1].length;
        }
        catch (e) { }
        try {
            m += temp2.split(".")[1].length;
        }
        catch (e) { }
        return Number(temp1.replace(".", "")) * Number(temp2.replace(".", "")) / Math.pow(10, m);
    };
    /**
     * @description 数字精确相除
     * @param {*} num1
     * @param {*} num2
     * @returns
     */
    modules.prototype.numDivi = function (num1, num2) {
        var temp1 = 0, temp2 = 0, r1, r2;
        try {
            temp1 = num1.toString().split(".")[1].length;
        }
        catch (e) { }
        try {
            temp2 = num2.toString().split(".")[1].length;
        }
        catch (e) { }
        r1 = Number(num1.toString().replace(".", ""));
        r2 = Number(num2.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, temp2 - temp1);
    };
    /**
     * @description 生成指定位数的随机数
     * @param {number} placeRange 位数
     * @param {string} returnType
     * @returns {number}
     */
    modules.prototype.getPlaceRandomNum = function (placeRange, returnType) {
        return returnType == "float" ? Math.random() * placeRange : Math.ceil(Math.random() * placeRange);
    };
    /**
     * @description 生成指定范围的随机数
     * @param {number} min 最小值
     * @param {number} max 最大值
     * @returns {number}
     */
    modules.prototype.getRangeRandomNum = function (min, max) {
        return Math.floor(min + Math.random() * ((max + 1) - min));
    };
    /**
     * @description 格式化成货币格式
     * @param {string} value
     * @returns {string}
     */
    modules.prototype.getFormatCurrency = function (value) {
        return value.split('').reverse().join('').replace(/(\d{3}(?=\d)(?!\d+\.|$))/g, '$1,').split('').reverse().join('');
    };
    /**
     * @description 转换成大写货币格式
     * @param {*} value 货币金额
     * @returns {string}
     */
    modules.prototype.changeToChnCurrency = function (value) {
        if (typeof value == 'number') {
            value = new String(value);
        }
        ;
        //过滤传入值的无用字符
        value = value.replace(/,/g, "").replace(/ /g, "").replace(/￥/g, "");
        //验证输入的字符是否为数字
        if (isNaN(value)) {
            return "";
        }
        ;
        //字符处理完毕后开始转换
        var part = String(value).split(".");
        var newchar = "";
        //小数点前进行转化
        for (var i = part[0].length - 1; i >= 0; i--) {
            if (part[0].length > 10) {
                return "";
            }
            var tempchar = "";
            var oldchar = part[0].charAt(i);
            switch (oldchar) {
                case "0":
                    tempchar = "零" + tempchar;
                    break;
                case "1":
                    tempchar = "壹" + tempchar;
                    break;
                case "2":
                    tempchar = "贰" + tempchar;
                    break;
                case "3":
                    tempchar = "叁" + tempchar;
                    break;
                case "4":
                    tempchar = "肆" + tempchar;
                    break;
                case "5":
                    tempchar = "伍" + tempchar;
                    break;
                case "6":
                    tempchar = "陆" + tempchar;
                    break;
                case "7":
                    tempchar = "柒" + tempchar;
                    break;
                case "8":
                    tempchar = "捌" + tempchar;
                    break;
                case "9":
                    tempchar = "玖" + tempchar;
                    break;
            }
            switch (part[0].length - i - 1) {
                case 0:
                    tempchar = tempchar + "元";
                    break;
                case 1:
                    if (oldchar != 0)
                        tempchar = tempchar + "拾";
                    break;
                case 2:
                    if (oldchar != 0)
                        tempchar = tempchar + "佰";
                    break;
                case 3:
                    if (oldchar != 0)
                        tempchar = tempchar + "仟";
                    break;
                case 4:
                    tempchar = tempchar + "万";
                    break;
                case 5:
                    if (oldchar != 0)
                        tempchar = tempchar + "拾";
                    break;
                case 6:
                    if (oldchar != 0)
                        tempchar = tempchar + "佰";
                    break;
                case 7:
                    if (oldchar != 0)
                        tempchar = tempchar + "仟";
                    break;
                case 8:
                    tempchar = tempchar + "亿";
                    break;
                case 9:
                    tempchar = tempchar + "拾";
                    break;
            }
            newchar = tempchar + newchar;
        }
        //小数点之后进行转化
        if (value.indexOf(".") != -1) {
            if (part[1].length > 2) {
                //保留两位小数
                part[1] = part[1].substr(0, 2);
            }
            for (var i = 0; i < part[1].length; i++) {
                var tempchar = "";
                var perchar = part[1].charAt(i);
                switch (perchar) {
                    case "0":
                        tempchar = "零" + tempchar;
                        break;
                    case "1":
                        tempchar = "壹" + tempchar;
                        break;
                    case "2":
                        tempchar = "贰" + tempchar;
                        break;
                    case "3":
                        tempchar = "叁" + tempchar;
                        break;
                    case "4":
                        tempchar = "肆" + tempchar;
                        break;
                    case "5":
                        tempchar = "伍" + tempchar;
                        break;
                    case "6":
                        tempchar = "陆" + tempchar;
                        break;
                    case "7":
                        tempchar = "柒" + tempchar;
                        break;
                    case "8":
                        tempchar = "捌" + tempchar;
                        break;
                    case "9":
                        tempchar = "玖" + tempchar;
                        break;
                }
                if (i == 0)
                    tempchar = tempchar + "角";
                if (i == 1)
                    tempchar = tempchar + "分";
                newchar = newchar + tempchar;
            }
        }
        //替换所有无用汉字
        while (newchar.search("零零") != -1) {
            newchar = newchar.replace("零零", "零").replace("零亿", "亿").replace("亿万", "亿").replace("零万", "万").replace("零元", "元").replace("零角", "").replace("零分", "");
        }
        if (newchar.charAt(newchar.length - 1) == "元") {
            newchar = newchar + "整";
        }
        return newchar;
    };
    return modules;
}(base_1.BaseMod));
exports.NumberMod = modules;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = __webpack_require__(0);
var modules = /** @class */ (function (_super) {
    __extends(modules, _super);
    function modules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description 格式化日期
     * @param {any} date 时间戳或日期
     * @param {string} type 默认：yyyy-MM-dd hh:mm:ss
     * @returns {any}
     */
    modules.prototype.formatDate = function (date, type) {
        if (arguments.length === 0)
            return null;
        if ((date + '').length === 10) {
            date = Number(date) * 1000;
        }
        var format = type || 'yyyy-MM-dd hh:mm:ss', tempdate;
        if (typeof date === 'object') {
            tempdate = date;
        }
        else {
            tempdate = new Date(date);
        }
        var formatObj = {
            yyyy: tempdate.getFullYear(),
            MM: tempdate.getMonth() + 1,
            dd: tempdate.getDate(),
            hh: tempdate.getHours(),
            mm: tempdate.getMinutes(),
            ss: tempdate.getSeconds()
        };
        return format.replace(/(yyyy|MM|dd|hh|mm|ss)+/g, function (result, key) {
            var value = formatObj[key];
            if (result.length > 0 && value < 10) {
                value = '0' + value;
            }
            return value || 0;
        });
    };
    /**
     * @description 格式化时分秒
     * @param {any} date 时间戳
     * @returns {string}
     */
    modules.prototype.formatTime = function (time) {
        var temp = '';
        if (time >= 3600) {
            temp = Math.floor(time / 3600) + '小时' + Math.floor(time % 3600 / 60) + '分' + time % 60 + '秒';
        }
        else if (time >= 60) {
            temp = Math.floor(time / 60) + '分' + time % 60 + '秒';
        }
        else {
            temp = time % 60 + '秒';
        }
        return temp;
    };
    /**
     * @description 获取两个日期间差值
     * @param {*} startDate
     * @param {*} endDate
     * @returns {number}
     */
    modules.prototype.getDayMinus = function (startDate, endDate) {
        return Math.floor((Number(new Date(endDate)) - Number(new Date(startDate))) / (1000 * 60 * 60 * 24));
    };
    /**
     * @description 获取某年有多少天
     * @param {*} year 1999
     * @returns {number}
     */
    modules.prototype.getYearDays = function (year) {
        var days = 365;
        this.getMonthDays(year + '-2') == 29 ? days = 366 : days;
        return days;
    };
    /**
     * @description 获取某年某月有多少天
     * @param {*} date 1999-1
     * @returns {number}
     */
    modules.prototype.getMonthDays = function (date) {
        var temp = new Date(date);
        var year = temp.getFullYear();
        var month = temp.getMonth();
        return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (_super.prototype.isLeapYear.call(this, year) ? 29 : 28);
    };
    /**
     * @description 获取某年某天是第几周
     * @param {*} date 1999-1-1
     * @returns {number}
     */
    modules.prototype.getWhichWeek = function (date) {
        var temp = new Date(date), year = temp.getFullYear(), month = temp.getMonth(), days = temp.getDate();
        var yearFirstDay = new Date(year, 0, 1).getDay() || 7;
        var week = null;
        for (var m = 0; m < month; m++) {
            days += this.getMonthDays(year + '-' + m);
        }
        if (yearFirstDay == 1) {
            week = Math.ceil(days / yearFirstDay);
        }
        else {
            days -= (7 - yearFirstDay + 1);
            week = Math.ceil(days / 7) + 1;
        }
        return week;
    };
    /**
     * @description 获取某日期前后若干天数的日期
     * @param {*} date
     * @param {number} minusDays
     * @returns {string}
     */
    modules.prototype.getDateMinusDaysDate = function (date, minusDays) {
        var temp = new Date(date);
        temp.setDate(Number(new Date(date).getDate()) + minusDays); //获取AddDayCount天后的日期
        var y = temp.getFullYear();
        var m = temp.getMonth() + 1; //获取当前月份的日期
        var d = temp.getDate();
        return y + "-" + m + "-" + d;
    };
    return modules;
}(base_1.BaseMod));
exports.DateMod = modules;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var modules = /** @class */ (function () {
    function modules() {
    }
    /**
     * @description 数组元素去重
     * @param {Array < any >} arr
     * @returns {Array < any >}
     */
    modules.prototype.arrUnique = function (arr) {
        var temp = [];
        for (var i = 0; i < arr.length; i++) {
            if (temp.indexOf(arr[i]) == -1) {
                temp.push(arr[i]);
            }
        }
        return temp;
    };
    /**
     * @description 数组元素排序
     * @param {*} arr 数组
     * @param {number} type 1-降序  2-升序  3-随机
     * @returns {Array < any >}
     */
    modules.prototype.arrSort = function (arr, type) {
        return arr.sort(function (a, b) {
            switch (type) {
                case 1:
                    return b - a;
                case 2:
                    return a - b;
                case 3:
                    return Math.random() - 0.5;
                default:
                    return arr;
            }
        });
    };
    /**
     * @description 删除指定的数组元素
     * @param {Array < any >} arr
     * @param {*} ele
     * @returns {Array < any >}
     */
    modules.prototype.arrRemove = function (arr, ele) {
        var i = arr.indexOf(ele);
        i > -1 ? arr.splice(i, 1) : null;
        return arr;
    };
    /**
     * @description 获得两个数组的并集
     * @param {Array < any >} a
     * @param {Array < any >} b
     * @returns {Array < any >}
     */
    modules.prototype.arrUnion = function (a, b) {
        return this.arrUnique(a.concat(b));
    };
    /**
     * @description 获得两个数组的交集
     * @param {Array < any >} a
     * @param {Array < any >} b
     * @returns {Array < any >}
     */
    modules.prototype.arrIntersect = function (a, b) {
        return b.filter(function (v) {
            return a.indexOf(v) !== -1;
        });
    };
    /**
     * @description 数组元素最大值（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    modules.prototype.arrMax = function (arr) {
        return Math.max.apply(null, arr);
    };
    /**
     * @description 数组元素最小值（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    modules.prototype.arrMin = function (arr) {
        return Math.min.apply(null, arr);
    };
    /**
     * @description 数组元素求和（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    modules.prototype.arrSum = function (arr) {
        return arr.reduce(function (pre, cur) {
            return pre + cur;
        });
    };
    /**
     * @description 数组元素平均值（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    modules.prototype.arrAverage = function (arr) {
        return this.arrSum(arr) / arr.length;
    };
    /**
     * @description 比较两个数组是否相等
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
    modules.prototype.arrEqual = function (a, b) {
        if (a === b)
            return true;
        if (a.length != b.length)
            return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    };
    /**
     * @description 合并两个对象
     * @param {*} a 对象
     * @param {*} b 对象
     * @returns {Object}
     */
    modules.prototype.mergeJSON = function (a, b) {
        var temp = {};
        if (a && b) {
            for (var i in b) {
                a[i] = b[i];
            }
            temp = a;
        }
        return temp;
    };
    /**
     * @description 深拷贝数组或对象
     * @param {(object | Array < any >)} obj 数组或对象
     * @returns {(object | Array < any >)}
     */
    modules.prototype.deepCopy = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    /**
     * @description 获取对象长度
     * @param {{
     *     [key: string]: any
     *   }} obj
     * @returns {number}
     */
    modules.prototype.getObjectLen = function (obj) {
        return Object.keys(obj).length;
    };
    return modules;
}());
exports.ArrayMod = modules;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var modules = /** @class */ (function () {
    function modules() {
    }
    /**
     * @description 判断是否有指定class
     * @param {*} ele
     * @param {*} cls
     * @returns {boolean}
     */
    modules.prototype.hasClass = function (ele, cls) {
        return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
    };
    /**
     * @description 添加class
     * @param {*} ele
     * @param {*} cls
     */
    modules.prototype.addClass = function (ele, cls) {
        if (!this.hasClass(ele, cls)) {
            ele.className += ' ' + cls;
        }
    };
    /**
     * @description 删除class
     * @param {*} ele
     * @param {*} cls
     */
    modules.prototype.removeClass = function (ele, cls) {
        if (this.hasClass(ele, cls)) {
            ele.className = ele.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' ');
        }
    };
    /**
     * @description html转成字符串
     * @param {*} htmlDOM htmlDOM
     * @returns {string}
     */
    modules.prototype.htmlToStirng = function (htmlDOM) {
        var temp = document.createElement("div");
        temp.appendChild(htmlDOM);
        return temp.innerHTML;
    };
    /**
     * @description 字符串转html
     * @param {*} htmlString html字符串
     * @returns {*}
     */
    modules.prototype.stringToHtml = function (htmlString) {
        var temp = document.createElement("div");
        temp.innerHTML = htmlString;
        return temp.children[0];
    };
    return modules;
}());
exports.DomMod = modules;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var modules = /** @class */ (function () {
    function modules() {
    }
    /**
     * @description 获取当前浏览器版本
     * @returns {*}
     */
    modules.prototype.getBrowser = function () {
        var sys = {}, ua = navigator.userAgent.toLowerCase(), s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
            (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
                (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
                    (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
                        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
                            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                                (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
        if (sys.ie)
            return ('IE: ' + sys.ie);
        if (sys.edge)
            return ('EDGE: ' + sys.edge);
        if (sys.firefox)
            return ('Firefox: ' + sys.firefox);
        if (sys.chrome)
            return ('Chrome: ' + sys.chrome);
        if (sys.opera)
            return ('Opera: ' + sys.opera);
        if (sys.safari)
            return ('Safari: ' + sys.safari);
        return 'Unkonwn';
    };
    /**
     * @description 获取当前操作系统类型
     * @returns {*}
     */
    modules.prototype.getOS = function () {
        var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
        var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
        var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
        if (/mac/i.test(appVersion))
            return 'MacOSX';
        if (/win/i.test(appVersion))
            return 'windows';
        if (/linux/i.test(appVersion))
            return 'linux';
        if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent))
            'ios';
        if (/android/i.test(userAgent))
            return 'android';
        if (/win/i.test(appVersion) && /phone/i.test(userAgent))
            return 'windowsPhone';
    };
    /**
     * @description 获取url中指定参数值
     * @param {string} param 参数名称
     * @returns {(string | null)}
     */
    modules.prototype.getQueryParam = function (param) {
        var r = window.location.search.substr(1).match(new RegExp("(^|&)" + param + "=([^&]*)(&|$)")); //search,查询？后面的参数，并匹配正则
        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        else {
            return null;
        }
    };
    /**
     * @description url地址参数序列化
     * @param {string} url
     * @returns {*}
     */
    modules.prototype.parseQueryParam = function (url) {
        url = url == null ? window.location.href : url;
        var search = url.substring(url.lastIndexOf('?') + 1);
        if (!search) {
            return {};
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    };
    /**
     * @description url参数对象反序列化
     * @param {{[key:string]:any}} paramObj {a:1,b:1}
     * @returns {*}
     */
    modules.prototype.stringfyQueryParam = function (paramObj) {
        if (!paramObj)
            return '';
        var temp = [];
        for (var key in paramObj) {
            var value = paramObj[key];
            if (value instanceof Array) {
                for (var i = 0; i < value.length; ++i) {
                    temp.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                }
                continue;
            }
            temp.push(encodeURIComponent(key) + '=' + encodeURIComponent(paramObj[key]));
        }
        return temp.join('&');
    };
    /**
     * @description 设置cookie
     * @param {*} key
     * @param {*} value
     * @param {*} days 过期时间长度
     */
    modules.prototype.setCookie = function (key, value, days) {
        var Days = days || 30 * 24 * 60 * 60 * 1000;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days);
        document.cookie = key + "=" + escape(value) + ";expires=" + exp.toUTCString();
    };
    /**
     * @description 获取指定cookie
     * @param {*} key
     * @returns {*}
     */
    modules.prototype.getCookie = function (key) {
        var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
        if (arr != null) {
            return (arr[2]);
        }
        else {
            return "";
        }
    };
    /**
     * @description 删除指定cookie
     * @param {*} key
     */
    modules.prototype.delCookie = function (key) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var tmpValue = this.getCookie(key);
        if (tmpValue != null) {
            document.cookie = key + "=" + tmpValue + ";expires=" + exp.toUTCString();
        }
    };
    /**
     * @description 获取相对路径的绝对路径
     * @param {string} url 相对路径
     * @returns {string} 绝对路径
     */
    modules.prototype.relativePathToFullPath = function (url) {
        var img = new Image();
        img.src = url;
        url = img.src;
        img.src = '';
        return url;
    };
    ;
    return modules;
}());
exports.BrowserMod = modules;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var modules = /** @class */ (function () {
    function modules() {
    }
    /**
     * @description 随机生成色值
     * @returns {string}
     */
    modules.prototype.getRandomColor = function () {
        return '#' +
            (function (color) {
                return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)]) &&
                    (color.length == 6) ? color : arguments.callee(color);
            })('');
    };
    /**
     * @description 校验密码强度(通用)
     * @param {*} str 字符串
     * @returns {number}
     */
    modules.prototype.checkPwd = function (str) {
        var level = 0;
        if (str.length < 6) {
            return level;
        }
        if (/[0-9]/.test(str)) {
            level++;
        }
        if (/[a-z]/.test(str)) {
            level++;
        }
        if (/[A-Z]/.test(str)) {
            level++;
        }
        if (/[\.|-|_]/.test(str)) {
            level++;
        }
        return level;
    };
    /**
     * @description 颜色16进制转RGB
     * @param {string} str #000000
     * @returns {string} RGB(0,0,0)
     */
    modules.prototype.HEXToRGB = function (str) {
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        str = str.toLowerCase();
        if (str && reg.test(str)) {
            if (str.length === 4) {
                var temp = "#";
                for (var i = 1; i < 4; i += 1) {
                    temp += str.slice(i, i + 1).concat(str.slice(i, i + 1));
                }
                str = temp;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + str.slice(i, i + 2)));
            }
            return "RGB(" + sColorChange.join(",") + ")";
        }
        else {
            return str;
        }
    };
    /**
     * @description 颜色RGB转16进制
     * @param {string} str RGB(0,0,0)
     * @returns {string} #000000
     */
    modules.prototype.RGBToHEX = function (str) {
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        var result = '';
        if (/^(rgb|RGB)/.test(str)) {
            var aColor = str.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
            var strHex = "#";
            for (var i = 0; i < aColor.length; i++) {
                var hex = Number(aColor[i]).toString(16);
                if (hex === "0") {
                    hex += hex;
                }
                strHex += hex;
            }
            if (strHex.length !== 7) {
                strHex = str;
            }
            result = strHex;
        }
        else if (reg.test(str)) {
            var aNum = str.replace(/#/, "").split("");
            if (aNum.length === 6) {
                return str;
            }
            else if (aNum.length === 3) {
                var numHex = "#";
                for (var i = 0; i < aNum.length; i += 1) {
                    numHex += (aNum[i] + aNum[i]);
                }
                result = numHex;
            }
        }
        else {
            result = str;
        }
        return result;
    };
    return modules;
}());
exports.OtherMod = modules;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZ1V0aWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VnVXRpbHMvLi9zcmMvbW9kdWxlL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9lZ1V0aWxzLy4vc3JjL21vZHVsZS9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvbnVtYmVyLnRzIiwid2VicGFjazovL2VnVXRpbHMvLi9zcmMvbW9kdWxlL2RhdGUudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvYXJyYXkudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvZG9tLnRzIiwid2VicGFjazovL2VnVXRpbHMvLi9zcmMvbW9kdWxlL2Jyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvb3RoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQSxrQ0FBa0MsRUFBRSxhQUFhLEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJlZy11dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBNb2R1bGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vZHVsZXMoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3lrZfnrKbkuLLnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnU3RyaW5nJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mlbDlrZfnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNOdW1iZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnTnVtYmVyJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3luIPlsJTnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNCb29sZWFuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ0Jvb2xlYW4nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrUZ1bmN0aW9u57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnRnVuY3Rpb24nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrW51bGznsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNOdWxsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ051bGwnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrXVuZGVmaW5lZOexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdVbmRlZmluZWQnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrW9iamVjdOexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc09iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrWFycmF557G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzQXJyYXkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnQXJyYXknO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrWRhdGXnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNEYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ0RhdGUnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrXJlZ0V4cOexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc1JlZ0V4cCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdSZWdFeHAnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrWVycm9y57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzRXJyb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnRXJyb3InO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrXN5bWJvbOexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc1N5bWJvbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdTeW1ib2wnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrXByb21pc2XnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNQcm9taXNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ1Byb21pc2UnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWrXNldOexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc1NldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdTZXQnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreaYr+WQpuS4uuepulxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09IFwiXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5a+56LGh5piv5ZCm5Li656m6XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzRW1wdHlPYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5piv5ZCm5piv5pW05pWwXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc051bWJlcih2YWx1ZSkgJiZcbiAgICAgICAgICAgIGlzRmluaXRlKHZhbHVlKSAmJlxuICAgICAgICAgICAgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xuICAgIH07XG4gICAgO1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbmmK/lsI/mlbBcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNGbG9hdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNJbnRlZ2VyKHZhbHVlKTtcbiAgICB9O1xuICAgIDtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5piv5ZCm5Li6aW9zXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNJb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1xcKGlbXjtdKzsoIFU7KT8gQ1BVLitNYWMgT1MgWC8pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreaYr+WQpuS4umFuZHJvaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0FuZHJvaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IC0xIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTGludXgnKSA+IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreaYr+WQpuS4unBj56uvXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNQQyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZsYWcgPSB0cnVlO1xuICAgICAgICB2YXIgdXNlckFnZW50SW5mbyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgIHZhciBBZ2VudHMgPSBbXCJBbmRyb2lkXCIsIFwiaVBob25lXCIsXG4gICAgICAgICAgICBcIlN5bWJpYW5PU1wiLCBcIldpbmRvd3MgUGhvbmVcIixcbiAgICAgICAgICAgIFwiaVBhZFwiLCBcImlQb2RcIlxuICAgICAgICBdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEFnZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHVzZXJBZ2VudEluZm8uaW5kZXhPZihBZ2VudHNbaV0pID4gMCkge1xuICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmxhZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbmlK/mjIF3ZWJwXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNXZWJwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFbXS5tYXAgJiYgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykudG9EYXRhVVJMKCdpbWFnZS93ZWJwJykuaW5kZXhPZignZGF0YTppbWFnZS93ZWJwJykgPT0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbkuLrpl7DlubRcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNMZWFwWWVhciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICUgNDAwID09IDApIHx8ICh2YWx1ZSAlIDQgPT0gMCAmJiB2YWx1ZSAlIDEwMCAhPSAwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKblkKvmnIlodG1s5qCH562+XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzSHRtbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gLzwoXCJbXlwiXSpcInwnW14nXSonfFteJ1wiPl0pKj4vLnRlc3QodmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreagoemqjOi6q+S7veivgeS/oeaBr1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0NhcmRJRCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZm9ybWF0ID0gL14oKFsxXVsxLTVdKXwoWzJdWzEtM10pfChbM11bMS03XSl8KFs0XVsxLTZdKXwoWzVdWzAtNF0pfChbNl1bMS01XSl8KFs3XVsxXSl8KFs4XVsxLTJdKSlcXGR7NH0oKFsxXVs5XVxcZHsyfSl8KFsyXVxcZHszfSkpKChbMF1bMS05XSl8KFsxXVswLTJdKSkoKFswXVsxLTldKXwoWzEtMl1bMC05XSl8KFszXVswLTFdKSlcXGR7M31bMC05eFhdJC87XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIC8v5Yid5q2l5qCh6aqMLeWPt+eggeinhOWImeagoemqjFxuICAgICAgICBpZiAoIWZvcm1hdC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8v5LqM57qn5qCh6aqMLeWMuuS9jeeggeagoemqjFxuICAgICAgICB2YXIgeWVhciA9IHZhbHVlLnN1YnN0cig2LCA0KSwgLy/ouqvku73or4HlubRcbiAgICAgICAgbW9udGggPSB2YWx1ZS5zdWJzdHIoMTAsIDIpLCAvL+i6q+S7veivgeaciFxuICAgICAgICBkYXkgPSB2YWx1ZS5zdWJzdHIoMTIsIDIpLCAvL+i6q+S7veivgeaXpVxuICAgICAgICB0aW1lID0gRGF0ZS5wYXJzZShtb250aCArICctJyArIGRheSArICctJyArIHllYXIpLCAvL+i6q+S7veivgeaXpeacn+aXtumXtOaIs1xuICAgICAgICBub3d0aW1lID0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpLCAvL+W9k+WJjeaXtumXtOaIs1xuICAgICAgICBub3dkYXkgPSAobmV3IERhdGUoeWVhciwgbW9udGgsIDApKS5nZXREYXRlKCk7IC8v6Lqr5Lu96K+B5b2T5pyI5aSp5pWwXG4gICAgICAgIGlmICh0aW1lID4gbm93dGltZSB8fCBkYXkgPiBub3dkYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL+S4iee6p+agoemqjC3moKHpqoznoIHliKTmlq0ge2h0dHBzOi8vamluZ3lhbi5iYWlkdS5jb20vYXJ0aWNsZS83ZjQxZWNlY2ZmOTQ0YTU5M2QwOTVjOGMuaHRtbH1cbiAgICAgICAgdmFyIGMgPSBbNywgOSwgMTAsIDUsIDgsIDQsIDIsIDEsIDYsIDMsIDcsIDksIDEwLCA1LCA4LCA0LCAyXTsgLy/ns7vmlbBcbiAgICAgICAgdmFyIGIgPSBbJzEnLCAnMCcsICdYJywgJzknLCAnOCcsICc3JywgJzYnLCAnNScsICc0JywgJzMnLCAnMiddOyAvL+agoemqjOeggeWvueeFp+ihqFxuICAgICAgICB2YXIgaWRBcnIgPSB2YWx1ZS5zcGxpdChcIlwiKTtcbiAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTc7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHBhcnNlSW50KGlkQXJyW2ldKSAqIGNbaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkQXJyWzE3XS50b1VwcGVyQ2FzZSgpICE9IGJbc3VtICUgMTFdLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlrZfnrKbkuLLnu7zlkIjmoKHpqoxcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIG51bS3mlbDlrZcgZW4t6Iux5paHIGNobi3kuK3mlocgbG93ZXIt5bCP5YaZIHVwcGVyLeWkp+WGmSBwaG9uZS3miYvmnLrlj7fnoIEgdGVsLeW6p+acuiB1cmwt572R5Z2AIGlwLUlQ5Zyw5Z2AIGRhdGUt5pel5pyf5qC85byPIGVtYWlsLemCrueusSBwb3N0YWwt6YKu5pS/57yW56CBXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNWZXJpZnkgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgICAgICAgIHJldHVybiAvXlswLTldJC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eW2EtekEtWl0rJC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdjaG4nOlxuICAgICAgICAgICAgICAgIHJldHVybiAvXltcXHU0RTAwLVxcdTlGQTVdKyQvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnbG93ZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiAvXlthLXpdKyQvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAndXBwZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiAvXltBLVpdKyQvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiAvXjFbM3w0fDV8N3w4XVswLTldezl9JC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICd0ZWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAvXjBcXGR7MiwzfS1cXGR7Nyw4fSgtXFxkezEsNn0pPyQvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gLyhodHRwfGZ0cHxodHRwcyk6XFwvXFwvW1xcd1xcLV9dKyhcXC5bXFx3XFwtX10rKSsoW1xcd1xcLVxcLixAP149JSY6L35cXCsjXSpbXFx3XFwtXFxAP149JSYvflxcKyNdKT8vLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnaXAnOlxuICAgICAgICAgICAgICAgIHJldHVybiAvKFswLTldezEsM31cXC57MX0pezN9WzAtOV17MSwzfS8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gL14oXFxkezR9KVxcLShcXGR7Mn0pXFwtKFxcZHsyfSkgKFxcZHsyfSkoPzpcXDpcXGR7Mn18OihcXGR7Mn0pOihcXGR7Mn0pKSQvLnRlc3QodmFsdWUpIHx8IC9eKFxcZHs0fSlcXC0oXFxkezJ9KVxcLShcXGR7Mn0pJC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eW1xcdy1dKyhcXC5bXFx3LV0rKSpAW1xcdy1dKyhcXC5bXFx3LV0rKSskLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ3Bvc3RhbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9bMS05XVxcZHs1fSg/IVxcZCkvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNb2R1bGVzO1xufSgpKTtcbmV4cG9ydHMuQmFzZU1vZCA9IE1vZHVsZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBiYXNlXzEgPSByZXF1aXJlKFwiLi9tb2R1bGUvYmFzZVwiKTtcbnZhciBzdHJpbmdfMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9zdHJpbmdcIik7XG52YXIgbnVtYmVyXzEgPSByZXF1aXJlKFwiLi9tb2R1bGUvbnVtYmVyXCIpO1xudmFyIGRhdGVfMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9kYXRlXCIpO1xudmFyIGFycmF5XzEgPSByZXF1aXJlKFwiLi9tb2R1bGUvYXJyYXlcIik7XG52YXIgZG9tXzEgPSByZXF1aXJlKFwiLi9tb2R1bGUvZG9tXCIpO1xudmFyIGJyb3dzZXJfMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9icm93c2VyXCIpO1xudmFyIG90aGVyXzEgPSByZXF1aXJlKFwiLi9tb2R1bGUvb3RoZXJcIik7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiDlhaXlj6PkuLvlh73mlbBcbiAqIEBjbGFzcyBDZW50ZXJcbiAqL1xudmFyIENlbnRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDZW50ZXIoKSB7XG4gICAgfVxuICAgIENlbnRlci5wcm90b3R5cGUuX2V4dGVuZCA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRhcmdldCkgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzb3VyY2UpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdGFyZ2V0W2tleV0gJiYgdGFyZ2V0W2tleV0udG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIiA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V4dGVuZCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pIDogdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgQ2VudGVyLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1vZHVsZXMgPSB7XG4gICAgICAgICAgICAnQmFzZU1vZCc6IGJhc2VfMS5CYXNlTW9kLFxuICAgICAgICAgICAgJ1N0cmluZ01vZCc6IHN0cmluZ18xLlN0cmluZ01vZCxcbiAgICAgICAgICAgICdOdW1iZXJNb2QnOiBudW1iZXJfMS5OdW1iZXJNb2QsXG4gICAgICAgICAgICAnRGF0ZU1vZCc6IGRhdGVfMS5EYXRlTW9kLFxuICAgICAgICAgICAgJ0FycmF5TW9kJzogYXJyYXlfMS5BcnJheU1vZCxcbiAgICAgICAgICAgICdEb21Nb2QnOiBkb21fMS5Eb21Nb2QsXG4gICAgICAgICAgICAnQnJvd3Nlck1vZCc6IGJyb3dzZXJfMS5Ccm93c2VyTW9kLFxuICAgICAgICAgICAgJ090aGVyTW9kJzogb3RoZXJfMS5PdGhlck1vZFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVzID0ge307XG4gICAgICAgIGZvciAodmFyIG0gaW4gbW9kdWxlcykge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5fZXh0ZW5kKHJlcywgbmV3IG1vZHVsZXNbbV0pO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5oZWxwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCfnm67liY3lhbHmnInlh73mlbDmlrnms5XkuKrmlbDvvJonICsgT2JqZWN0LmtleXMocmVzKS5sZW5ndGgpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKE9iamVjdC5rZXlzKHJlcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhyZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIHJldHVybiBDZW50ZXI7XG59KCkpO1xubW9kdWxlLmV4cG9ydHMgPSAobmV3IENlbnRlcigpKS5faW5pdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcbnZhciBtb2R1bGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhtb2R1bGVzLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIG1vZHVsZXMoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWOu+mZpOWtl+espuS4suepuuagvFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg5a2X56ym5LiyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgMS3miYDmnInnqbrmoLwgIDIt5YmN5ZCO56m65qC8ICAzLeWJjeepuuagvCA0LeWQjuepuuagvFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uIChzdHIsIHR5cGUpIHtcbiAgICAgICAgdHlwZSA9IHR5cGUgfHwgMTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKF5cXHMqKS9nLCBcIlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXHMqJCkvZywgXCJcIik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmm7/mjaLlrZfnrKbkuLLkuK3miYDmnInmjIflrprlrZfnrKZcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIOWGheWuuVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiZWZvcmVTdHIg6ZyA6KaB5pu/5o2i5a2X56ymXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFmdGVyU3RyIOabv+aNouaIkOeahOWtl+esplxuICAgICAqIEByZXR1cm5zIHsoc3RyaW5nKX1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5yZXBsYWNlQWxsID0gZnVuY3Rpb24gKHN0ciwgYmVmb3JlU3RyLCBhZnRlclN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChiZWZvcmVTdHIsICdnbScpLCBhZnRlclN0cik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pu/5o2i6KKr5oiq5Y+W5a2X56ym5LiyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciDlhoXlrrlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ViU3RhcnQg5oiq5Y+W5byA5aeL5L2N572uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN1YkVuZCDmiKrlj5bnu5PmnZ/kvY3nva5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmVmb3JlU3RyIOmcgOimgeabv+aNouWtl+esplxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhZnRlclN0ciDmm7/mjaLmiJDnmoTlrZfnrKZcbiAgICAgKiBAcmV0dXJucyB7KHN0cmluZyl9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUucmVwbGFjZVN1YlN0cmluZyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciB0ZW1wID0gb3B0aW9ucy5zdHIuc3Vic3RyaW5nKG9wdGlvbnMuc3ViU3RhcnQsIG9wdGlvbnMuc3ViRW5kKTtcbiAgICAgICAgcmV0dXJuIHRlbXAucmVwbGFjZShvcHRpb25zLmJlZm9yZVN0ciwgb3B0aW9ucy5hZnRlclN0cik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6L+H5rukaHRtbOaTjeS9nOesplxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZmlsdGVySHRtbENvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHZhciB0ZW1wID0ge1xuICAgICAgICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAgICAgICAnPic6ICcmZ3QnLFxuICAgICAgICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgICAgICAgJygnOiAnJiM0MDsnLFxuICAgICAgICAgICAgJyknOiAnJiM0MTsnLFxuICAgICAgICAgICAgJyAnOiAnJm5ic3A7JyxcbiAgICAgICAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgICAgICAgJ1xcJyc6IFwiJiMzOTtcIlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1s8PiZ8KCkgJ1wiXS9nLCBmdW5jdGlvbiAoY2hyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFtjaHJdO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDpppblrZfmr43lpKflhplcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5mcmlzdENoYXJVcHBlckNhc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIGlmICghX3N1cGVyLnByb3RvdHlwZS5pc0VtcHR5LmNhbGwodGhpcywgc3RyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eW2Etel0vLCBmdW5jdGlvbiAoY2hyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoci50b0xvY2FsZVVwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6aaW5a2X5q+N5bCP5YaZXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZnJpc3RDaGFyTG93ZXJDYXNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICBpZiAoIV9zdXBlci5wcm90b3R5cGUuaXNFbXB0eS5jYWxsKHRoaXMsIHN0cikpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXltBLVpdLywgZnVuY3Rpb24gKGNocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaHIudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWOi+e8qeebuOWQjOS4lOi/nue7reeahOWtl+esplxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IOaYr+WQpuWMuuWIhuWkp+Wwj+WGmVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGJiYnNzc3MgPT4gM2I0c1xuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmNvbXByZXNzUmVwZWF0ZWRTdHIgPSBmdW5jdGlvbiAoc3RyLCBpZ25vcmVDYXNlKSB7XG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCIoW2Etel0pXFxcXDErXCIsIGlnbm9yZUNhc2UgPyBcImdpXCIgOiBcImdcIik7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShyZWdleCwgZnVuY3Rpb24gKHN0ciwgZ3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIubGVuZ3RoICsgZ3JvdXA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOS4reaWh+i9rFVuaWNvZGXnoIFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS50b1VuaWNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIGlmICghX3N1cGVyLnByb3RvdHlwZS5pc0VtcHR5LmNhbGwodGhpcywgc3RyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVzY2FwZShzdHIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvJXUvZ2ksICdcXFxcdScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIFVuaWNvZGXnoIHovazkuK3mlodcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS50b0dCMjMxMiA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgaWYgKCFfc3VwZXIucHJvdG90eXBlLmlzRW1wdHkuY2FsbCh0aGlzLCBzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5lc2NhcGUoc3RyLnJlcGxhY2UoL1xcXFx1L2dpLCAnJXUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbW9kdWxlcztcbn0oYmFzZV8xLkJhc2VNb2QpKTtcbmV4cG9ydHMuU3RyaW5nTW9kID0gbW9kdWxlcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XG52YXIgbW9kdWxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMobW9kdWxlcywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBtb2R1bGVzKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDlrZfnsr7noa7nm7jliqBcbiAgICAgKiBAcGFyYW0geyp9IG51bTFcbiAgICAgKiBAcGFyYW0geyp9IG51bTJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLm51bUFkZCA9IGZ1bmN0aW9uIChudW0xLCBudW0yKSB7XG4gICAgICAgIHZhciB0ZW1wMSwgdGVtcDIsIHRpbWVzLCBhYnM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0ZW1wMSA9IG51bTEudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0ZW1wMSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRlbXAyID0gbnVtMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRlbXAyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBhYnMgPSBNYXRoLmFicyh0ZW1wMSAtIHRlbXAyKTtcbiAgICAgICAgdGltZXMgPSBNYXRoLnBvdygxMCwgTWF0aC5tYXgodGVtcDEsIHRlbXAyKSk7XG4gICAgICAgIGlmIChhYnMgPiAwKSB7XG4gICAgICAgICAgICB2YXIgY3RpbWVzID0gTWF0aC5wb3coMTAsIGFicyk7XG4gICAgICAgICAgICBpZiAodGVtcDEgPiB0ZW1wMikge1xuICAgICAgICAgICAgICAgIG51bTEgPSBOdW1iZXIobnVtMS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICAgICAgICAgICAgICBudW0yID0gTnVtYmVyKG51bTIudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSkgKiBjdGltZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBudW0xID0gTnVtYmVyKG51bTEudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSkgKiBjdGltZXM7XG4gICAgICAgICAgICAgICAgbnVtMiA9IE51bWJlcihudW0yLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbnVtMSA9IE51bWJlcihudW0xLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICAgICAgbnVtMiA9IE51bWJlcihudW0yLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobnVtMSArIG51bTIpIC8gdGltZXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pWw5a2X57K+56Gu55u45YePXG4gICAgICogQHBhcmFtIHsqfSBudW0xXG4gICAgICogQHBhcmFtIHsqfSBudW0yXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5udW1TdWIgPSBmdW5jdGlvbiAobnVtMSwgbnVtMikge1xuICAgICAgICB2YXIgdGVtcDEsIHRlbXAyLCB0aW1lcywgbjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRlbXAxID0gbnVtMS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRlbXAxID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGVtcDIgPSBudW0yLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGVtcDIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVzID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KHRlbXAxLCB0ZW1wMikpO1xuICAgICAgICBuID0gdGVtcDEgPj0gdGVtcDIgPyB0ZW1wMSA6IHRlbXAyO1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoTnVtYmVyKCgobnVtMiAqIHRpbWVzIC0gbnVtMSAqIHRpbWVzKSAvIHRpbWVzKS50b0ZpeGVkKG4pKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pWw5a2X57K+56Gu55u45LmYXG4gICAgICogQHBhcmFtIHsqfSBudW0xXG4gICAgICogQHBhcmFtIHsqfSBudW0yXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5udW1NdWwgPSBmdW5jdGlvbiAobnVtMSwgbnVtMikge1xuICAgICAgICB2YXIgbSA9IDAsIHRlbXAxID0gbnVtMS50b1N0cmluZygpLCB0ZW1wMiA9IG51bTIudG9TdHJpbmcoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG0gKz0gdGVtcDEuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtICs9IHRlbXAyLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICByZXR1cm4gTnVtYmVyKHRlbXAxLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSAqIE51bWJlcih0ZW1wMi5yZXBsYWNlKFwiLlwiLCBcIlwiKSkgLyBNYXRoLnBvdygxMCwgbSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pWw5a2X57K+56Gu55u46ZmkXG4gICAgICogQHBhcmFtIHsqfSBudW0xXG4gICAgICogQHBhcmFtIHsqfSBudW0yXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5udW1EaXZpID0gZnVuY3Rpb24gKG51bTEsIG51bTIpIHtcbiAgICAgICAgdmFyIHRlbXAxID0gMCwgdGVtcDIgPSAwLCByMSwgcjI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0ZW1wMSA9IG51bTEudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRlbXAyID0gbnVtMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICByMSA9IE51bWJlcihudW0xLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICByMiA9IE51bWJlcihudW0yLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICByZXR1cm4gKHIxIC8gcjIpICogTWF0aC5wb3coMTAsIHRlbXAyIC0gdGVtcDEpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOeUn+aIkOaMh+WumuS9jeaVsOeahOmaj+acuuaVsFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwbGFjZVJhbmdlIOS9jeaVsFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXR1cm5UeXBlXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRQbGFjZVJhbmRvbU51bSA9IGZ1bmN0aW9uIChwbGFjZVJhbmdlLCByZXR1cm5UeXBlKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5UeXBlID09IFwiZmxvYXRcIiA/IE1hdGgucmFuZG9tKCkgKiBwbGFjZVJhbmdlIDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBwbGFjZVJhbmdlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDnlJ/miJDmjIflrprojIPlm7TnmoTpmo/mnLrmlbBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluIOacgOWwj+WAvFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXgg5pyA5aSn5YC8XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRSYW5nZVJhbmRvbU51bSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKChtYXggKyAxKSAtIG1pbikpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOagvOW8j+WMluaIkOi0p+W4geagvOW8j1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0Rm9ybWF0Q3VycmVuY3kgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykucmVwbGFjZSgvKFxcZHszfSg/PVxcZCkoPyFcXGQrXFwufCQpKS9nLCAnJDEsJykuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDovazmjaLmiJDlpKflhpnotKfluIHmoLzlvI9cbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIOi0p+W4gemHkeminVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuY2hhbmdlVG9DaG5DdXJyZW5jeSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgLy/ov4fmu6TkvKDlhaXlgLznmoTml6DnlKjlrZfnrKZcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8sL2csIFwiXCIpLnJlcGxhY2UoLyAvZywgXCJcIikucmVwbGFjZSgv77+lL2csIFwiXCIpO1xuICAgICAgICAvL+mqjOivgei+k+WFpeeahOWtl+espuaYr+WQpuS4uuaVsOWtl1xuICAgICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIC8v5a2X56ym5aSE55CG5a6M5q+V5ZCO5byA5aeL6L2s5o2iXG4gICAgICAgIHZhciBwYXJ0ID0gU3RyaW5nKHZhbHVlKS5zcGxpdChcIi5cIik7XG4gICAgICAgIHZhciBuZXdjaGFyID0gXCJcIjtcbiAgICAgICAgLy/lsI/mlbDngrnliY3ov5vooYzovazljJZcbiAgICAgICAgZm9yICh2YXIgaSA9IHBhcnRbMF0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmIChwYXJ0WzBdLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGVtcGNoYXIgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIG9sZGNoYXIgPSBwYXJ0WzBdLmNoYXJBdChpKTtcbiAgICAgICAgICAgIHN3aXRjaCAob2xkY2hhcikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLpm7ZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5aO5XCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIui0sFwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLlj4FcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi6IKGXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuS8jVwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLpmYZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5p+SXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjhcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuaNjFwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCI5XCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLnjpZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAocGFydFswXS5sZW5ndGggLSBpIC0gMSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5YWDXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZGNoYXIgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuaLvlwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRjaGFyICE9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLkvbBcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkY2hhciAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5LufXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5LiHXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZGNoYXIgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuaLvlwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRjaGFyICE9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLkvbBcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkY2hhciAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5LufXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5Lq/XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5ou+XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Y2hhciA9IHRlbXBjaGFyICsgbmV3Y2hhcjtcbiAgICAgICAgfVxuICAgICAgICAvL+Wwj+aVsOeCueS5i+WQjui/m+ihjOi9rOWMllxuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihcIi5cIikgIT0gLTEpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0WzFdLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAvL+S/neeVmeS4pOS9jeWwj+aVsFxuICAgICAgICAgICAgICAgIHBhcnRbMV0gPSBwYXJ0WzFdLnN1YnN0cigwLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydFsxXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wY2hhciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdmFyIHBlcmNoYXIgPSBwYXJ0WzFdLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBlcmNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLpm7ZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5aO5XCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIui0sFwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLlj4FcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi6IKGXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuS8jVwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLpmYZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5p+SXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuaNjFwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLnjpZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09IDApXG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuinklwiO1xuICAgICAgICAgICAgICAgIGlmIChpID09IDEpXG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuWIhlwiO1xuICAgICAgICAgICAgICAgIG5ld2NoYXIgPSBuZXdjaGFyICsgdGVtcGNoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/mm7/mjaLmiYDmnInml6DnlKjmsYnlrZdcbiAgICAgICAgd2hpbGUgKG5ld2NoYXIuc2VhcmNoKFwi6Zu26Zu2XCIpICE9IC0xKSB7XG4gICAgICAgICAgICBuZXdjaGFyID0gbmV3Y2hhci5yZXBsYWNlKFwi6Zu26Zu2XCIsIFwi6Zu2XCIpLnJlcGxhY2UoXCLpm7bkur9cIiwgXCLkur9cIikucmVwbGFjZShcIuS6v+S4h1wiLCBcIuS6v1wiKS5yZXBsYWNlKFwi6Zu25LiHXCIsIFwi5LiHXCIpLnJlcGxhY2UoXCLpm7blhYNcIiwgXCLlhYNcIikucmVwbGFjZShcIumbtuinklwiLCBcIlwiKS5yZXBsYWNlKFwi6Zu25YiGXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdjaGFyLmNoYXJBdChuZXdjaGFyLmxlbmd0aCAtIDEpID09IFwi5YWDXCIpIHtcbiAgICAgICAgICAgIG5ld2NoYXIgPSBuZXdjaGFyICsgXCLmlbRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3Y2hhcjtcbiAgICB9O1xuICAgIHJldHVybiBtb2R1bGVzO1xufShiYXNlXzEuQmFzZU1vZCkpO1xuZXhwb3J0cy5OdW1iZXJNb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcbnZhciBtb2R1bGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhtb2R1bGVzLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIG1vZHVsZXMoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOagvOW8j+WMluaXpeacn1xuICAgICAqIEBwYXJhbSB7YW55fSBkYXRlIOaXtumXtOaIs+aIluaXpeacn1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOm7mOiupO+8mnl5eXktTU0tZGQgaGg6bW06c3NcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmZvcm1hdERhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgdHlwZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoKGRhdGUgKyAnJykubGVuZ3RoID09PSAxMCkge1xuICAgICAgICAgICAgZGF0ZSA9IE51bWJlcihkYXRlKSAqIDEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZvcm1hdCA9IHR5cGUgfHwgJ3l5eXktTU0tZGQgaGg6bW06c3MnLCB0ZW1wZGF0ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGVtcGRhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGVtcGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZm9ybWF0T2JqID0ge1xuICAgICAgICAgICAgeXl5eTogdGVtcGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIE1NOiB0ZW1wZGF0ZS5nZXRNb250aCgpICsgMSxcbiAgICAgICAgICAgIGRkOiB0ZW1wZGF0ZS5nZXREYXRlKCksXG4gICAgICAgICAgICBoaDogdGVtcGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgIG1tOiB0ZW1wZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICAgICAgICBzczogdGVtcGRhdGUuZ2V0U2Vjb25kcygpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvKHl5eXl8TU18ZGR8aGh8bW18c3MpKy9nLCBmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGZvcm1hdE9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwICYmIHZhbHVlIDwgMTApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICcwJyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIHx8IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOagvOW8j+WMluaXtuWIhuenklxuICAgICAqIEBwYXJhbSB7YW55fSBkYXRlIOaXtumXtOaIs1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZm9ybWF0VGltZSA9IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgIHZhciB0ZW1wID0gJyc7XG4gICAgICAgIGlmICh0aW1lID49IDM2MDApIHtcbiAgICAgICAgICAgIHRlbXAgPSBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKSArICflsI/ml7YnICsgTWF0aC5mbG9vcih0aW1lICUgMzYwMCAvIDYwKSArICfliIYnICsgdGltZSAlIDYwICsgJ+enkic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGltZSA+PSA2MCkge1xuICAgICAgICAgICAgdGVtcCA9IE1hdGguZmxvb3IodGltZSAvIDYwKSArICfliIYnICsgdGltZSAlIDYwICsgJ+enkic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wID0gdGltZSAlIDYwICsgJ+enkic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5Lik5Liq5pel5pyf6Ze05beu5YC8XG4gICAgICogQHBhcmFtIHsqfSBzdGFydERhdGVcbiAgICAgKiBAcGFyYW0geyp9IGVuZERhdGVcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldERheU1pbnVzID0gZnVuY3Rpb24gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoTnVtYmVyKG5ldyBEYXRlKGVuZERhdGUpKSAtIE51bWJlcihuZXcgRGF0ZShzdGFydERhdGUpKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluafkOW5tOacieWkmuWwkeWkqVxuICAgICAqIEBwYXJhbSB7Kn0geWVhciAxOTk5XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRZZWFyRGF5cyA9IGZ1bmN0aW9uICh5ZWFyKSB7XG4gICAgICAgIHZhciBkYXlzID0gMzY1O1xuICAgICAgICB0aGlzLmdldE1vbnRoRGF5cyh5ZWFyICsgJy0yJykgPT0gMjkgPyBkYXlzID0gMzY2IDogZGF5cztcbiAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5p+Q5bm05p+Q5pyI5pyJ5aSa5bCR5aSpXG4gICAgICogQHBhcmFtIHsqfSBkYXRlIDE5OTktMVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0TW9udGhEYXlzID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgdmFyIHllYXIgPSB0ZW1wLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBtb250aCA9IHRlbXAuZ2V0TW9udGgoKTtcbiAgICAgICAgcmV0dXJuIFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW21vbnRoXSB8fCAoX3N1cGVyLnByb3RvdHlwZS5pc0xlYXBZZWFyLmNhbGwodGhpcywgeWVhcikgPyAyOSA6IDI4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5bmn5DlubTmn5DlpKnmmK/nrKzlh6DlkahcbiAgICAgKiBAcGFyYW0geyp9IGRhdGUgMTk5OS0xLTFcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldFdoaWNoV2VlayA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciB0ZW1wID0gbmV3IERhdGUoZGF0ZSksIHllYXIgPSB0ZW1wLmdldEZ1bGxZZWFyKCksIG1vbnRoID0gdGVtcC5nZXRNb250aCgpLCBkYXlzID0gdGVtcC5nZXREYXRlKCk7XG4gICAgICAgIHZhciB5ZWFyRmlyc3REYXkgPSBuZXcgRGF0ZSh5ZWFyLCAwLCAxKS5nZXREYXkoKSB8fCA3O1xuICAgICAgICB2YXIgd2VlayA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgbW9udGg7IG0rKykge1xuICAgICAgICAgICAgZGF5cyArPSB0aGlzLmdldE1vbnRoRGF5cyh5ZWFyICsgJy0nICsgbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHllYXJGaXJzdERheSA9PSAxKSB7XG4gICAgICAgICAgICB3ZWVrID0gTWF0aC5jZWlsKGRheXMgLyB5ZWFyRmlyc3REYXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF5cyAtPSAoNyAtIHllYXJGaXJzdERheSArIDEpO1xuICAgICAgICAgICAgd2VlayA9IE1hdGguY2VpbChkYXlzIC8gNykgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3ZWVrO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluafkOaXpeacn+WJjeWQjuiLpeW5suWkqeaVsOeahOaXpeacn1xuICAgICAqIEBwYXJhbSB7Kn0gZGF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW51c0RheXNcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldERhdGVNaW51c0RheXNEYXRlID0gZnVuY3Rpb24gKGRhdGUsIG1pbnVzRGF5cykge1xuICAgICAgICB2YXIgdGVtcCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICB0ZW1wLnNldERhdGUoTnVtYmVyKG5ldyBEYXRlKGRhdGUpLmdldERhdGUoKSkgKyBtaW51c0RheXMpOyAvL+iOt+WPlkFkZERheUNvdW505aSp5ZCO55qE5pel5pyfXG4gICAgICAgIHZhciB5ID0gdGVtcC5nZXRGdWxsWWVhcigpO1xuICAgICAgICB2YXIgbSA9IHRlbXAuZ2V0TW9udGgoKSArIDE7IC8v6I635Y+W5b2T5YmN5pyI5Lu955qE5pel5pyfXG4gICAgICAgIHZhciBkID0gdGVtcC5nZXREYXRlKCk7XG4gICAgICAgIHJldHVybiB5ICsgXCItXCIgKyBtICsgXCItXCIgKyBkO1xuICAgIH07XG4gICAgcmV0dXJuIG1vZHVsZXM7XG59KGJhc2VfMS5CYXNlTW9kKSk7XG5leHBvcnRzLkRhdGVNb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG1vZHVsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gbW9kdWxlcygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaVsOe7hOWFg+e0oOWOu+mHjVxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBhbnkgPn0gYXJyXG4gICAgICogQHJldHVybnMge0FycmF5IDwgYW55ID59XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyVW5pcXVlID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRlbXAuaW5kZXhPZihhcnJbaV0pID09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGVtcC5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pWw57uE5YWD57Sg5o6S5bqPXG4gICAgICogQHBhcmFtIHsqfSBhcnIg5pWw57uEXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgMS3pmY3luo8gIDIt5Y2H5bqPICAzLemaj+aculxuICAgICAqIEByZXR1cm5zIHtBcnJheSA8IGFueSA+fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyclNvcnQgPSBmdW5jdGlvbiAoYXJyLCB0eXBlKSB7XG4gICAgICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYiAtIGE7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKDpmaTmjIflrprnmoTmlbDnu4TlhYPntKBcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgYW55ID59IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gZWxlXG4gICAgICogQHJldHVybnMge0FycmF5IDwgYW55ID59XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyUmVtb3ZlID0gZnVuY3Rpb24gKGFyciwgZWxlKSB7XG4gICAgICAgIHZhciBpID0gYXJyLmluZGV4T2YoZWxlKTtcbiAgICAgICAgaSA+IC0xID8gYXJyLnNwbGljZShpLCAxKSA6IG51bGw7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635b6X5Lik5Liq5pWw57uE55qE5bm26ZuGXG4gICAgICogQHBhcmFtIHtBcnJheSA8IGFueSA+fSBhXG4gICAgICogQHBhcmFtIHtBcnJheSA8IGFueSA+fSBiXG4gICAgICogQHJldHVybnMge0FycmF5IDwgYW55ID59XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyVW5pb24gPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJVbmlxdWUoYS5jb25jYXQoYikpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+W+l+S4pOS4quaVsOe7hOeahOS6pOmbhlxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBhbnkgPn0gYVxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBhbnkgPn0gYlxuICAgICAqIEByZXR1cm5zIHtBcnJheSA8IGFueSA+fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyckludGVyc2VjdCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmZpbHRlcihmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXhPZih2KSAhPT0gLTE7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaVsOe7hOWFg+e0oOacgOWkp+WAvO+8iG51bWJlcu+8iVxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBudW1iZXIgPn0gYXJyXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJNYXggPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBhcnIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaVsOe7hOWFg+e0oOacgOWwj+WAvO+8iG51bWJlcu+8iVxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBudW1iZXIgPn0gYXJyXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJNaW4gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCBhcnIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaVsOe7hOWFg+e0oOaxguWSjO+8iG51bWJlcu+8iVxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBudW1iZXIgPn0gYXJyXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJTdW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChwcmUsIGN1cikge1xuICAgICAgICAgICAgcmV0dXJuIHByZSArIGN1cjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pWw57uE5YWD57Sg5bmz5Z2H5YC877yIbnVtYmVy77yJXG4gICAgICogQHBhcmFtIHtBcnJheSA8IG51bWJlciA+fSBhcnJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyckF2ZXJhZ2UgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyclN1bShhcnIpIC8gYXJyLmxlbmd0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmr5TovoPkuKTkuKrmlbDnu4TmmK/lkKbnm7jnrYlcbiAgICAgKiBAcGFyYW0geyp9IGFcbiAgICAgKiBAcGFyYW0geyp9IGJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJFcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhID09PSBiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5ZCI5bm25Lik5Liq5a+56LGhXG4gICAgICogQHBhcmFtIHsqfSBhIOWvueixoVxuICAgICAqIEBwYXJhbSB7Kn0gYiDlr7nosaFcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLm1lcmdlSlNPTiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciB0ZW1wID0ge307XG4gICAgICAgIGlmIChhICYmIGIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gYikge1xuICAgICAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVtcCA9IGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5rex5ou36LSd5pWw57uE5oiW5a+56LGhXG4gICAgICogQHBhcmFtIHsob2JqZWN0IHwgQXJyYXkgPCBhbnkgPil9IG9iaiDmlbDnu4TmiJblr7nosaFcbiAgICAgKiBAcmV0dXJucyB7KG9iamVjdCB8IEFycmF5IDwgYW55ID4pfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmRlZXBDb3B5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5blr7nosaHplb/luqZcbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgICAgW2tleTogc3RyaW5nXTogYW55XG4gICAgICogICB9fSBvYmpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldE9iamVjdExlbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xuICAgIH07XG4gICAgcmV0dXJuIG1vZHVsZXM7XG59KCkpO1xuZXhwb3J0cy5BcnJheU1vZCA9IG1vZHVsZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgbW9kdWxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBtb2R1bGVzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5piv5ZCm5pyJ5oyH5a6aY2xhc3NcbiAgICAgKiBAcGFyYW0geyp9IGVsZVxuICAgICAqIEBwYXJhbSB7Kn0gY2xzXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZWxlLCBjbHMpIHtcbiAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgY2xzICsgJyhcXFxcc3wkKScpKS50ZXN0KGVsZS5jbGFzc05hbWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOa3u+WKoGNsYXNzXG4gICAgICogQHBhcmFtIHsqfSBlbGVcbiAgICAgKiBAcGFyYW0geyp9IGNsc1xuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24gKGVsZSwgY2xzKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNDbGFzcyhlbGUsIGNscykpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc05hbWUgKz0gJyAnICsgY2xzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yig6ZmkY2xhc3NcbiAgICAgKiBAcGFyYW0geyp9IGVsZVxuICAgICAqIEBwYXJhbSB7Kn0gY2xzXG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWxlLCBjbHMpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2xhc3MoZWxlLCBjbHMpKSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NOYW1lID0gZWxlLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbHMgKyAnKFxcXFxzfCQpJyksICcgJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBodG1s6L2s5oiQ5a2X56ym5LiyXG4gICAgICogQHBhcmFtIHsqfSBodG1sRE9NIGh0bWxET01cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmh0bWxUb1N0aXJuZyA9IGZ1bmN0aW9uIChodG1sRE9NKSB7XG4gICAgICAgIHZhciB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGVtcC5hcHBlbmRDaGlsZChodG1sRE9NKTtcbiAgICAgICAgcmV0dXJuIHRlbXAuaW5uZXJIVE1MO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWtl+espuS4sui9rGh0bWxcbiAgICAgKiBAcGFyYW0geyp9IGh0bWxTdHJpbmcgaHRtbOWtl+espuS4slxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnN0cmluZ1RvSHRtbCA9IGZ1bmN0aW9uIChodG1sU3RyaW5nKSB7XG4gICAgICAgIHZhciB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGVtcC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgICAgICByZXR1cm4gdGVtcC5jaGlsZHJlblswXTtcbiAgICB9O1xuICAgIHJldHVybiBtb2R1bGVzO1xufSgpKTtcbmV4cG9ydHMuRG9tTW9kID0gbW9kdWxlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBtb2R1bGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIG1vZHVsZXMoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5blvZPliY3mtY/op4jlmajniYjmnKxcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRCcm93c2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3lzID0ge30sIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLCBzO1xuICAgICAgICAocyA9IHVhLm1hdGNoKC9ydjooW1xcZC5dKylcXCkgbGlrZSBnZWNrby8pKSA/IHN5cy5pZSA9IHNbMV0gOlxuICAgICAgICAgICAgKHMgPSB1YS5tYXRjaCgvbXNpZSAoW1xcZFxcLl0rKS8pKSA/IHN5cy5pZSA9IHNbMV0gOlxuICAgICAgICAgICAgICAgIChzID0gdWEubWF0Y2goL2VkZ2VcXC8oW1xcZFxcLl0rKS8pKSA/IHN5cy5lZGdlID0gc1sxXSA6XG4gICAgICAgICAgICAgICAgICAgIChzID0gdWEubWF0Y2goL2ZpcmVmb3hcXC8oW1xcZFxcLl0rKS8pKSA/IHN5cy5maXJlZm94ID0gc1sxXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAocyA9IHVhLm1hdGNoKC8oPzpvcGVyYXxvcHIpLihbXFxkXFwuXSspLykpID8gc3lzLm9wZXJhID0gc1sxXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHMgPSB1YS5tYXRjaCgvY2hyb21lXFwvKFtcXGRcXC5dKykvKSkgPyBzeXMuY2hyb21lID0gc1sxXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzID0gdWEubWF0Y2goL3ZlcnNpb25cXC8oW1xcZFxcLl0rKS4qc2FmYXJpLykpID8gc3lzLnNhZmFyaSA9IHNbMV0gOiAwO1xuICAgICAgICBpZiAoc3lzLmllKVxuICAgICAgICAgICAgcmV0dXJuICgnSUU6ICcgKyBzeXMuaWUpO1xuICAgICAgICBpZiAoc3lzLmVkZ2UpXG4gICAgICAgICAgICByZXR1cm4gKCdFREdFOiAnICsgc3lzLmVkZ2UpO1xuICAgICAgICBpZiAoc3lzLmZpcmVmb3gpXG4gICAgICAgICAgICByZXR1cm4gKCdGaXJlZm94OiAnICsgc3lzLmZpcmVmb3gpO1xuICAgICAgICBpZiAoc3lzLmNocm9tZSlcbiAgICAgICAgICAgIHJldHVybiAoJ0Nocm9tZTogJyArIHN5cy5jaHJvbWUpO1xuICAgICAgICBpZiAoc3lzLm9wZXJhKVxuICAgICAgICAgICAgcmV0dXJuICgnT3BlcmE6ICcgKyBzeXMub3BlcmEpO1xuICAgICAgICBpZiAoc3lzLnNhZmFyaSlcbiAgICAgICAgICAgIHJldHVybiAoJ1NhZmFyaTogJyArIHN5cy5zYWZhcmkpO1xuICAgICAgICByZXR1cm4gJ1Vua29ud24nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluW9k+WJjeaTjeS9nOezu+e7n+exu+Wei1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldE9TID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXNlckFnZW50ID0gJ25hdmlnYXRvcicgaW4gd2luZG93ICYmICd1c2VyQWdlbnQnIGluIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkgfHwgJyc7XG4gICAgICAgIHZhciB2ZW5kb3IgPSAnbmF2aWdhdG9yJyBpbiB3aW5kb3cgJiYgJ3ZlbmRvcicgaW4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci52ZW5kb3IudG9Mb3dlckNhc2UoKSB8fCAnJztcbiAgICAgICAgdmFyIGFwcFZlcnNpb24gPSAnbmF2aWdhdG9yJyBpbiB3aW5kb3cgJiYgJ2FwcFZlcnNpb24nIGluIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpIHx8ICcnO1xuICAgICAgICBpZiAoL21hYy9pLnRlc3QoYXBwVmVyc2lvbikpXG4gICAgICAgICAgICByZXR1cm4gJ01hY09TWCc7XG4gICAgICAgIGlmICgvd2luL2kudGVzdChhcHBWZXJzaW9uKSlcbiAgICAgICAgICAgIHJldHVybiAnd2luZG93cyc7XG4gICAgICAgIGlmICgvbGludXgvaS50ZXN0KGFwcFZlcnNpb24pKVxuICAgICAgICAgICAgcmV0dXJuICdsaW51eCc7XG4gICAgICAgIGlmICgvaXBob25lL2kudGVzdCh1c2VyQWdlbnQpIHx8IC9pcGFkL2kudGVzdCh1c2VyQWdlbnQpIHx8IC9pcG9kL2kudGVzdCh1c2VyQWdlbnQpKVxuICAgICAgICAgICAgJ2lvcyc7XG4gICAgICAgIGlmICgvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSlcbiAgICAgICAgICAgIHJldHVybiAnYW5kcm9pZCc7XG4gICAgICAgIGlmICgvd2luL2kudGVzdChhcHBWZXJzaW9uKSAmJiAvcGhvbmUvaS50ZXN0KHVzZXJBZ2VudCkpXG4gICAgICAgICAgICByZXR1cm4gJ3dpbmRvd3NQaG9uZSc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+WdXJs5Lit5oyH5a6a5Y+C5pWw5YC8XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtIOWPguaVsOWQjeensFxuICAgICAqIEByZXR1cm5zIHsoc3RyaW5nIHwgbnVsbCl9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0UXVlcnlQYXJhbSA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICB2YXIgciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpLm1hdGNoKG5ldyBSZWdFeHAoXCIoXnwmKVwiICsgcGFyYW0gKyBcIj0oW14mXSopKCZ8JClcIikpOyAvL3NlYXJjaCzmn6Xor6LvvJ/lkI7pnaLnmoTlj4LmlbDvvIzlubbljLnphY3mraPliJlcbiAgICAgICAgaWYgKHIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gdXJs5Zyw5Z2A5Y+C5pWw5bqP5YiX5YyWXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnBhcnNlUXVlcnlQYXJhbSA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdXJsID0gdXJsID09IG51bGwgPyB3aW5kb3cubG9jYXRpb24uaHJlZiA6IHVybDtcbiAgICAgICAgdmFyIHNlYXJjaCA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKCc/JykgKyAxKTtcbiAgICAgICAgaWYgKCFzZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSgne1wiJyArIGRlY29kZVVSSUNvbXBvbmVudChzZWFyY2gpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC8mL2csICdcIixcIicpLnJlcGxhY2UoLz0vZywgJ1wiOlwiJykgKyAnXCJ9Jyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gdXJs5Y+C5pWw5a+56LGh5Y+N5bqP5YiX5YyWXG4gICAgICogQHBhcmFtIHt7W2tleTpzdHJpbmddOmFueX19IHBhcmFtT2JqIHthOjEsYjoxfVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnN0cmluZ2Z5UXVlcnlQYXJhbSA9IGZ1bmN0aW9uIChwYXJhbU9iaikge1xuICAgICAgICBpZiAoIXBhcmFtT2JqKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1PYmopIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcmFtT2JqW2tleV07XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkgKyAnWycgKyBpICsgJ10nKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVtpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXAucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbU9ialtrZXldKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXAuam9pbignJicpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiuvue9rmNvb2tpZVxuICAgICAqIEBwYXJhbSB7Kn0ga2V5XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Kn0gZGF5cyDov4fmnJ/ml7bpl7Tplb/luqZcbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5zZXRDb29raWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgZGF5cykge1xuICAgICAgICB2YXIgRGF5cyA9IGRheXMgfHwgMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICB2YXIgZXhwID0gbmV3IERhdGUoKTtcbiAgICAgICAgZXhwLnNldFRpbWUoZXhwLmdldFRpbWUoKSArIERheXMpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj1cIiArIGVzY2FwZSh2YWx1ZSkgKyBcIjtleHBpcmVzPVwiICsgZXhwLnRvVVRDU3RyaW5nKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5oyH5a6aY29va2llXG4gICAgICogQHBhcmFtIHsqfSBrZXlcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRDb29raWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBhcnIgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcIihefCApXCIgKyBrZXkgKyBcIj0oW147XSopKDt8JClcIikpO1xuICAgICAgICBpZiAoYXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAoYXJyWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yig6Zmk5oyH5a6aY29va2llXG4gICAgICogQHBhcmFtIHsqfSBrZXlcbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5kZWxDb29raWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBleHAuc2V0VGltZShleHAuZ2V0VGltZSgpIC0gMSk7XG4gICAgICAgIHZhciB0bXBWYWx1ZSA9IHRoaXMuZ2V0Q29va2llKGtleSk7XG4gICAgICAgIGlmICh0bXBWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj1cIiArIHRtcFZhbHVlICsgXCI7ZXhwaXJlcz1cIiArIGV4cC50b1VUQ1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W55u45a+56Lev5b6E55qE57ud5a+56Lev5b6EXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCDnm7jlr7not6/lvoRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSDnu53lr7not6/lvoRcbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5yZWxhdGl2ZVBhdGhUb0Z1bGxQYXRoID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgIHVybCA9IGltZy5zcmM7XG4gICAgICAgIGltZy5zcmMgPSAnJztcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9O1xuICAgIDtcbiAgICByZXR1cm4gbW9kdWxlcztcbn0oKSk7XG5leHBvcnRzLkJyb3dzZXJNb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG1vZHVsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gbW9kdWxlcygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOmaj+acuueUn+aIkOiJsuWAvFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0UmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnIycgK1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoY29sb3IgKz0gJzAxMjM0NTY3ODlhYmNkZWYnW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV0pICYmXG4gICAgICAgICAgICAgICAgICAgIChjb2xvci5sZW5ndGggPT0gNikgPyBjb2xvciA6IGFyZ3VtZW50cy5jYWxsZWUoY29sb3IpO1xuICAgICAgICAgICAgfSkoJycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOagoemqjOWvhueggeW8uuW6pijpgJrnlKgpXG4gICAgICogQHBhcmFtIHsqfSBzdHIg5a2X56ym5LiyXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5jaGVja1B3ZCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgdmFyIGxldmVsID0gMDtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgICByZXR1cm4gbGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9bMC05XS8udGVzdChzdHIpKSB7XG4gICAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvW2Etel0vLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgbGV2ZWwrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1tBLVpdLy50ZXN0KHN0cikpIHtcbiAgICAgICAgICAgIGxldmVsKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9bXFwufC18X10vLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgbGV2ZWwrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV2ZWw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6aKc6ImyMTbov5vliLbovaxSR0JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyICMwMDAwMDBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSR0IoMCwwLDApXG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuSEVYVG9SR0IgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHZhciByZWcgPSAvXiMoWzAtOWEtZkEtZl17M318WzAtOWEtZkEtZl17Nn0pJC87XG4gICAgICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoc3RyICYmIHJlZy50ZXN0KHN0cikpIHtcbiAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBcIiNcIjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wICs9IHN0ci5zbGljZShpLCBpICsgMSkuY29uY2F0KHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHIgPSB0ZW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy/lpITnkIblha3kvY3nmoTpopzoibLlgLxcbiAgICAgICAgICAgIHZhciBzQ29sb3JDaGFuZ2UgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNzsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgc0NvbG9yQ2hhbmdlLnB1c2gocGFyc2VJbnQoXCIweFwiICsgc3RyLnNsaWNlKGksIGkgKyAyKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiUkdCKFwiICsgc0NvbG9yQ2hhbmdlLmpvaW4oXCIsXCIpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6aKc6ImyUkdC6L2sMTbov5vliLZcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFJHQigwLDAsMClcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAjMDAwMDAwXG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuUkdCVG9IRVggPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHZhciByZWcgPSAvXiMoWzAtOWEtZkEtZl17M318WzAtOWEtZkEtZl17Nn0pJC87XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgaWYgKC9eKHJnYnxSR0IpLy50ZXN0KHN0cikpIHtcbiAgICAgICAgICAgIHZhciBhQ29sb3IgPSBzdHIucmVwbGFjZSgvKD86XFwofFxcKXxyZ2J8UkdCKSovZywgXCJcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgdmFyIHN0ckhleCA9IFwiI1wiO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhQ29sb3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaGV4ID0gTnVtYmVyKGFDb2xvcltpXSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgICAgIGlmIChoZXggPT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGhleCArPSBoZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0ckhleCArPSBoZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RySGV4Lmxlbmd0aCAhPT0gNykge1xuICAgICAgICAgICAgICAgIHN0ckhleCA9IHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHN0ckhleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWcudGVzdChzdHIpKSB7XG4gICAgICAgICAgICB2YXIgYU51bSA9IHN0ci5yZXBsYWNlKC8jLywgXCJcIikuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICBpZiAoYU51bS5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYU51bS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbnVtSGV4ID0gXCIjXCI7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhTnVtLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bUhleCArPSAoYU51bVtpXSArIGFOdW1baV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudW1IZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiBtb2R1bGVzO1xufSgpKTtcbmV4cG9ydHMuT3RoZXJNb2QgPSBtb2R1bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==