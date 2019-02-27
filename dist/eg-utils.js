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
            console.table(Object.keys(res));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZ1V0aWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VnVXRpbHMvLi9zcmMvbW9kdWxlL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9lZ1V0aWxzLy4vc3JjL21vZHVsZS9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvbnVtYmVyLnRzIiwid2VicGFjazovL2VnVXRpbHMvLi9zcmMvbW9kdWxlL2RhdGUudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvYXJyYXkudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvZG9tLnRzIiwid2VicGFjazovL2VnVXRpbHMvLi9zcmMvbW9kdWxlL2Jyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvb3RoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrREFBa0QsR0FBRyxJQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpSEFBaUgsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGdFQUFnRSxFQUFFO0FBQzdNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHNFQUFzRTtBQUN0RSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxFQUFFO0FBQzdDO0FBQ0EsNkJBQTZCLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sSUFBSTtBQUN0RDtBQUNBLDZCQUE2QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDbEk7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEVBQUU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUM5UmE7QUFDYixhQUFhLG1CQUFPLENBQUMsQ0FBZTtBQUNwQyxlQUFlLG1CQUFPLENBQUMsQ0FBaUI7QUFDeEMsZUFBZSxtQkFBTyxDQUFDLENBQWlCO0FBQ3hDLGFBQWEsbUJBQU8sQ0FBQyxDQUFlO0FBQ3BDLGNBQWMsbUJBQU8sQ0FBQyxDQUFnQjtBQUN0QyxZQUFZLG1CQUFPLENBQUMsQ0FBYztBQUNsQyxnQkFBZ0IsbUJBQU8sQ0FBQyxDQUFrQjtBQUMxQyxjQUFjLG1CQUFPLENBQUMsQ0FBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUNoRGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxDQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDM0phO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxhQUFhLG1CQUFPLENBQUMsQ0FBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLCtEQUErRCxFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUNsVGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxDQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxJQUFJO0FBQ25CLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxJQUFJO0FBQ25CLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFdBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDN0lhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsY0FBYztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsY0FBYztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlCQUF5QjtBQUN4QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUM3SmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ3hEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHNHQUFzRztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9HQUFvRztBQUNoSTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCLFdBQVc7QUFDN0MsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx5RUFBeUUsS0FBSztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQzFKYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsYUFBYSxFQUFFO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBLGtDQUFrQyxFQUFFLGFBQWEsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImVnLXV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIE1vZHVsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9kdWxlcygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreWtl+espuS4suexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdTdHJpbmcnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreaVsOWtl+exu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc051bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdOdW1iZXInO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreW4g+WwlOexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0Jvb2xlYW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnQm9vbGVhbic7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patRnVuY3Rpb27nsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdGdW5jdGlvbic7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patbnVsbOexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc051bGwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnTnVsbCc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patdW5kZWZpbmVk57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ1VuZGVmaW5lZCc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patb2JqZWN057G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ09iamVjdCc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patYXJyYXnnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNBcnJheSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdBcnJheSc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patZGF0Zeexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0RhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnRGF0ZSc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patcmVnRXhw57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzUmVnRXhwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ1JlZ0V4cCc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patZXJyb3LnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNFcnJvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdFcnJvcic7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patc3ltYm9s57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzU3ltYm9sID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ1N5bWJvbCc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patcHJvbWlzZeexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc1Byb21pc2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnUHJvbWlzZSc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patc2V057G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzU2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ1NldCc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5piv5ZCm5Li656m6XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gXCJcIiA/IHRydWUgOiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3lr7nosaHmmK/lkKbkuLrnqbpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNFbXB0eU9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbmmK/mlbTmlbBcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNJbnRlZ2VyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKHZhbHVlKSAmJlxuICAgICAgICAgICAgaXNGaW5pdGUodmFsdWUpICYmXG4gICAgICAgICAgICBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG4gICAgfTtcbiAgICA7XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreaYr+WQpuaYr+Wwj+aVsFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0Zsb2F0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0ludGVnZXIodmFsdWUpO1xuICAgIH07XG4gICAgO1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbkuLppb3NcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0lvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvXFwoaVteO10rOyggVTspPyBDUFUuK01hYyBPUyBYLyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5piv5ZCm5Li6YW5kcm9pZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzQW5kcm9pZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gLTEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdMaW51eCcpID4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5piv5ZCm5Li6cGPnq69cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc1BDID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZmxhZyA9IHRydWU7XG4gICAgICAgIHZhciB1c2VyQWdlbnRJbmZvID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgdmFyIEFnZW50cyA9IFtcIkFuZHJvaWRcIiwgXCJpUGhvbmVcIixcbiAgICAgICAgICAgIFwiU3ltYmlhbk9TXCIsIFwiV2luZG93cyBQaG9uZVwiLFxuICAgICAgICAgICAgXCJpUGFkXCIsIFwiaVBvZFwiXG4gICAgICAgIF07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQWdlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodXNlckFnZW50SW5mby5pbmRleE9mKEFnZW50c1tpXSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmbGFnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreaYr+WQpuaUr+aMgXdlYnBcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc1dlYnAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhIVtdLm1hcCAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS50b0RhdGFVUkwoJ2ltYWdlL3dlYnAnKS5pbmRleE9mKCdkYXRhOmltYWdlL3dlYnAnKSA9PSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreaYr+WQpuS4uumXsOW5tFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0xlYXBZZWFyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJSA0MDAgPT0gMCkgfHwgKHZhbHVlICUgNCA9PSAwICYmIHZhbHVlICUgMTAwICE9IDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreaYr+WQpuWQq+aciWh0bWzmoIfnrb5cbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNIdG1sID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAvPChcIlteXCJdKlwifCdbXiddKid8W14nXCI+XSkqPi8udGVzdCh2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5qCh6aqM6Lqr5Lu96K+B5L+h5oGvXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzQ2FyZElEID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBmb3JtYXQgPSAvXigoWzFdWzEtNV0pfChbMl1bMS0zXSl8KFszXVsxLTddKXwoWzRdWzEtNl0pfChbNV1bMC00XSl8KFs2XVsxLTVdKXwoWzddWzFdKXwoWzhdWzEtMl0pKVxcZHs0fSgoWzFdWzldXFxkezJ9KXwoWzJdXFxkezN9KSkoKFswXVsxLTldKXwoWzFdWzAtMl0pKSgoWzBdWzEtOV0pfChbMS0yXVswLTldKXwoWzNdWzAtMV0pKVxcZHszfVswLTl4WF0kLztcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgLy/liJ3mraXmoKHpqowt5Y+356CB6KeE5YiZ5qCh6aqMXG4gICAgICAgIGlmICghZm9ybWF0LnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy/kuoznuqfmoKHpqowt5Yy65L2N56CB5qCh6aqMXG4gICAgICAgIHZhciB5ZWFyID0gdmFsdWUuc3Vic3RyKDYsIDQpLCAvL+i6q+S7veivgeW5tFxuICAgICAgICBtb250aCA9IHZhbHVlLnN1YnN0cigxMCwgMiksIC8v6Lqr5Lu96K+B5pyIXG4gICAgICAgIGRheSA9IHZhbHVlLnN1YnN0cigxMiwgMiksIC8v6Lqr5Lu96K+B5pelXG4gICAgICAgIHRpbWUgPSBEYXRlLnBhcnNlKG1vbnRoICsgJy0nICsgZGF5ICsgJy0nICsgeWVhciksIC8v6Lqr5Lu96K+B5pel5pyf5pe26Ze05oizXG4gICAgICAgIG5vd3RpbWUgPSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkudG9TdHJpbmcoKSksIC8v5b2T5YmN5pe26Ze05oizXG4gICAgICAgIG5vd2RheSA9IChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkpLmdldERhdGUoKTsgLy/ouqvku73or4HlvZPmnIjlpKnmlbBcbiAgICAgICAgaWYgKHRpbWUgPiBub3d0aW1lIHx8IGRheSA+IG5vd2RheSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8v5LiJ57qn5qCh6aqMLeagoemqjOeggeWIpOaWrSB7aHR0cHM6Ly9qaW5neWFuLmJhaWR1LmNvbS9hcnRpY2xlLzdmNDFlY2VjZmY5NDRhNTkzZDA5NWM4Yy5odG1sfVxuICAgICAgICB2YXIgYyA9IFs3LCA5LCAxMCwgNSwgOCwgNCwgMiwgMSwgNiwgMywgNywgOSwgMTAsIDUsIDgsIDQsIDJdOyAvL+ezu+aVsFxuICAgICAgICB2YXIgYiA9IFsnMScsICcwJywgJ1gnLCAnOScsICc4JywgJzcnLCAnNicsICc1JywgJzQnLCAnMycsICcyJ107IC8v5qCh6aqM56CB5a+554Wn6KGoXG4gICAgICAgIHZhciBpZEFyciA9IHZhbHVlLnNwbGl0KFwiXCIpO1xuICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNzsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gcGFyc2VJbnQoaWRBcnJbaV0pICogY1tpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWRBcnJbMTddLnRvVXBwZXJDYXNlKCkgIT0gYltzdW0gJSAxMV0udG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWtl+espuS4sue7vOWQiOagoemqjFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgbnVtLeaVsOWtlyBlbi3oi7HmlocgY2huLeS4reaWhyBsb3dlci3lsI/lhpkgdXBwZXIt5aSn5YaZIHBob25lLeaJi+acuuWPt+eggSB0ZWwt5bqn5py6IHVybC3nvZHlnYAgaXAtSVDlnLDlnYAgZGF0ZS3ml6XmnJ/moLzlvI8gZW1haWwt6YKu566xIHBvc3RhbC3pgq7mlL/nvJbnoIFcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc1ZlcmlmeSA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eWzAtOV0kLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ2VuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bYS16QS1aXSskLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ2Nobic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eW1xcdTRFMDAtXFx1OUZBNV0rJC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdsb3dlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eW2Etel0rJC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICd1cHBlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eW0EtWl0rJC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eMVszfDR8NXw3fDhdWzAtOV17OX0kLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ3RlbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eMFxcZHsyLDN9LVxcZHs3LDh9KC1cXGR7MSw2fSk/JC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAvKGh0dHB8ZnRwfGh0dHBzKTpcXC9cXC9bXFx3XFwtX10rKFxcLltcXHdcXC1fXSspKyhbXFx3XFwtXFwuLEA/Xj0lJjovflxcKyNdKltcXHdcXC1cXEA/Xj0lJi9+XFwrI10pPy8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdpcCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8oWzAtOV17MSwzfVxcLnsxfSl7M31bMC05XXsxLDN9Ly50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiAvXihcXGR7NH0pXFwtKFxcZHsyfSlcXC0oXFxkezJ9KSAoXFxkezJ9KSg/OlxcOlxcZHsyfXw6KFxcZHsyfSk6KFxcZHsyfSkpJC8udGVzdCh2YWx1ZSkgfHwgL14oXFxkezR9KVxcLShcXGR7Mn0pXFwtKFxcZHsyfSkkLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bXFx3LV0rKFxcLltcXHctXSspKkBbXFx3LV0rKFxcLltcXHctXSspKyQvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAncG9zdGFsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gL1sxLTldXFxkezV9KD8hXFxkKS8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1vZHVsZXM7XG59KCkpO1xuZXhwb3J0cy5CYXNlTW9kID0gTW9kdWxlcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIGJhc2VfMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9iYXNlXCIpO1xudmFyIHN0cmluZ18xID0gcmVxdWlyZShcIi4vbW9kdWxlL3N0cmluZ1wiKTtcbnZhciBudW1iZXJfMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9udW1iZXJcIik7XG52YXIgZGF0ZV8xID0gcmVxdWlyZShcIi4vbW9kdWxlL2RhdGVcIik7XG52YXIgYXJyYXlfMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9hcnJheVwiKTtcbnZhciBkb21fMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9kb21cIik7XG52YXIgYnJvd3Nlcl8xID0gcmVxdWlyZShcIi4vbW9kdWxlL2Jyb3dzZXJcIik7XG52YXIgb3RoZXJfMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9vdGhlclwiKTtcbi8qKlxuICogQGRlc2NyaXB0aW9uIOWFpeWPo+S4u+WHveaVsFxuICogQGNsYXNzIENlbnRlclxuICovXG52YXIgQ2VudGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENlbnRlcigpIHtcbiAgICB9XG4gICAgQ2VudGVyLnByb3RvdHlwZS5fZXh0ZW5kID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0KSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNvdXJjZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB0YXJnZXRba2V5XSAmJiB0YXJnZXRba2V5XS50b1N0cmluZygpID09PSBcIltvYmplY3QgT2JqZWN0XVwiID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXh0ZW5kKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSkgOiB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICBDZW50ZXIucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbW9kdWxlcyA9IHtcbiAgICAgICAgICAgICdCYXNlTW9kJzogYmFzZV8xLkJhc2VNb2QsXG4gICAgICAgICAgICAnU3RyaW5nTW9kJzogc3RyaW5nXzEuU3RyaW5nTW9kLFxuICAgICAgICAgICAgJ051bWJlck1vZCc6IG51bWJlcl8xLk51bWJlck1vZCxcbiAgICAgICAgICAgICdEYXRlTW9kJzogZGF0ZV8xLkRhdGVNb2QsXG4gICAgICAgICAgICAnQXJyYXlNb2QnOiBhcnJheV8xLkFycmF5TW9kLFxuICAgICAgICAgICAgJ0RvbU1vZCc6IGRvbV8xLkRvbU1vZCxcbiAgICAgICAgICAgICdCcm93c2VyTW9kJzogYnJvd3Nlcl8xLkJyb3dzZXJNb2QsXG4gICAgICAgICAgICAnT3RoZXJNb2QnOiBvdGhlcl8xLk90aGVyTW9kXG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgbSBpbiBtb2R1bGVzKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLl9leHRlbmQocmVzLCBuZXcgbW9kdWxlc1ttXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLmhlbHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ+ebruWJjeWFseacieWHveaVsOaWueazleS4quaVsO+8micgKyBPYmplY3Qua2V5cyhyZXMpLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKE9iamVjdC5rZXlzKHJlcykpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgcmV0dXJuIENlbnRlcjtcbn0oKSk7XG5tb2R1bGUuZXhwb3J0cyA9IChuZXcgQ2VudGVyKCkpLl9pbml0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xudmFyIG1vZHVsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKG1vZHVsZXMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gbW9kdWxlcygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Y676Zmk5a2X56ym5Liy56m65qC8XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciDlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSAxLeaJgOacieepuuagvCAgMi3liY3lkI7nqbrmoLwgIDMt5YmN56m65qC8IDQt5ZCO56m65qC8XG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24gKHN0ciwgdHlwZSkge1xuICAgICAgICB0eXBlID0gdHlwZSB8fCAxO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgXCJcIik7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXlxccyopL2csIFwiXCIpO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOabv+aNouWtl+espuS4suS4reaJgOacieaMh+WumuWtl+esplxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg5YaF5a65XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJlZm9yZVN0ciDpnIDopoHmm7/mjaLlrZfnrKZcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWZ0ZXJTdHIg5pu/5o2i5oiQ55qE5a2X56ymXG4gICAgICogQHJldHVybnMgeyhzdHJpbmcpfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbiAoc3RyLCBiZWZvcmVTdHIsIGFmdGVyU3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGJlZm9yZVN0ciwgJ2dtJyksIGFmdGVyU3RyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmm7/mjaLooqvmiKrlj5blrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIOWGheWuuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdWJTdGFydCDmiKrlj5blvIDlp4vkvY3nva5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ViRW5kIOaIquWPlue7k+adn+S9jee9rlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiZWZvcmVTdHIg6ZyA6KaB5pu/5o2i5a2X56ymXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFmdGVyU3RyIOabv+aNouaIkOeahOWtl+esplxuICAgICAqIEByZXR1cm5zIHsoc3RyaW5nKX1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5yZXBsYWNlU3ViU3RyaW5nID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBvcHRpb25zLnN0ci5zdWJzdHJpbmcob3B0aW9ucy5zdWJTdGFydCwgb3B0aW9ucy5zdWJFbmQpO1xuICAgICAgICByZXR1cm4gdGVtcC5yZXBsYWNlKG9wdGlvbnMuYmVmb3JlU3RyLCBvcHRpb25zLmFmdGVyU3RyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDov4fmu6RodG1s5pON5L2c56ymXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5maWx0ZXJIdG1sQ29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgdmFyIHRlbXAgPSB7XG4gICAgICAgICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICAgICAgICc+JzogJyZndCcsXG4gICAgICAgICAgICAnJic6ICcmYW1wOycsXG4gICAgICAgICAgICAnKCc6ICcmIzQwOycsXG4gICAgICAgICAgICAnKSc6ICcmIzQxOycsXG4gICAgICAgICAgICAnICc6ICcmbmJzcDsnLFxuICAgICAgICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAgICAgICAnXFwnJzogXCImIzM5O1wiXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvWzw+JnwoKSAnXCJdL2csIGZ1bmN0aW9uIChjaHIpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wW2Nocl07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOmmluWtl+avjeWkp+WGmVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmZyaXN0Q2hhclVwcGVyQ2FzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgaWYgKCFfc3VwZXIucHJvdG90eXBlLmlzRW1wdHkuY2FsbCh0aGlzLCBzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15bYS16XS8sIGZ1bmN0aW9uIChjaHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hyLnRvTG9jYWxlVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDpppblrZfmr43lsI/lhplcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5mcmlzdENoYXJMb3dlckNhc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIGlmICghX3N1cGVyLnByb3RvdHlwZS5pc0VtcHR5LmNhbGwodGhpcywgc3RyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eW0EtWl0vLCBmdW5jdGlvbiAoY2hyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoci50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Y6L57yp55u45ZCM5LiU6L+e57ut55qE5a2X56ymXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0g5piv5ZCm5Yy65YiG5aSn5bCP5YaZXG4gICAgICogQHJldHVybnMge3N0cmluZ30gYmJic3NzcyA9PiAzYjRzXG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuY29tcHJlc3NSZXBlYXRlZFN0ciA9IGZ1bmN0aW9uIChzdHIsIGlnbm9yZUNhc2UpIHtcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihbYS16XSlcXFxcMStcIiwgaWdub3JlQ2FzZSA/IFwiZ2lcIiA6IFwiZ1wiKTtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4LCBmdW5jdGlvbiAoc3RyLCBncm91cCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5sZW5ndGggKyBncm91cDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Lit5paH6L2sVW5pY29kZeeggVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnRvVW5pY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgaWYgKCFfc3VwZXIucHJvdG90eXBlLmlzRW1wdHkuY2FsbCh0aGlzLCBzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXNjYXBlKHN0cikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC8ldS9naSwgJ1xcXFx1Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gVW5pY29kZeeggei9rOS4reaWh1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnRvR0IyMzEyID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICBpZiAoIV9zdXBlci5wcm90b3R5cGUuaXNFbXB0eS5jYWxsKHRoaXMsIHN0cikpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmVzY2FwZShzdHIucmVwbGFjZSgvXFxcXHUvZ2ksICcldScpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBtb2R1bGVzO1xufShiYXNlXzEuQmFzZU1vZCkpO1xuZXhwb3J0cy5TdHJpbmdNb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcbnZhciBtb2R1bGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhtb2R1bGVzLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIG1vZHVsZXMoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaVsOWtl+eyvuehruebuOWKoFxuICAgICAqIEBwYXJhbSB7Kn0gbnVtMVxuICAgICAqIEBwYXJhbSB7Kn0gbnVtMlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUubnVtQWRkID0gZnVuY3Rpb24gKG51bTEsIG51bTIpIHtcbiAgICAgICAgdmFyIHRlbXAxLCB0ZW1wMiwgdGltZXMsIGFicztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRlbXAxID0gbnVtMS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRlbXAxID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGVtcDIgPSBudW0yLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGVtcDIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGFicyA9IE1hdGguYWJzKHRlbXAxIC0gdGVtcDIpO1xuICAgICAgICB0aW1lcyA9IE1hdGgucG93KDEwLCBNYXRoLm1heCh0ZW1wMSwgdGVtcDIpKTtcbiAgICAgICAgaWYgKGFicyA+IDApIHtcbiAgICAgICAgICAgIHZhciBjdGltZXMgPSBNYXRoLnBvdygxMCwgYWJzKTtcbiAgICAgICAgICAgIGlmICh0ZW1wMSA+IHRlbXAyKSB7XG4gICAgICAgICAgICAgICAgbnVtMSA9IE51bWJlcihudW0xLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgICAgICAgICAgICAgIG51bTIgPSBOdW1iZXIobnVtMi50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSAqIGN0aW1lcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG51bTEgPSBOdW1iZXIobnVtMS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSAqIGN0aW1lcztcbiAgICAgICAgICAgICAgICBudW0yID0gTnVtYmVyKG51bTIudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBudW0xID0gTnVtYmVyKG51bTEudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgICAgICAgICBudW0yID0gTnVtYmVyKG51bTIudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChudW0xICsgbnVtMikgLyB0aW1lcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDlrZfnsr7noa7nm7jlh49cbiAgICAgKiBAcGFyYW0geyp9IG51bTFcbiAgICAgKiBAcGFyYW0geyp9IG51bTJcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLm51bVN1YiA9IGZ1bmN0aW9uIChudW0xLCBudW0yKSB7XG4gICAgICAgIHZhciB0ZW1wMSwgdGVtcDIsIHRpbWVzLCBuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGVtcDEgPSBudW0xLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGVtcDEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0ZW1wMiA9IG51bTIudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0ZW1wMiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXMgPSBNYXRoLnBvdygxMCwgTWF0aC5tYXgodGVtcDEsIHRlbXAyKSk7XG4gICAgICAgIG4gPSB0ZW1wMSA+PSB0ZW1wMiA/IHRlbXAxIDogdGVtcDI7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhOdW1iZXIoKChudW0yICogdGltZXMgLSBudW0xICogdGltZXMpIC8gdGltZXMpLnRvRml4ZWQobikpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDlrZfnsr7noa7nm7jkuZhcbiAgICAgKiBAcGFyYW0geyp9IG51bTFcbiAgICAgKiBAcGFyYW0geyp9IG51bTJcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLm51bU11bCA9IGZ1bmN0aW9uIChudW0xLCBudW0yKSB7XG4gICAgICAgIHZhciBtID0gMCwgdGVtcDEgPSBudW0xLnRvU3RyaW5nKCksIHRlbXAyID0gbnVtMi50b1N0cmluZygpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbSArPSB0ZW1wMS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG0gKz0gdGVtcDIuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIHJldHVybiBOdW1iZXIodGVtcDEucmVwbGFjZShcIi5cIiwgXCJcIikpICogTnVtYmVyKHRlbXAyLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSAvIE1hdGgucG93KDEwLCBtKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDlrZfnsr7noa7nm7jpmaRcbiAgICAgKiBAcGFyYW0geyp9IG51bTFcbiAgICAgKiBAcGFyYW0geyp9IG51bTJcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLm51bURpdmkgPSBmdW5jdGlvbiAobnVtMSwgbnVtMikge1xuICAgICAgICB2YXIgdGVtcDEgPSAwLCB0ZW1wMiA9IDAsIHIxLCByMjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRlbXAxID0gbnVtMS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGVtcDIgPSBudW0yLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIHIxID0gTnVtYmVyKG51bTEudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgICAgIHIyID0gTnVtYmVyKG51bTIudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgICAgIHJldHVybiAocjEgLyByMikgKiBNYXRoLnBvdygxMCwgdGVtcDIgLSB0ZW1wMSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g55Sf5oiQ5oyH5a6a5L2N5pWw55qE6ZqP5py65pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBsYWNlUmFuZ2Ug5L2N5pWwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJldHVyblR5cGVcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldFBsYWNlUmFuZG9tTnVtID0gZnVuY3Rpb24gKHBsYWNlUmFuZ2UsIHJldHVyblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblR5cGUgPT0gXCJmbG9hdFwiID8gTWF0aC5yYW5kb20oKSAqIHBsYWNlUmFuZ2UgOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHBsYWNlUmFuZ2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOeUn+aIkOaMh+WumuiMg+WbtOeahOmaj+acuuaVsFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4g5pyA5bCP5YC8XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCDmnIDlpKflgLxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldFJhbmdlUmFuZG9tTnVtID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAoKG1heCArIDEpIC0gbWluKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5qC85byP5YyW5oiQ6LSn5biB5qC85byPXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRGb3JtYXRDdXJyZW5jeSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKS5yZXBsYWNlKC8oXFxkezN9KD89XFxkKSg/IVxcZCtcXC58JCkpL2csICckMSwnKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOi9rOaNouaIkOWkp+WGmei0p+W4geagvOW8j1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUg6LSn5biB6YeR6aKdXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5jaGFuZ2VUb0NobkN1cnJlbmN5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICAvL+i/h+a7pOS8oOWFpeWAvOeahOaXoOeUqOWtl+esplxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLywvZywgXCJcIikucmVwbGFjZSgvIC9nLCBcIlwiKS5yZXBsYWNlKC/vv6UvZywgXCJcIik7XG4gICAgICAgIC8v6aqM6K+B6L6T5YWl55qE5a2X56ym5piv5ZCm5Li65pWw5a2XXG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgLy/lrZfnrKblpITnkIblrozmr5XlkI7lvIDlp4vovazmjaJcbiAgICAgICAgdmFyIHBhcnQgPSBTdHJpbmcodmFsdWUpLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgdmFyIG5ld2NoYXIgPSBcIlwiO1xuICAgICAgICAvL+Wwj+aVsOeCueWJjei/m+ihjOi9rOWMllxuICAgICAgICBmb3IgKHZhciBpID0gcGFydFswXS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHBhcnRbMF0ubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0ZW1wY2hhciA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgb2xkY2hhciA9IHBhcnRbMF0uY2hhckF0KGkpO1xuICAgICAgICAgICAgc3dpdGNoIChvbGRjaGFyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIumbtlwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLlo7lcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi6LSwXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuWPgVwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLogoZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5LyNXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIumZhlwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLmn5JcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5o2MXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjlcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIueOllwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChwYXJ0WzBdLmxlbmd0aCAtIGkgLSAxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLlhYNcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkY2hhciAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5ou+XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZGNoYXIgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuS9sFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRjaGFyICE9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLku59cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLkuIdcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkY2hhciAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5ou+XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZGNoYXIgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuS9sFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRjaGFyICE9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLku59cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLkur9cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLmi75cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdjaGFyID0gdGVtcGNoYXIgKyBuZXdjaGFyO1xuICAgICAgICB9XG4gICAgICAgIC8v5bCP5pWw54K55LmL5ZCO6L+b6KGM6L2s5YyWXG4gICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKFwiLlwiKSAhPSAtMSkge1xuICAgICAgICAgICAgaWYgKHBhcnRbMV0ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIC8v5L+d55WZ5Lik5L2N5bCP5pWwXG4gICAgICAgICAgICAgICAgcGFydFsxXSA9IHBhcnRbMV0uc3Vic3RyKDAsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0WzFdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBjaGFyID0gXCJcIjtcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2hhciA9IHBhcnRbMV0uY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocGVyY2hhcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIumbtlwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLlo7lcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi6LSwXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuWPgVwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLogoZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5LyNXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIumZhlwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLmn5JcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI4XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5o2MXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiOVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIueOllwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMClcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi6KeSXCI7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5YiGXCI7XG4gICAgICAgICAgICAgICAgbmV3Y2hhciA9IG5ld2NoYXIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+abv+aNouaJgOacieaXoOeUqOaxieWtl1xuICAgICAgICB3aGlsZSAobmV3Y2hhci5zZWFyY2goXCLpm7bpm7ZcIikgIT0gLTEpIHtcbiAgICAgICAgICAgIG5ld2NoYXIgPSBuZXdjaGFyLnJlcGxhY2UoXCLpm7bpm7ZcIiwgXCLpm7ZcIikucmVwbGFjZShcIumbtuS6v1wiLCBcIuS6v1wiKS5yZXBsYWNlKFwi5Lq/5LiHXCIsIFwi5Lq/XCIpLnJlcGxhY2UoXCLpm7bkuIdcIiwgXCLkuIdcIikucmVwbGFjZShcIumbtuWFg1wiLCBcIuWFg1wiKS5yZXBsYWNlKFwi6Zu26KeSXCIsIFwiXCIpLnJlcGxhY2UoXCLpm7bliIZcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld2NoYXIuY2hhckF0KG5ld2NoYXIubGVuZ3RoIC0gMSkgPT0gXCLlhYNcIikge1xuICAgICAgICAgICAgbmV3Y2hhciA9IG5ld2NoYXIgKyBcIuaVtFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdjaGFyO1xuICAgIH07XG4gICAgcmV0dXJuIG1vZHVsZXM7XG59KGJhc2VfMS5CYXNlTW9kKSk7XG5leHBvcnRzLk51bWJlck1vZCA9IG1vZHVsZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xudmFyIG1vZHVsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKG1vZHVsZXMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gbW9kdWxlcygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5qC85byP5YyW5pel5pyfXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGUg5pe26Ze05oiz5oiW5pel5pyfXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg6buY6K6k77yaeXl5eS1NTS1kZCBoaDptbTpzc1xuICAgICAqIEByZXR1cm5zIHthbnl9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCB0eXBlKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICgoZGF0ZSArICcnKS5sZW5ndGggPT09IDEwKSB7XG4gICAgICAgICAgICBkYXRlID0gTnVtYmVyKGRhdGUpICogMTAwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZm9ybWF0ID0gdHlwZSB8fCAneXl5eS1NTS1kZCBoaDptbTpzcycsIHRlbXBkYXRlO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0ZW1wZGF0ZSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmb3JtYXRPYmogPSB7XG4gICAgICAgICAgICB5eXl5OiB0ZW1wZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgTU06IHRlbXBkYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgICAgZGQ6IHRlbXBkYXRlLmdldERhdGUoKSxcbiAgICAgICAgICAgIGhoOiB0ZW1wZGF0ZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgbW06IHRlbXBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgIHNzOiB0ZW1wZGF0ZS5nZXRTZWNvbmRzKClcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC8oeXl5eXxNTXxkZHxoaHxtbXxzcykrL2csIGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZm9ybWF0T2JqW2tleV07XG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDAgJiYgdmFsdWUgPCAxMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gJzAnICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgfHwgMDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5qC85byP5YyW5pe25YiG56eSXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGUg5pe26Ze05oizXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5mb3JtYXRUaW1lID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgdmFyIHRlbXAgPSAnJztcbiAgICAgICAgaWYgKHRpbWUgPj0gMzYwMCkge1xuICAgICAgICAgICAgdGVtcCA9IE1hdGguZmxvb3IodGltZSAvIDM2MDApICsgJ+Wwj+aXticgKyBNYXRoLmZsb29yKHRpbWUgJSAzNjAwIC8gNjApICsgJ+WIhicgKyB0aW1lICUgNjAgKyAn56eSJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aW1lID49IDYwKSB7XG4gICAgICAgICAgICB0ZW1wID0gTWF0aC5mbG9vcih0aW1lIC8gNjApICsgJ+WIhicgKyB0aW1lICUgNjAgKyAn56eSJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRlbXAgPSB0aW1lICUgNjAgKyAn56eSJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5bkuKTkuKrml6XmnJ/pl7Tlt67lgLxcbiAgICAgKiBAcGFyYW0geyp9IHN0YXJ0RGF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gZW5kRGF0ZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0RGF5TWludXMgPSBmdW5jdGlvbiAoc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKChOdW1iZXIobmV3IERhdGUoZW5kRGF0ZSkpIC0gTnVtYmVyKG5ldyBEYXRlKHN0YXJ0RGF0ZSkpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5p+Q5bm05pyJ5aSa5bCR5aSpXG4gICAgICogQHBhcmFtIHsqfSB5ZWFyIDE5OTlcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldFllYXJEYXlzID0gZnVuY3Rpb24gKHllYXIpIHtcbiAgICAgICAgdmFyIGRheXMgPSAzNjU7XG4gICAgICAgIHRoaXMuZ2V0TW9udGhEYXlzKHllYXIgKyAnLTInKSA9PSAyOSA/IGRheXMgPSAzNjYgOiBkYXlzO1xuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5bmn5DlubTmn5DmnIjmnInlpJrlsJHlpKlcbiAgICAgKiBAcGFyYW0geyp9IGRhdGUgMTk5OS0xXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRNb250aERheXMgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICB2YXIgdGVtcCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICB2YXIgeWVhciA9IHRlbXAuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdmFyIG1vbnRoID0gdGVtcC5nZXRNb250aCgpO1xuICAgICAgICByZXR1cm4gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9udGhdIHx8IChfc3VwZXIucHJvdG90eXBlLmlzTGVhcFllYXIuY2FsbCh0aGlzLCB5ZWFyKSA/IDI5IDogMjgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluafkOW5tOafkOWkqeaYr+esrOWHoOWRqFxuICAgICAqIEBwYXJhbSB7Kn0gZGF0ZSAxOTk5LTEtMVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0V2hpY2hXZWVrID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBuZXcgRGF0ZShkYXRlKSwgeWVhciA9IHRlbXAuZ2V0RnVsbFllYXIoKSwgbW9udGggPSB0ZW1wLmdldE1vbnRoKCksIGRheXMgPSB0ZW1wLmdldERhdGUoKTtcbiAgICAgICAgdmFyIHllYXJGaXJzdERheSA9IG5ldyBEYXRlKHllYXIsIDAsIDEpLmdldERheSgpIHx8IDc7XG4gICAgICAgIHZhciB3ZWVrID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgbSA9IDA7IG0gPCBtb250aDsgbSsrKSB7XG4gICAgICAgICAgICBkYXlzICs9IHRoaXMuZ2V0TW9udGhEYXlzKHllYXIgKyAnLScgKyBtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeWVhckZpcnN0RGF5ID09IDEpIHtcbiAgICAgICAgICAgIHdlZWsgPSBNYXRoLmNlaWwoZGF5cyAvIHllYXJGaXJzdERheSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXlzIC09ICg3IC0geWVhckZpcnN0RGF5ICsgMSk7XG4gICAgICAgICAgICB3ZWVrID0gTWF0aC5jZWlsKGRheXMgLyA3KSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5p+Q5pel5pyf5YmN5ZCO6Iul5bmy5aSp5pWw55qE5pel5pyfXG4gICAgICogQHBhcmFtIHsqfSBkYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbnVzRGF5c1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0RGF0ZU1pbnVzRGF5c0RhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgbWludXNEYXlzKSB7XG4gICAgICAgIHZhciB0ZW1wID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIHRlbXAuc2V0RGF0ZShOdW1iZXIobmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpKSArIG1pbnVzRGF5cyk7IC8v6I635Y+WQWRkRGF5Q291bnTlpKnlkI7nmoTml6XmnJ9cbiAgICAgICAgdmFyIHkgPSB0ZW1wLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBtID0gdGVtcC5nZXRNb250aCgpICsgMTsgLy/ojrflj5blvZPliY3mnIjku73nmoTml6XmnJ9cbiAgICAgICAgdmFyIGQgPSB0ZW1wLmdldERhdGUoKTtcbiAgICAgICAgcmV0dXJuIHkgKyBcIi1cIiArIG0gKyBcIi1cIiArIGQ7XG4gICAgfTtcbiAgICByZXR1cm4gbW9kdWxlcztcbn0oYmFzZV8xLkJhc2VNb2QpKTtcbmV4cG9ydHMuRGF0ZU1vZCA9IG1vZHVsZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgbW9kdWxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBtb2R1bGVzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pWw57uE5YWD57Sg5Y676YeNXG4gICAgICogQHBhcmFtIHtBcnJheSA8IGFueSA+fSBhcnJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkgPCBhbnkgPn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJVbmlxdWUgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHZhciB0ZW1wID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGVtcC5pbmRleE9mKGFycltpXSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDnu4TlhYPntKDmjpLluo9cbiAgICAgKiBAcGFyYW0geyp9IGFyciDmlbDnu4RcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSAxLemZjeW6jyAgMi3ljYfluo8gIDMt6ZqP5py6XG4gICAgICogQHJldHVybnMge0FycmF5IDwgYW55ID59XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyU29ydCA9IGZ1bmN0aW9uIChhcnIsIHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiIC0gYTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIC0gMC41O1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIoOmZpOaMh+WumueahOaVsOe7hOWFg+e0oFxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBhbnkgPn0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBlbGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkgPCBhbnkgPn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJSZW1vdmUgPSBmdW5jdGlvbiAoYXJyLCBlbGUpIHtcbiAgICAgICAgdmFyIGkgPSBhcnIuaW5kZXhPZihlbGUpO1xuICAgICAgICBpID4gLTEgPyBhcnIuc3BsaWNlKGksIDEpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflvpfkuKTkuKrmlbDnu4TnmoTlubbpm4ZcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgYW55ID59IGFcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgYW55ID59IGJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkgPCBhbnkgPn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJVbmlvbiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyclVuaXF1ZShhLmNvbmNhdChiKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635b6X5Lik5Liq5pWw57uE55qE5Lqk6ZuGXG4gICAgICogQHBhcmFtIHtBcnJheSA8IGFueSA+fSBhXG4gICAgICogQHBhcmFtIHtBcnJheSA8IGFueSA+fSBiXG4gICAgICogQHJldHVybnMge0FycmF5IDwgYW55ID59XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJySW50ZXJzZWN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pbmRleE9mKHYpICE9PSAtMTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pWw57uE5YWD57Sg5pyA5aSn5YC877yIbnVtYmVy77yJXG4gICAgICogQHBhcmFtIHtBcnJheSA8IG51bWJlciA+fSBhcnJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyck1heCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGFycik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pWw57uE5YWD57Sg5pyA5bCP5YC877yIbnVtYmVy77yJXG4gICAgICogQHBhcmFtIHtBcnJheSA8IG51bWJlciA+fSBhcnJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyck1pbiA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KG51bGwsIGFycik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pWw57uE5YWD57Sg5rGC5ZKM77yIbnVtYmVy77yJXG4gICAgICogQHBhcmFtIHtBcnJheSA8IG51bWJlciA+fSBhcnJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyclN1bSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKHByZSwgY3VyKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlICsgY3VyO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDnu4TlhYPntKDlubPlnYflgLzvvIhudW1iZXLvvIlcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgbnVtYmVyID59IGFyclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyQXZlcmFnZSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyU3VtKGFycikgLyBhcnIubGVuZ3RoO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOavlOi+g+S4pOS4quaVsOe7hOaYr+WQpuebuOetiVxuICAgICAqIEBwYXJhbSB7Kn0gYVxuICAgICAqIEBwYXJhbSB7Kn0gYlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyckVxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEgPT09IGIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlkIjlubbkuKTkuKrlr7nosaFcbiAgICAgKiBAcGFyYW0geyp9IGEg5a+56LGhXG4gICAgICogQHBhcmFtIHsqfSBiIOWvueixoVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUubWVyZ2VKU09OID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHRlbXAgPSB7fTtcbiAgICAgICAgaWYgKGEgJiYgYikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBiKSB7XG4gICAgICAgICAgICAgICAgYVtpXSA9IGJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZW1wID0gYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmt7Hmi7fotJ3mlbDnu4TmiJblr7nosaFcbiAgICAgKiBAcGFyYW0geyhvYmplY3QgfCBBcnJheSA8IGFueSA+KX0gb2JqIOaVsOe7hOaIluWvueixoVxuICAgICAqIEByZXR1cm5zIHsob2JqZWN0IHwgQXJyYXkgPCBhbnkgPil9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZGVlcENvcHkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluWvueixoemVv+W6plxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgICBba2V5OiBzdHJpbmddOiBhbnlcbiAgICAgKiAgIH19IG9ialxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0T2JqZWN0TGVuID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XG4gICAgfTtcbiAgICByZXR1cm4gbW9kdWxlcztcbn0oKSk7XG5leHBvcnRzLkFycmF5TW9kID0gbW9kdWxlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBtb2R1bGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIG1vZHVsZXMoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbmnInmjIflrppjbGFzc1xuICAgICAqIEBwYXJhbSB7Kn0gZWxlXG4gICAgICogQHBhcmFtIHsqfSBjbHNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5oYXNDbGFzcyA9IGZ1bmN0aW9uIChlbGUsIGNscykge1xuICAgICAgICByZXR1cm4gKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbHMgKyAnKFxcXFxzfCQpJykpLnRlc3QoZWxlLmNsYXNzTmFtZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5re75YqgY2xhc3NcbiAgICAgKiBAcGFyYW0geyp9IGVsZVxuICAgICAqIEBwYXJhbSB7Kn0gY2xzXG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlLCBjbHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0NsYXNzKGVsZSwgY2xzKSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTmFtZSArPSAnICcgKyBjbHM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKDpmaRjbGFzc1xuICAgICAqIEBwYXJhbSB7Kn0gZWxlXG4gICAgICogQHBhcmFtIHsqfSBjbHNcbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbGUsIGNscykge1xuICAgICAgICBpZiAodGhpcy5oYXNDbGFzcyhlbGUsIGNscykpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGNscyArICcoXFxcXHN8JCknKSwgJyAnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGh0bWzovazmiJDlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0geyp9IGh0bWxET00gaHRtbERPTVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuaHRtbFRvU3Rpcm5nID0gZnVuY3Rpb24gKGh0bWxET00pIHtcbiAgICAgICAgdmFyIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0ZW1wLmFwcGVuZENoaWxkKGh0bWxET00pO1xuICAgICAgICByZXR1cm4gdGVtcC5pbm5lckhUTUw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5a2X56ym5Liy6L2saHRtbFxuICAgICAqIEBwYXJhbSB7Kn0gaHRtbFN0cmluZyBodG1s5a2X56ym5LiyXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuc3RyaW5nVG9IdG1sID0gZnVuY3Rpb24gKGh0bWxTdHJpbmcpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0ZW1wLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgICAgIHJldHVybiB0ZW1wLmNoaWxkcmVuWzBdO1xuICAgIH07XG4gICAgcmV0dXJuIG1vZHVsZXM7XG59KCkpO1xuZXhwb3J0cy5Eb21Nb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG1vZHVsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gbW9kdWxlcygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluW9k+WJjea1j+iniOWZqOeJiOacrFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldEJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzeXMgPSB7fSwgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksIHM7XG4gICAgICAgIChzID0gdWEubWF0Y2goL3J2OihbXFxkLl0rKVxcKSBsaWtlIGdlY2tvLykpID8gc3lzLmllID0gc1sxXSA6XG4gICAgICAgICAgICAocyA9IHVhLm1hdGNoKC9tc2llIChbXFxkXFwuXSspLykpID8gc3lzLmllID0gc1sxXSA6XG4gICAgICAgICAgICAgICAgKHMgPSB1YS5tYXRjaCgvZWRnZVxcLyhbXFxkXFwuXSspLykpID8gc3lzLmVkZ2UgPSBzWzFdIDpcbiAgICAgICAgICAgICAgICAgICAgKHMgPSB1YS5tYXRjaCgvZmlyZWZveFxcLyhbXFxkXFwuXSspLykpID8gc3lzLmZpcmVmb3ggPSBzWzFdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChzID0gdWEubWF0Y2goLyg/Om9wZXJhfG9wcikuKFtcXGRcXC5dKykvKSkgPyBzeXMub3BlcmEgPSBzWzFdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocyA9IHVhLm1hdGNoKC9jaHJvbWVcXC8oW1xcZFxcLl0rKS8pKSA/IHN5cy5jaHJvbWUgPSBzWzFdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHMgPSB1YS5tYXRjaCgvdmVyc2lvblxcLyhbXFxkXFwuXSspLipzYWZhcmkvKSkgPyBzeXMuc2FmYXJpID0gc1sxXSA6IDA7XG4gICAgICAgIGlmIChzeXMuaWUpXG4gICAgICAgICAgICByZXR1cm4gKCdJRTogJyArIHN5cy5pZSk7XG4gICAgICAgIGlmIChzeXMuZWRnZSlcbiAgICAgICAgICAgIHJldHVybiAoJ0VER0U6ICcgKyBzeXMuZWRnZSk7XG4gICAgICAgIGlmIChzeXMuZmlyZWZveClcbiAgICAgICAgICAgIHJldHVybiAoJ0ZpcmVmb3g6ICcgKyBzeXMuZmlyZWZveCk7XG4gICAgICAgIGlmIChzeXMuY2hyb21lKVxuICAgICAgICAgICAgcmV0dXJuICgnQ2hyb21lOiAnICsgc3lzLmNocm9tZSk7XG4gICAgICAgIGlmIChzeXMub3BlcmEpXG4gICAgICAgICAgICByZXR1cm4gKCdPcGVyYTogJyArIHN5cy5vcGVyYSk7XG4gICAgICAgIGlmIChzeXMuc2FmYXJpKVxuICAgICAgICAgICAgcmV0dXJuICgnU2FmYXJpOiAnICsgc3lzLnNhZmFyaSk7XG4gICAgICAgIHJldHVybiAnVW5rb253bic7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5b2T5YmN5pON5L2c57O757uf57G75Z6LXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0T1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1c2VyQWdlbnQgPSAnbmF2aWdhdG9yJyBpbiB3aW5kb3cgJiYgJ3VzZXJBZ2VudCcgaW4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSB8fCAnJztcbiAgICAgICAgdmFyIHZlbmRvciA9ICduYXZpZ2F0b3InIGluIHdpbmRvdyAmJiAndmVuZG9yJyBpbiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnZlbmRvci50b0xvd2VyQ2FzZSgpIHx8ICcnO1xuICAgICAgICB2YXIgYXBwVmVyc2lvbiA9ICduYXZpZ2F0b3InIGluIHdpbmRvdyAmJiAnYXBwVmVyc2lvbicgaW4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCkgfHwgJyc7XG4gICAgICAgIGlmICgvbWFjL2kudGVzdChhcHBWZXJzaW9uKSlcbiAgICAgICAgICAgIHJldHVybiAnTWFjT1NYJztcbiAgICAgICAgaWYgKC93aW4vaS50ZXN0KGFwcFZlcnNpb24pKVxuICAgICAgICAgICAgcmV0dXJuICd3aW5kb3dzJztcbiAgICAgICAgaWYgKC9saW51eC9pLnRlc3QoYXBwVmVyc2lvbikpXG4gICAgICAgICAgICByZXR1cm4gJ2xpbnV4JztcbiAgICAgICAgaWYgKC9pcGhvbmUvaS50ZXN0KHVzZXJBZ2VudCkgfHwgL2lwYWQvaS50ZXN0KHVzZXJBZ2VudCkgfHwgL2lwb2QvaS50ZXN0KHVzZXJBZ2VudCkpXG4gICAgICAgICAgICAnaW9zJztcbiAgICAgICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKVxuICAgICAgICAgICAgcmV0dXJuICdhbmRyb2lkJztcbiAgICAgICAgaWYgKC93aW4vaS50ZXN0KGFwcFZlcnNpb24pICYmIC9waG9uZS9pLnRlc3QodXNlckFnZW50KSlcbiAgICAgICAgICAgIHJldHVybiAnd2luZG93c1Bob25lJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5Z1cmzkuK3mjIflrprlj4LmlbDlgLxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0g5Y+C5pWw5ZCN56ewXG4gICAgICogQHJldHVybnMgeyhzdHJpbmcgfCBudWxsKX1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRRdWVyeVBhcmFtID0gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gobmV3IFJlZ0V4cChcIihefCYpXCIgKyBwYXJhbSArIFwiPShbXiZdKikoJnwkKVwiKSk7IC8vc2VhcmNoLOafpeivou+8n+WQjumdoueahOWPguaVsO+8jOW5tuWMuemFjeato+WImVxuICAgICAgICBpZiAociAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJbMl0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiB1cmzlnLDlnYDlj4LmlbDluo/liJfljJZcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUucGFyc2VRdWVyeVBhcmFtID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB1cmwgPSB1cmwgPT0gbnVsbCA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogdXJsO1xuICAgICAgICB2YXIgc2VhcmNoID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJz8nKSArIDEpO1xuICAgICAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKCd7XCInICsgZGVjb2RlVVJJQ29tcG9uZW50KHNlYXJjaCkucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoLyYvZywgJ1wiLFwiJykucmVwbGFjZSgvPS9nLCAnXCI6XCInKSArICdcIn0nKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiB1cmzlj4LmlbDlr7nosaHlj43luo/liJfljJZcbiAgICAgKiBAcGFyYW0ge3tba2V5OnN0cmluZ106YW55fX0gcGFyYW1PYmoge2E6MSxiOjF9XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuc3RyaW5nZnlRdWVyeVBhcmFtID0gZnVuY3Rpb24gKHBhcmFtT2JqKSB7XG4gICAgICAgIGlmICghcGFyYW1PYmopXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIHZhciB0ZW1wID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwYXJhbU9iaikge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyYW1PYmpba2V5XTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSArICdbJyArIGkgKyAnXScpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVtcC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtT2JqW2tleV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcC5qb2luKCcmJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6K6+572uY29va2llXG4gICAgICogQHBhcmFtIHsqfSBrZXlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHBhcmFtIHsqfSBkYXlzIOi/h+acn+aXtumXtOmVv+W6plxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnNldENvb2tpZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBkYXlzKSB7XG4gICAgICAgIHZhciBEYXlzID0gZGF5cyB8fCAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBleHAuc2V0VGltZShleHAuZ2V0VGltZSgpICsgRGF5cyk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgZXNjYXBlKHZhbHVlKSArIFwiO2V4cGlyZXM9XCIgKyBleHAudG9VVENTdHJpbmcoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5bmjIflrppjb29raWVcbiAgICAgKiBAcGFyYW0geyp9IGtleVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldENvb2tpZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGFyciA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFwiKF58IClcIiArIGtleSArIFwiPShbXjtdKikoO3wkKVwiKSk7XG4gICAgICAgIGlmIChhcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIChhcnJbMl0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKDpmaTmjIflrppjb29raWVcbiAgICAgKiBAcGFyYW0geyp9IGtleVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmRlbENvb2tpZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGV4cC5zZXRUaW1lKGV4cC5nZXRUaW1lKCkgLSAxKTtcbiAgICAgICAgdmFyIHRtcFZhbHVlID0gdGhpcy5nZXRDb29raWUoa2V5KTtcbiAgICAgICAgaWYgKHRtcFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdG1wVmFsdWUgKyBcIjtleHBpcmVzPVwiICsgZXhwLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5bnm7jlr7not6/lvoTnmoTnu53lr7not6/lvoRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIOebuOWvuei3r+W+hFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IOe7neWvuei3r+W+hFxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnJlbGF0aXZlUGF0aFRvRnVsbFBhdGggPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICAgICAgdXJsID0gaW1nLnNyYztcbiAgICAgICAgaW1nLnNyYyA9ICcnO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH07XG4gICAgO1xuICAgIHJldHVybiBtb2R1bGVzO1xufSgpKTtcbmV4cG9ydHMuQnJvd3Nlck1vZCA9IG1vZHVsZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgbW9kdWxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBtb2R1bGVzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6ZqP5py655Sf5oiQ6Imy5YC8XG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRSYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcjJyArXG4gICAgICAgICAgICAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChjb2xvciArPSAnMDEyMzQ1Njc4OWFiY2RlZidbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKGNvbG9yLmxlbmd0aCA9PSA2KSA/IGNvbG9yIDogYXJndW1lbnRzLmNhbGxlZShjb2xvcik7XG4gICAgICAgICAgICB9KSgnJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5qCh6aqM5a+G56CB5by65bqmKOmAmueUqClcbiAgICAgKiBAcGFyYW0geyp9IHN0ciDlrZfnrKbkuLJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmNoZWNrUHdkID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICB2YXIgbGV2ZWwgPSAwO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIHJldHVybiBsZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1swLTldLy50ZXN0KHN0cikpIHtcbiAgICAgICAgICAgIGxldmVsKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9bYS16XS8udGVzdChzdHIpKSB7XG4gICAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvW0EtWl0vLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgbGV2ZWwrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1tcXC58LXxfXS8udGVzdChzdHIpKSB7XG4gICAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZXZlbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDpopzoibIxNui/m+WItui9rFJHQlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgIzAwMDAwMFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFJHQigwLDAsMClcbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5IRVhUb1JHQiA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgdmFyIHJlZyA9IC9eIyhbMC05YS1mQS1mXXszfXxbMC05YS1mQS1mXXs2fSkkLztcbiAgICAgICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChzdHIgJiYgcmVnLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IFwiI1wiO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgKz0gc3RyLnNsaWNlKGksIGkgKyAxKS5jb25jYXQoc3RyLnNsaWNlKGksIGkgKyAxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0ciA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+WkhOeQhuWFreS9jeeahOminOiJsuWAvFxuICAgICAgICAgICAgdmFyIHNDb2xvckNoYW5nZSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCA3OyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICBzQ29sb3JDaGFuZ2UucHVzaChwYXJzZUludChcIjB4XCIgKyBzdHIuc2xpY2UoaSwgaSArIDIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJSR0IoXCIgKyBzQ29sb3JDaGFuZ2Uuam9pbihcIixcIikgKyBcIilcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDpopzoibJSR0LovawxNui/m+WItlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgUkdCKDAsMCwwKVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9ICMwMDAwMDBcbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5SR0JUb0hFWCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgdmFyIHJlZyA9IC9eIyhbMC05YS1mQS1mXXszfXxbMC05YS1mQS1mXXs2fSkkLztcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICBpZiAoL14ocmdifFJHQikvLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgdmFyIGFDb2xvciA9IHN0ci5yZXBsYWNlKC8oPzpcXCh8XFwpfHJnYnxSR0IpKi9nLCBcIlwiKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICB2YXIgc3RySGV4ID0gXCIjXCI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFDb2xvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBoZXggPSBOdW1iZXIoYUNvbG9yW2ldKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgaWYgKGhleCA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGV4ICs9IGhleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RySGV4ICs9IGhleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdHJIZXgubGVuZ3RoICE9PSA3KSB7XG4gICAgICAgICAgICAgICAgc3RySGV4ID0gc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gc3RySGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlZy50ZXN0KHN0cikpIHtcbiAgICAgICAgICAgIHZhciBhTnVtID0gc3RyLnJlcGxhY2UoLyMvLCBcIlwiKS5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgIGlmIChhTnVtLmxlbmd0aCA9PT0gNikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhTnVtLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHZhciBudW1IZXggPSBcIiNcIjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFOdW0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtSGV4ICs9IChhTnVtW2ldICsgYU51bVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bUhleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHN0cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIG1vZHVsZXM7XG59KCkpO1xuZXhwb3J0cy5PdGhlck1vZCA9IG1vZHVsZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9