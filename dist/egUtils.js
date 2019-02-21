(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["egUtils"] = factory();
	else
		root["egUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
     * @description 判断字符串类型
     * @param {*} value
     * @returns {Boolean}
     */
    Modules.prototype.isNumber = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Number';
    };
    /**
     * @description 判断string类型
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
    Modules.prototype.isObj = function (value) {
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
     * @description 校验身份证信息
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
                return /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$/.test(value);
            case 'tel':
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(value);
            case 'url':
                return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value);
            case 'ip':
                return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(value);
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

exports.__esModule = true;
var base_1 = __webpack_require__(0);
var string_1 = __webpack_require__(2);
var number_1 = __webpack_require__(3);
var date_1 = __webpack_require__(4);
var array_1 = __webpack_require__(5);
var other_1 = __webpack_require__(6);
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
        else if (Object.prototype.toString.call(target) === '[object Array]' && Object.prototype.toString.call(source) === '[object Array]') {
            target = target.concat(source);
        }
        return target;
    };
    Center.prototype.init = function () {
        var modules = {
            'BaseMod': base_1.BaseMod,
            'StringMod': string_1.StringMod,
            'NumberMod': number_1.NumberMod,
            'DateMod': date_1.DateMod,
            'ArrayMod': array_1.ArrayMod,
            'OtherMod': other_1.OtherMod
        };
        var res = {};
        for (var m in modules) {
            res = this._extend(res, new modules[m]);
        }
        return res;
    };
    return Center;
}());
exports.egUtils = (new Center()).init();


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
     * @description 去字符串空格
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
     * @param {(object | Array < any >)} o 数组或对象
     * @returns {(object | Array < any >)}
     */
    modules.prototype.deepCopy = function (o) {
        return JSON.parse(JSON.stringify(o));
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
     * @description 获取当前浏览器版本
     * @returns {*}
     */
    modules.prototype.getBrowserType = function () {
        var userAgent = navigator.userAgent;
        var isOpera = userAgent.indexOf("Opera") > -1;
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
        var isFF = userAgent.indexOf("Firefox") > -1;
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1;
        var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7)
                return "IE7";
            else if (fIEVersion == 8)
                return "IE8";
            else if (fIEVersion == 9)
                return "IE9";
            else if (fIEVersion == 10)
                return "IE10";
            else
                return "IE7以下";
        }
        if (isIE11)
            return 'IE11';
        if (isEdge)
            return "Edge";
        if (isFF)
            return "FF";
        if (isOpera)
            return "Opera";
        if (isSafari)
            return "Safari";
        if (isChrome)
            return "Chrome";
    };
    /**
     * @description 获取相对路径的绝对路径
     * @param {string} url 相对路径
     * @returns {string} 绝对路径
     */
    modules.prototype.relativePathToFullPath = function (url) {
        var img = new Image();
        img.src = url; // 设置相对路径给image, 此时会发送出请求
        url = img.src; // 此时相对路径已经变成绝对路径
        img.src = ''; // 取消请求
        return url;
    };
    ;
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
    return modules;
}());
exports.OtherMod = modules;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZ1V0aWxzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lZ1V0aWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VnVXRpbHMvLi9zcmMvbW9kdWxlL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9lZ1V0aWxzLy4vc3JjL21vZHVsZS9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvbnVtYmVyLnRzIiwid2VicGFjazovL2VnVXRpbHMvLi9zcmMvbW9kdWxlL2RhdGUudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvYXJyYXkudHMiLCJ3ZWJwYWNrOi8vZWdVdGlscy8uL3NyYy9tb2R1bGUvb3RoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFl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QUNBLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJlZ1V0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZWdVdGlsc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlZ1V0aWxzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgTW9kdWxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2R1bGVzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5a2X56ym5Liy57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ1N0cmluZyc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5a2X56ym5Liy57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ051bWJlcic7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patc3RyaW5n57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzQm9vbGVhbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdCb29sZWFuJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1GdW5jdGlvbuexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0Z1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ0Z1bmN0aW9uJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1udWxs57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzTnVsbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdOdWxsJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq11bmRlZmluZWTnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNVbmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnVW5kZWZpbmVkJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1vYmplY3TnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNPYmogPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0JztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1hcnJheeexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0FycmF5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ0FycmF5JztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1kYXRl57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzRGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdEYXRlJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1yZWdFeHDnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNSZWdFeHAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnUmVnRXhwJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1lcnJvcuexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0Vycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ0Vycm9yJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1zeW1ib2znsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNTeW1ib2wgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnU3ltYm9sJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1wcm9taXNl57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzUHJvbWlzZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdQcm9taXNlJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1zZXTnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNTZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnU2V0JztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbkuLrnqbpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSBcIlwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreaYr+WQpuS4umlvc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzSW9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9cXChpW147XSs7KCBVOyk/IENQVS4rTWFjIE9TIFgvKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbkuLphbmRyb2lkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNBbmRyb2lkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAtMSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0xpbnV4JykgPiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbkuLpwY+err1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzUEMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmbGFnID0gdHJ1ZTtcbiAgICAgICAgdmFyIHVzZXJBZ2VudEluZm8gPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICB2YXIgQWdlbnRzID0gW1wiQW5kcm9pZFwiLCBcImlQaG9uZVwiLFxuICAgICAgICAgICAgXCJTeW1iaWFuT1NcIiwgXCJXaW5kb3dzIFBob25lXCIsXG4gICAgICAgICAgICBcImlQYWRcIiwgXCJpUG9kXCJcbiAgICAgICAgXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBBZ2VudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh1c2VyQWdlbnRJbmZvLmluZGV4T2YoQWdlbnRzW2ldKSA+IDApIHtcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZsYWc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5piv5ZCm5Li66Zew5bm0XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzTGVhcFllYXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAlIDQwMCA9PSAwKSB8fCAodmFsdWUgJSA0ID09IDAgJiYgdmFsdWUgJSAxMDAgIT0gMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5piv5ZCm5ZCr5pyJaHRtbOagh+etvlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0h0bWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIC88KFwiW15cIl0qXCJ8J1teJ10qJ3xbXidcIj5dKSo+Ly50ZXN0KHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmoKHpqozouqvku73or4Hkv6Hmga9cbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNDYXJkSUQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGZvcm1hdCA9IC9eKChbMV1bMS01XSl8KFsyXVsxLTNdKXwoWzNdWzEtN10pfChbNF1bMS02XSl8KFs1XVswLTRdKXwoWzZdWzEtNV0pfChbN11bMV0pfChbOF1bMS0yXSkpXFxkezR9KChbMV1bOV1cXGR7Mn0pfChbMl1cXGR7M30pKSgoWzBdWzEtOV0pfChbMV1bMC0yXSkpKChbMF1bMS05XSl8KFsxLTJdWzAtOV0pfChbM11bMC0xXSkpXFxkezN9WzAtOXhYXSQvO1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICAvL+WIneatpeagoemqjC3lj7fnoIHop4TliJnmoKHpqoxcbiAgICAgICAgaWYgKCFmb3JtYXQudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL+S6jOe6p+agoemqjC3ljLrkvY3noIHmoKHpqoxcbiAgICAgICAgdmFyIHllYXIgPSB2YWx1ZS5zdWJzdHIoNiwgNCksIC8v6Lqr5Lu96K+B5bm0XG4gICAgICAgIG1vbnRoID0gdmFsdWUuc3Vic3RyKDEwLCAyKSwgLy/ouqvku73or4HmnIhcbiAgICAgICAgZGF5ID0gdmFsdWUuc3Vic3RyKDEyLCAyKSwgLy/ouqvku73or4Hml6VcbiAgICAgICAgdGltZSA9IERhdGUucGFyc2UobW9udGggKyAnLScgKyBkYXkgKyAnLScgKyB5ZWFyKSwgLy/ouqvku73or4Hml6XmnJ/ml7bpl7TmiLNcbiAgICAgICAgbm93dGltZSA9IERhdGUucGFyc2UobmV3IERhdGUoKS50b1N0cmluZygpKSwgLy/lvZPliY3ml7bpl7TmiLNcbiAgICAgICAgbm93ZGF5ID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKSkuZ2V0RGF0ZSgpOyAvL+i6q+S7veivgeW9k+aciOWkqeaVsFxuICAgICAgICBpZiAodGltZSA+IG5vd3RpbWUgfHwgZGF5ID4gbm93ZGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy/kuInnuqfmoKHpqowt5qCh6aqM56CB5Yik5patIHtodHRwczovL2ppbmd5YW4uYmFpZHUuY29tL2FydGljbGUvN2Y0MWVjZWNmZjk0NGE1OTNkMDk1YzhjLmh0bWx9XG4gICAgICAgIHZhciBjID0gWzcsIDksIDEwLCA1LCA4LCA0LCAyLCAxLCA2LCAzLCA3LCA5LCAxMCwgNSwgOCwgNCwgMl07IC8v57O75pWwXG4gICAgICAgIHZhciBiID0gWycxJywgJzAnLCAnWCcsICc5JywgJzgnLCAnNycsICc2JywgJzUnLCAnNCcsICczJywgJzInXTsgLy/moKHpqoznoIHlr7nnhafooahcbiAgICAgICAgdmFyIGlkQXJyID0gdmFsdWUuc3BsaXQoXCJcIik7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE3OyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBwYXJzZUludChpZEFycltpXSkgKiBjW2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZEFyclsxN10udG9VcHBlckNhc2UoKSAhPSBiW3N1bSAlIDExXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5a2X56ym5Liy57u85ZCI5qCh6aqMXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBudW0t5pWw5a2XIGVuLeiLseaWhyBjaG4t5Lit5paHIGxvd2VyLeWwj+WGmSB1cHBlci3lpKflhpkgcGhvbmUt5omL5py65Y+356CBIHRlbC3luqfmnLogdXJsLee9keWdgCBpcC1JUOWcsOWdgCBkYXRlLeaXpeacn+agvOW8jyBlbWFpbC3pgq7nrrEgcG9zdGFsLemCruaUv+e8lueggVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzVmVyaWZ5ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bMC05XSQvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnZW4nOlxuICAgICAgICAgICAgICAgIHJldHVybiAvXlthLXpBLVpdKyQvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnY2huJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bXFx1NEUwMC1cXHU5RkE1XSskLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ2xvd2VyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bYS16XSskLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ3VwcGVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bQS1aXSskLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gL14oMTNbMC05XXwxNFs1fDddfDE1WzB8MXwyfDN8NXw2fDd8OHw5XXwxOFswfDF8MnwzfDV8Nnw3fDh8OV0pXFxcXGR7OH0kLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ3RlbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eKDBcXGR7MiwzfS1cXGR7Nyw4fSkoLVxcZHsxLDR9KT8kLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8oaHR0cHxmdHB8aHR0cHMpOlxcL1xcL1tcXHdcXC1fXSsoXFwuW1xcd1xcLV9dKykrKFtcXHdcXC1cXC4sQD9ePSUmOi9+XFwrI10qW1xcd1xcLVxcQD9ePSUmL35cXCsjXSk/Ly50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ2lwJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gLygoPzooPzoyNVswLTVdfDJbMC00XVxcXFxkfFswMV0/XFxcXGQ/XFxcXGQpXFxcXC4pezN9KD86MjVbMC01XXwyWzAtNF1cXFxcZHxbMDFdP1xcXFxkP1xcXFxkKSkvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eKFxcZHs0fSlcXC0oXFxkezJ9KVxcLShcXGR7Mn0pIChcXGR7Mn0pKD86XFw6XFxkezJ9fDooXFxkezJ9KTooXFxkezJ9KSkkLy50ZXN0KHZhbHVlKSB8fCAvXihcXGR7NH0pXFwtKFxcZHsyfSlcXC0oXFxkezJ9KSQvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAvXltcXHctXSsoXFwuW1xcdy1dKykqQFtcXHctXSsoXFwuW1xcdy1dKykrJC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdwb3N0YWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAvWzEtOV1cXGR7NX0oPyFcXGQpLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTW9kdWxlcztcbn0oKSk7XG5leHBvcnRzLkJhc2VNb2QgPSBNb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGJhc2VfMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9iYXNlXCIpO1xudmFyIHN0cmluZ18xID0gcmVxdWlyZShcIi4vbW9kdWxlL3N0cmluZ1wiKTtcbnZhciBudW1iZXJfMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9udW1iZXJcIik7XG52YXIgZGF0ZV8xID0gcmVxdWlyZShcIi4vbW9kdWxlL2RhdGVcIik7XG52YXIgYXJyYXlfMSA9IHJlcXVpcmUoXCIuL21vZHVsZS9hcnJheVwiKTtcbnZhciBvdGhlcl8xID0gcmVxdWlyZShcIi4vbW9kdWxlL290aGVyXCIpO1xuLyoqXG4gKiBAZGVzY3JpcHRpb24g5YWl5Y+j5Li75Ye95pWwXG4gKiBAY2xhc3MgQ2VudGVyXG4gKi9cbnZhciBDZW50ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2VudGVyKCkge1xuICAgIH1cbiAgICBDZW50ZXIucHJvdG90eXBlLl9leHRlbmQgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0YXJnZXQpID09PSAnW29iamVjdCBPYmplY3RdJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc291cmNlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHRhcmdldFtrZXldICYmIHRhcmdldFtrZXldLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBPYmplY3RdXCIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHRlbmQodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKSA6IHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRhcmdldCkgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNvdXJjZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5jb25jYXQoc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgQ2VudGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbW9kdWxlcyA9IHtcbiAgICAgICAgICAgICdCYXNlTW9kJzogYmFzZV8xLkJhc2VNb2QsXG4gICAgICAgICAgICAnU3RyaW5nTW9kJzogc3RyaW5nXzEuU3RyaW5nTW9kLFxuICAgICAgICAgICAgJ051bWJlck1vZCc6IG51bWJlcl8xLk51bWJlck1vZCxcbiAgICAgICAgICAgICdEYXRlTW9kJzogZGF0ZV8xLkRhdGVNb2QsXG4gICAgICAgICAgICAnQXJyYXlNb2QnOiBhcnJheV8xLkFycmF5TW9kLFxuICAgICAgICAgICAgJ090aGVyTW9kJzogb3RoZXJfMS5PdGhlck1vZFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVzID0ge307XG4gICAgICAgIGZvciAodmFyIG0gaW4gbW9kdWxlcykge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5fZXh0ZW5kKHJlcywgbmV3IG1vZHVsZXNbbV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgICByZXR1cm4gQ2VudGVyO1xufSgpKTtcbmV4cG9ydHMuZWdVdGlscyA9IChuZXcgQ2VudGVyKCkpLmluaXQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XG52YXIgbW9kdWxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMobW9kdWxlcywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBtb2R1bGVzKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDljrvlrZfnrKbkuLLnqbrmoLxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIOWtl+espuS4slxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIDEt5omA5pyJ56m65qC8ICAyLeWJjeWQjuepuuagvCAgMy3liY3nqbrmoLwgNC3lkI7nqbrmoLxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbiAoc3RyLCB0eXBlKSB7XG4gICAgICAgIHR5cGUgPSB0eXBlIHx8IDE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyheXFxzKikvZywgXCJcIik7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5pu/5o2i5a2X56ym5Liy5Lit5omA5pyJ5oyH5a6a5a2X56ymXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciDlhoXlrrlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmVmb3JlU3RyIOmcgOimgeabv+aNouWtl+esplxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhZnRlclN0ciDmm7/mjaLmiJDnmoTlrZfnrKZcbiAgICAgKiBAcmV0dXJucyB7KHN0cmluZyl9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUucmVwbGFjZUFsbCA9IGZ1bmN0aW9uIChzdHIsIGJlZm9yZVN0ciwgYWZ0ZXJTdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYmVmb3JlU3RyLCAnZ20nKSwgYWZ0ZXJTdHIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOabv+aNouiiq+aIquWPluWtl+espuS4slxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg5YaF5a65XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN1YlN0YXJ0IOaIquWPluW8gOWni+S9jee9rlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdWJFbmQg5oiq5Y+W57uT5p2f5L2N572uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJlZm9yZVN0ciDpnIDopoHmm7/mjaLlrZfnrKZcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWZ0ZXJTdHIg5pu/5o2i5oiQ55qE5a2X56ymXG4gICAgICogQHJldHVybnMgeyhzdHJpbmcpfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnJlcGxhY2VTdWJTdHJpbmcgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgdGVtcCA9IG9wdGlvbnMuc3RyLnN1YnN0cmluZyhvcHRpb25zLnN1YlN0YXJ0LCBvcHRpb25zLnN1YkVuZCk7XG4gICAgICAgIHJldHVybiB0ZW1wLnJlcGxhY2Uob3B0aW9ucy5iZWZvcmVTdHIsIG9wdGlvbnMuYWZ0ZXJTdHIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOi/h+a7pGh0bWzmk43kvZznrKZcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmZpbHRlckh0bWxDb2RlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICB2YXIgdGVtcCA9IHtcbiAgICAgICAgICAgICc8JzogJyZsdDsnLFxuICAgICAgICAgICAgJz4nOiAnJmd0JyxcbiAgICAgICAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICAgICAgICcoJzogJyYjNDA7JyxcbiAgICAgICAgICAgICcpJzogJyYjNDE7JyxcbiAgICAgICAgICAgICcgJzogJyZuYnNwOycsXG4gICAgICAgICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICAgICAgICdcXCcnOiBcIiYjMzk7XCJcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bPD4mfCgpICdcIl0vZywgZnVuY3Rpb24gKGNocikge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBbY2hyXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6aaW5a2X5q+N5aSn5YaZXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZnJpc3RDaGFyVXBwZXJDYXNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICBpZiAoIV9zdXBlci5wcm90b3R5cGUuaXNFbXB0eS5jYWxsKHRoaXMsIHN0cikpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlthLXpdLywgZnVuY3Rpb24gKGNocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaHIudG9Mb2NhbGVVcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOmmluWtl+avjeWwj+WGmVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmZyaXN0Q2hhckxvd2VyQ2FzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgaWYgKCFfc3VwZXIucHJvdG90eXBlLmlzRW1wdHkuY2FsbCh0aGlzLCBzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15bQS1aXS8sIGZ1bmN0aW9uIChjaHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hyLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDljovnvKnnm7jlkIzkuJTov57nu63nmoTlrZfnrKZcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAgICogQHBhcmFtIHtib29sZWFufSDmmK/lkKbljLrliIblpKflsI/lhplcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBiYmJzc3NzID0+IDNiNHNcbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5jb21wcmVzc1JlcGVhdGVkU3RyID0gZnVuY3Rpb24gKHN0ciwgaWdub3JlQ2FzZSkge1xuICAgICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFthLXpdKVxcXFwxK1wiLCBpZ25vcmVDYXNlID8gXCJnaVwiIDogXCJnXCIpO1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UocmVnZXgsIGZ1bmN0aW9uIChzdHIsIGdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLmxlbmd0aCArIGdyb3VwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBtb2R1bGVzO1xufShiYXNlXzEuQmFzZU1vZCkpO1xuZXhwb3J0cy5TdHJpbmdNb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcbnZhciBtb2R1bGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhtb2R1bGVzLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIG1vZHVsZXMoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOeUn+aIkOaMh+WumuS9jeaVsOeahOmaj+acuuaVsFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwbGFjZVJhbmdlIOS9jeaVsFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXR1cm5UeXBlXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRQbGFjZVJhbmRvbU51bSA9IGZ1bmN0aW9uIChwbGFjZVJhbmdlLCByZXR1cm5UeXBlKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5UeXBlID09IFwiZmxvYXRcIiA/IE1hdGgucmFuZG9tKCkgKiBwbGFjZVJhbmdlIDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBwbGFjZVJhbmdlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDnlJ/miJDmjIflrprojIPlm7TnmoTpmo/mnLrmlbBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluIOacgOWwj+WAvFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXgg5pyA5aSn5YC8XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRSYW5nZVJhbmRvbU51bSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKChtYXggKyAxKSAtIG1pbikpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOagvOW8j+WMluaIkOi0p+W4geagvOW8j1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0Rm9ybWF0Q3VycmVuY3kgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykucmVwbGFjZSgvKFxcZHszfSg/PVxcZCkoPyFcXGQrXFwufCQpKS9nLCAnJDEsJykuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDovazmjaLmiJDlpKflhpnotKfluIHmoLzlvI9cbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIOi0p+W4gemHkeminVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuY2hhbmdlVG9DaG5DdXJyZW5jeSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgLy/ov4fmu6TkvKDlhaXlgLznmoTml6DnlKjlrZfnrKZcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8sL2csIFwiXCIpLnJlcGxhY2UoLyAvZywgXCJcIikucmVwbGFjZSgv77+lL2csIFwiXCIpO1xuICAgICAgICAvL+mqjOivgei+k+WFpeeahOWtl+espuaYr+WQpuS4uuaVsOWtl1xuICAgICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIC8v5a2X56ym5aSE55CG5a6M5q+V5ZCO5byA5aeL6L2s5o2iXG4gICAgICAgIHZhciBwYXJ0ID0gU3RyaW5nKHZhbHVlKS5zcGxpdChcIi5cIik7XG4gICAgICAgIHZhciBuZXdjaGFyID0gXCJcIjtcbiAgICAgICAgLy/lsI/mlbDngrnliY3ov5vooYzovazljJZcbiAgICAgICAgZm9yICh2YXIgaSA9IHBhcnRbMF0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmIChwYXJ0WzBdLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGVtcGNoYXIgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIG9sZGNoYXIgPSBwYXJ0WzBdLmNoYXJBdChpKTtcbiAgICAgICAgICAgIHN3aXRjaCAob2xkY2hhcikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLpm7ZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5aO5XCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIui0sFwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLlj4FcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi6IKGXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuS8jVwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLpmYZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5p+SXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjhcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuaNjFwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCI5XCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLnjpZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAocGFydFswXS5sZW5ndGggLSBpIC0gMSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5YWDXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZGNoYXIgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuaLvlwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRjaGFyICE9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLkvbBcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkY2hhciAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5LufXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5LiHXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZGNoYXIgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuaLvlwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRjaGFyICE9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLkvbBcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkY2hhciAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5LufXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5Lq/XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5ou+XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Y2hhciA9IHRlbXBjaGFyICsgbmV3Y2hhcjtcbiAgICAgICAgfVxuICAgICAgICAvL+Wwj+aVsOeCueS5i+WQjui/m+ihjOi9rOWMllxuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihcIi5cIikgIT0gLTEpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0WzFdLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAvL+S/neeVmeS4pOS9jeWwj+aVsFxuICAgICAgICAgICAgICAgIHBhcnRbMV0gPSBwYXJ0WzFdLnN1YnN0cigwLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydFsxXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wY2hhciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdmFyIHBlcmNoYXIgPSBwYXJ0WzFdLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBlcmNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLpm7ZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5aO5XCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIui0sFwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLlj4FcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi6IKGXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuS8jVwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLpmYZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5p+SXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuaNjFwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLnjpZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09IDApXG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuinklwiO1xuICAgICAgICAgICAgICAgIGlmIChpID09IDEpXG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuWIhlwiO1xuICAgICAgICAgICAgICAgIG5ld2NoYXIgPSBuZXdjaGFyICsgdGVtcGNoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/mm7/mjaLmiYDmnInml6DnlKjmsYnlrZdcbiAgICAgICAgd2hpbGUgKG5ld2NoYXIuc2VhcmNoKFwi6Zu26Zu2XCIpICE9IC0xKSB7XG4gICAgICAgICAgICBuZXdjaGFyID0gbmV3Y2hhci5yZXBsYWNlKFwi6Zu26Zu2XCIsIFwi6Zu2XCIpLnJlcGxhY2UoXCLpm7bkur9cIiwgXCLkur9cIikucmVwbGFjZShcIuS6v+S4h1wiLCBcIuS6v1wiKS5yZXBsYWNlKFwi6Zu25LiHXCIsIFwi5LiHXCIpLnJlcGxhY2UoXCLpm7blhYNcIiwgXCLlhYNcIikucmVwbGFjZShcIumbtuinklwiLCBcIlwiKS5yZXBsYWNlKFwi6Zu25YiGXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdjaGFyLmNoYXJBdChuZXdjaGFyLmxlbmd0aCAtIDEpID09IFwi5YWDXCIpIHtcbiAgICAgICAgICAgIG5ld2NoYXIgPSBuZXdjaGFyICsgXCLmlbRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3Y2hhcjtcbiAgICB9O1xuICAgIHJldHVybiBtb2R1bGVzO1xufShiYXNlXzEuQmFzZU1vZCkpO1xuZXhwb3J0cy5OdW1iZXJNb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcbnZhciBtb2R1bGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhtb2R1bGVzLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIG1vZHVsZXMoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOagvOW8j+WMluaXpeacn1xuICAgICAqIEBwYXJhbSB7YW55fSBkYXRlIOaXtumXtOaIs+aIluaXpeacn1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOm7mOiupO+8mnl5eXktTU0tZGQgaGg6bW06c3NcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmZvcm1hdERhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgdHlwZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoKGRhdGUgKyAnJykubGVuZ3RoID09PSAxMCkge1xuICAgICAgICAgICAgZGF0ZSA9IE51bWJlcihkYXRlKSAqIDEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZvcm1hdCA9IHR5cGUgfHwgJ3l5eXktTU0tZGQgaGg6bW06c3MnLCB0ZW1wZGF0ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGVtcGRhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGVtcGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZm9ybWF0T2JqID0ge1xuICAgICAgICAgICAgeXl5eTogdGVtcGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIE1NOiB0ZW1wZGF0ZS5nZXRNb250aCgpICsgMSxcbiAgICAgICAgICAgIGRkOiB0ZW1wZGF0ZS5nZXREYXRlKCksXG4gICAgICAgICAgICBoaDogdGVtcGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgIG1tOiB0ZW1wZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICAgICAgICBzczogdGVtcGRhdGUuZ2V0U2Vjb25kcygpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvKHl5eXl8TU18ZGR8aGh8bW18c3MpKy9nLCBmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGZvcm1hdE9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwICYmIHZhbHVlIDwgMTApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICcwJyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIHx8IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOagvOW8j+WMluaXtuWIhuenklxuICAgICAqIEBwYXJhbSB7YW55fSBkYXRlIOaXtumXtOaIs1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZm9ybWF0VGltZSA9IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgIHZhciB0ZW1wID0gJyc7XG4gICAgICAgIGlmICh0aW1lID49IDM2MDApIHtcbiAgICAgICAgICAgIHRlbXAgPSBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKSArICflsI/ml7YnICsgTWF0aC5mbG9vcih0aW1lICUgMzYwMCAvIDYwKSArICfliIYnICsgdGltZSAlIDYwICsgJ+enkic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGltZSA+PSA2MCkge1xuICAgICAgICAgICAgdGVtcCA9IE1hdGguZmxvb3IodGltZSAvIDYwKSArICfliIYnICsgdGltZSAlIDYwICsgJ+enkic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wID0gdGltZSAlIDYwICsgJ+enkic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5Lik5Liq5pel5pyf6Ze05beu5YC8XG4gICAgICogQHBhcmFtIHsqfSBzdGFydERhdGVcbiAgICAgKiBAcGFyYW0geyp9IGVuZERhdGVcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldERheU1pbnVzID0gZnVuY3Rpb24gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoTnVtYmVyKG5ldyBEYXRlKGVuZERhdGUpKSAtIE51bWJlcihuZXcgRGF0ZShzdGFydERhdGUpKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluafkOW5tOacieWkmuWwkeWkqVxuICAgICAqIEBwYXJhbSB7Kn0geWVhciAxOTk5XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRZZWFyRGF5cyA9IGZ1bmN0aW9uICh5ZWFyKSB7XG4gICAgICAgIHZhciBkYXlzID0gMzY1O1xuICAgICAgICB0aGlzLmdldE1vbnRoRGF5cyh5ZWFyICsgJy0yJykgPT0gMjkgPyBkYXlzID0gMzY2IDogZGF5cztcbiAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5p+Q5bm05p+Q5pyI5pyJ5aSa5bCR5aSpXG4gICAgICogQHBhcmFtIHsqfSBkYXRlIDE5OTktMVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0TW9udGhEYXlzID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgdmFyIHllYXIgPSB0ZW1wLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBtb250aCA9IHRlbXAuZ2V0TW9udGgoKTtcbiAgICAgICAgcmV0dXJuIFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW21vbnRoXSB8fCAoX3N1cGVyLnByb3RvdHlwZS5pc0xlYXBZZWFyLmNhbGwodGhpcywgeWVhcikgPyAyOSA6IDI4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5bmn5DlubTmn5DlpKnmmK/nrKzlh6DlkahcbiAgICAgKiBAcGFyYW0geyp9IGRhdGUgMTk5OS0xLTFcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldFdoaWNoV2VlayA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciB0ZW1wID0gbmV3IERhdGUoZGF0ZSksIHllYXIgPSB0ZW1wLmdldEZ1bGxZZWFyKCksIG1vbnRoID0gdGVtcC5nZXRNb250aCgpLCBkYXlzID0gdGVtcC5nZXREYXRlKCk7XG4gICAgICAgIHZhciB5ZWFyRmlyc3REYXkgPSBuZXcgRGF0ZSh5ZWFyLCAwLCAxKS5nZXREYXkoKSB8fCA3O1xuICAgICAgICB2YXIgd2VlayA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgbW9udGg7IG0rKykge1xuICAgICAgICAgICAgZGF5cyArPSB0aGlzLmdldE1vbnRoRGF5cyh5ZWFyICsgJy0nICsgbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHllYXJGaXJzdERheSA9PSAxKSB7XG4gICAgICAgICAgICB3ZWVrID0gTWF0aC5jZWlsKGRheXMgLyB5ZWFyRmlyc3REYXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF5cyAtPSAoNyAtIHllYXJGaXJzdERheSArIDEpO1xuICAgICAgICAgICAgd2VlayA9IE1hdGguY2VpbChkYXlzIC8gNykgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3ZWVrO1xuICAgIH07XG4gICAgcmV0dXJuIG1vZHVsZXM7XG59KGJhc2VfMS5CYXNlTW9kKSk7XG5leHBvcnRzLkRhdGVNb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG1vZHVsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gbW9kdWxlcygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiDmlbDnu4TlhYPntKDljrvph41cbiAgICAgICAgICogQHBhcmFtIHtBcnJheSA8IGFueSA+fSBhcnJcbiAgICAgICAgICogQHJldHVybnMge0FycmF5IDwgYW55ID59XG4gICAgICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyclVuaXF1ZSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0ZW1wLmluZGV4T2YoYXJyW2ldKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRlbXAucHVzaChhcnJbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaVsOe7hOWFg+e0oOaOkuW6j1xuICAgICAqIEBwYXJhbSB7Kn0gYXJyIOaVsOe7hFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIDEt6ZmN5bqPICAyLeWNh+W6jyAgMy3pmo/mnLpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkgPCBhbnkgPn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJTb3J0ID0gZnVuY3Rpb24gKGFyciwgdHlwZSkge1xuICAgICAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yig6Zmk5oyH5a6a55qE5pWw57uE5YWD57SgXG4gICAgICogQHBhcmFtIHtBcnJheSA8IGFueSA+fSBhcnJcbiAgICAgKiBAcGFyYW0geyp9IGVsZVxuICAgICAqIEByZXR1cm5zIHtBcnJheSA8IGFueSA+fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyclJlbW92ZSA9IGZ1bmN0aW9uIChhcnIsIGVsZSkge1xuICAgICAgICB2YXIgaSA9IGFyci5pbmRleE9mKGVsZSk7XG4gICAgICAgIGkgPiAtMSA/IGFyci5zcGxpY2UoaSwgMSkgOiBudWxsO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+W+l+S4pOS4quaVsOe7hOeahOW5tumbhlxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBhbnkgPn0gYVxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBhbnkgPn0gYlxuICAgICAqIEByZXR1cm5zIHtBcnJheSA8IGFueSA+fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyclVuaW9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyVW5pcXVlKGEuY29uY2F0KGIpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflvpfkuKTkuKrmlbDnu4TnmoTkuqTpm4ZcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgYW55ID59IGFcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgYW55ID59IGJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkgPCBhbnkgPn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJJbnRlcnNlY3QgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmluZGV4T2YodikgIT09IC0xO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDnu4TlhYPntKDmnIDlpKflgLzvvIhudW1iZXLvvIlcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgbnVtYmVyID59IGFyclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyTWF4ID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgYXJyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDnu4TlhYPntKDmnIDlsI/lgLzvvIhudW1iZXLvvIlcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgbnVtYmVyID59IGFyclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyTWluID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgYXJyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDnu4TlhYPntKDmsYLlkozvvIhudW1iZXLvvIlcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgbnVtYmVyID59IGFyclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyU3VtID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAocHJlLCBjdXIpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmUgKyBjdXI7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaVsOe7hOWFg+e0oOW5s+Wdh+WAvO+8iG51bWJlcu+8iVxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBudW1iZXIgPn0gYXJyXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJBdmVyYWdlID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJTdW0oYXJyKSAvIGFyci5sZW5ndGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5ZCI5bm25Lik5Liq5a+56LGhXG4gICAgICogQHBhcmFtIHsqfSBhIOWvueixoVxuICAgICAqIEBwYXJhbSB7Kn0gYiDlr7nosaFcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLm1lcmdlSlNPTiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciB0ZW1wID0ge307XG4gICAgICAgIGlmIChhICYmIGIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gYikge1xuICAgICAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVtcCA9IGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5rex5ou36LSd5pWw57uE5oiW5a+56LGhXG4gICAgICogQHBhcmFtIHsob2JqZWN0IHwgQXJyYXkgPCBhbnkgPil9IG8g5pWw57uE5oiW5a+56LGhXG4gICAgICogQHJldHVybnMgeyhvYmplY3QgfCBBcnJheSA8IGFueSA+KX1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5kZWVwQ29weSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG8pKTtcbiAgICB9O1xuICAgIHJldHVybiBtb2R1bGVzO1xufSgpKTtcbmV4cG9ydHMuQXJyYXlNb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG1vZHVsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gbW9kdWxlcygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGh0bWzovazmiJDlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0geyp9IGh0bWxET00gaHRtbERPTVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuaHRtbFRvU3Rpcm5nID0gZnVuY3Rpb24gKGh0bWxET00pIHtcbiAgICAgICAgdmFyIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0ZW1wLmFwcGVuZENoaWxkKGh0bWxET00pO1xuICAgICAgICByZXR1cm4gdGVtcC5pbm5lckhUTUw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5a2X56ym5Liy6L2saHRtbFxuICAgICAqIEBwYXJhbSB7Kn0gaHRtbFN0cmluZyBodG1s5a2X56ym5LiyXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuc3RyaW5nVG9IdG1sID0gZnVuY3Rpb24gKGh0bWxTdHJpbmcpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0ZW1wLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgICAgIHJldHVybiB0ZW1wLmNoaWxkcmVuWzBdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPlnVybOS4reaMh+WumuWPguaVsOWAvFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbSDlj4LmlbDlkI3np7BcbiAgICAgKiBAcmV0dXJucyB7KHN0cmluZyB8IG51bGwpfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldFF1ZXJ5UGFyYW0gPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgdmFyIHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5tYXRjaChuZXcgUmVnRXhwKFwiKF58JilcIiArIHBhcmFtICsgXCI9KFteJl0qKSgmfCQpXCIpKTsgLy9zZWFyY2gs5p+l6K+i77yf5ZCO6Z2i55qE5Y+C5pWw77yM5bm25Yy56YWN5q2j5YiZXG4gICAgICAgIGlmIChyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoclsyXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOmaj+acuueUn+aIkOiJsuWAvFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0UmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnIycgK1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoY29sb3IgKz0gJzAxMjM0NTY3ODlhYmNkZWYnW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV0pICYmXG4gICAgICAgICAgICAgICAgICAgIChjb2xvci5sZW5ndGggPT0gNikgPyBjb2xvciA6IGFyZ3VtZW50cy5jYWxsZWUoY29sb3IpO1xuICAgICAgICAgICAgfSkoJycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluW9k+WJjea1j+iniOWZqOeJiOacrFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldEJyb3dzZXJUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgdmFyIGlzT3BlcmEgPSB1c2VyQWdlbnQuaW5kZXhPZihcIk9wZXJhXCIpID4gLTE7XG4gICAgICAgIHZhciBpc0lFID0gdXNlckFnZW50LmluZGV4T2YoXCJjb21wYXRpYmxlXCIpID4gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpID4gLTEgJiYgIWlzT3BlcmE7XG4gICAgICAgIHZhciBpc0lFMTEgPSB1c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpID4gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoXCJydjoxMS4wXCIpID4gLTE7XG4gICAgICAgIHZhciBpc0VkZ2UgPSB1c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2VcIikgPiAtMSAmJiAhaXNJRTtcbiAgICAgICAgdmFyIGlzRkYgPSB1c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIikgPiAtMTtcbiAgICAgICAgdmFyIGlzU2FmYXJpID0gdXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIikgPiAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKSA9PSAtMTtcbiAgICAgICAgdmFyIGlzQ2hyb21lID0gdXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWVcIikgPiAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKSA+IC0xO1xuICAgICAgICBpZiAoaXNJRSkge1xuICAgICAgICAgICAgdmFyIHJlSUUgPSBuZXcgUmVnRXhwKFwiTVNJRSAoXFxcXGQrXFxcXC5cXFxcZCspO1wiKTtcbiAgICAgICAgICAgIHJlSUUudGVzdCh1c2VyQWdlbnQpO1xuICAgICAgICAgICAgdmFyIGZJRVZlcnNpb24gPSBwYXJzZUZsb2F0KFJlZ0V4cFtcIiQxXCJdKTtcbiAgICAgICAgICAgIGlmIChmSUVWZXJzaW9uID09IDcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSUU3XCI7XG4gICAgICAgICAgICBlbHNlIGlmIChmSUVWZXJzaW9uID09IDgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSUU4XCI7XG4gICAgICAgICAgICBlbHNlIGlmIChmSUVWZXJzaW9uID09IDkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSUU5XCI7XG4gICAgICAgICAgICBlbHNlIGlmIChmSUVWZXJzaW9uID09IDEwKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIklFMTBcIjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJRTfku6XkuItcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNJRTExKVxuICAgICAgICAgICAgcmV0dXJuICdJRTExJztcbiAgICAgICAgaWYgKGlzRWRnZSlcbiAgICAgICAgICAgIHJldHVybiBcIkVkZ2VcIjtcbiAgICAgICAgaWYgKGlzRkYpXG4gICAgICAgICAgICByZXR1cm4gXCJGRlwiO1xuICAgICAgICBpZiAoaXNPcGVyYSlcbiAgICAgICAgICAgIHJldHVybiBcIk9wZXJhXCI7XG4gICAgICAgIGlmIChpc1NhZmFyaSlcbiAgICAgICAgICAgIHJldHVybiBcIlNhZmFyaVwiO1xuICAgICAgICBpZiAoaXNDaHJvbWUpXG4gICAgICAgICAgICByZXR1cm4gXCJDaHJvbWVcIjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5bnm7jlr7not6/lvoTnmoTnu53lr7not6/lvoRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIOebuOWvuei3r+W+hFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IOe7neWvuei3r+W+hFxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnJlbGF0aXZlUGF0aFRvRnVsbFBhdGggPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IHVybDsgLy8g6K6+572u55u45a+56Lev5b6E57uZaW1hZ2UsIOatpOaXtuS8muWPkemAgeWHuuivt+axglxuICAgICAgICB1cmwgPSBpbWcuc3JjOyAvLyDmraTml7bnm7jlr7not6/lvoTlt7Lnu4/lj5jmiJDnu53lr7not6/lvoRcbiAgICAgICAgaW1nLnNyYyA9ICcnOyAvLyDlj5bmtojor7fmsYJcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9O1xuICAgIDtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5qCh6aqM5a+G56CB5by65bqmKOmAmueUqClcbiAgICAgKiBAcGFyYW0geyp9IHN0ciDlrZfnrKbkuLJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmNoZWNrUHdkID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICB2YXIgbGV2ZWwgPSAwO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIHJldHVybiBsZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1swLTldLy50ZXN0KHN0cikpIHtcbiAgICAgICAgICAgIGxldmVsKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9bYS16XS8udGVzdChzdHIpKSB7XG4gICAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvW0EtWl0vLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgbGV2ZWwrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1tcXC58LXxfXS8udGVzdChzdHIpKSB7XG4gICAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZXZlbDtcbiAgICB9O1xuICAgIHJldHVybiBtb2R1bGVzO1xufSgpKTtcbmV4cG9ydHMuT3RoZXJNb2QgPSBtb2R1bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==