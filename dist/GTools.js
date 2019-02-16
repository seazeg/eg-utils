(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-common-demo"] = factory();
	else
		root["myDemo"] = factory();
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

Object.defineProperty(exports, "__esModule", { value: true });
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
    return Modules;
}());
exports.BaseMod = Modules;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __webpack_require__(0);
var string_1 = __webpack_require__(2);
var number_1 = __webpack_require__(3);
var date_1 = __webpack_require__(4);
var array_1 = __webpack_require__(5);
var other_1 = __webpack_require__(6);
/**
 * @description 入口主函数
 * @class Core
 */
var GTools = /** @class */ (function () {
    function GTools(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.options = options;
    }
    GTools.init = function () {
        return (new this).merge();
    };
    GTools.prototype._extend = function (target, source) {
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
    GTools.prototype.merge = function () {
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
    return GTools;
}());
// interface Global extends Window {
//     GTools: any
// }
// (<Global>window).GTools = GTools.init();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var modules = /** @class */ (function () {
    function modules() {
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
    return modules;
}());
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
Object.defineProperty(exports, "__esModule", { value: true });
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
Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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
    return modules;
}());
exports.OtherMod = modules;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teURlbW8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL215RGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teURlbW8vLi9zcmMvbW9kdWxlL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vbXlEZW1vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL215RGVtby8uL3NyYy9tb2R1bGUvc3RyaW5nLnRzIiwid2VicGFjazovL215RGVtby8uL3NyYy9tb2R1bGUvbnVtYmVyLnRzIiwid2VicGFjazovL215RGVtby8uL3NyYy9tb2R1bGUvZGF0ZS50cyIsIndlYnBhY2s6Ly9teURlbW8vLi9zcmMvbW9kdWxlL2FycmF5LnRzIiwid2VicGFjazovL215RGVtby8uL3NyYy9tb2R1bGUvb3RoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDbElhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHNHQUFzRztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6IkdUb29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm15LWNvbW1vbi1kZW1vXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm15RGVtb1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTW9kdWxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2R1bGVzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5a2X56ym5Liy57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ1N0cmluZyc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5a2X56ym5Liy57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ051bWJlcic7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5patc3RyaW5n57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzQm9vbGVhbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdCb29sZWFuJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1GdW5jdGlvbuexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0Z1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ0Z1bmN0aW9uJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1udWxs57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzTnVsbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdOdWxsJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq11bmRlZmluZWTnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNVbmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnVW5kZWZpbmVkJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1vYmplY3TnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNPYmogPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0JztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1hcnJheeexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0FycmF5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ0FycmF5JztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1kYXRl57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzRGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdEYXRlJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1yZWdFeHDnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNSZWdFeHAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnUmVnRXhwJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1lcnJvcuexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBNb2R1bGVzLnByb3RvdHlwZS5pc0Vycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ0Vycm9yJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1zeW1ib2znsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNTeW1ib2wgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnU3ltYm9sJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1wcm9taXNl57G75Z6LXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzUHJvbWlzZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkgPT09ICdQcm9taXNlJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq1zZXTnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNTZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSAnU2V0JztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbkuLrnqbpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSBcIlwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreaYr+WQpuS4umlvc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzSW9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9cXChpW147XSs7KCBVOyk/IENQVS4rTWFjIE9TIFgvKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbkuLphbmRyb2lkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgTW9kdWxlcy5wcm90b3R5cGUuaXNBbmRyb2lkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAtMSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0xpbnV4JykgPiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3mmK/lkKbkuLpwY+err1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzUEMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmbGFnID0gdHJ1ZTtcbiAgICAgICAgdmFyIHVzZXJBZ2VudEluZm8gPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICB2YXIgQWdlbnRzID0gW1wiQW5kcm9pZFwiLCBcImlQaG9uZVwiLFxuICAgICAgICAgICAgXCJTeW1iaWFuT1NcIiwgXCJXaW5kb3dzIFBob25lXCIsXG4gICAgICAgICAgICBcImlQYWRcIiwgXCJpUG9kXCJcbiAgICAgICAgXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBBZ2VudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh1c2VyQWdlbnRJbmZvLmluZGV4T2YoQWdlbnRzW2ldKSA+IDApIHtcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZsYWc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yik5pat5piv5ZCm5Li66Zew5bm0XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIE1vZHVsZXMucHJvdG90eXBlLmlzTGVhcFllYXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAlIDQwMCA9PSAwKSB8fCAodmFsdWUgJSA0ID09IDAgJiYgdmFsdWUgJSAxMDAgIT0gMCk7XG4gICAgfTtcbiAgICByZXR1cm4gTW9kdWxlcztcbn0oKSk7XG5leHBvcnRzLkJhc2VNb2QgPSBNb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYmFzZV8xID0gcmVxdWlyZShcIi4vbW9kdWxlL2Jhc2VcIik7XG52YXIgc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9tb2R1bGUvc3RyaW5nXCIpO1xudmFyIG51bWJlcl8xID0gcmVxdWlyZShcIi4vbW9kdWxlL251bWJlclwiKTtcbnZhciBkYXRlXzEgPSByZXF1aXJlKFwiLi9tb2R1bGUvZGF0ZVwiKTtcbnZhciBhcnJheV8xID0gcmVxdWlyZShcIi4vbW9kdWxlL2FycmF5XCIpO1xudmFyIG90aGVyXzEgPSByZXF1aXJlKFwiLi9tb2R1bGUvb3RoZXJcIik7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiDlhaXlj6PkuLvlh73mlbBcbiAqIEBjbGFzcyBDb3JlXG4gKi9cbnZhciBHVG9vbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR1Rvb2xzKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgR1Rvb2xzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAobmV3IHRoaXMpLm1lcmdlKCk7XG4gICAgfTtcbiAgICBHVG9vbHMucHJvdG90eXBlLl9leHRlbmQgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0YXJnZXQpID09PSAnW29iamVjdCBPYmplY3RdJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc291cmNlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHRhcmdldFtrZXldICYmIHRhcmdldFtrZXldLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBPYmplY3RdXCIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHRlbmQodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKSA6IHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRhcmdldCkgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNvdXJjZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5jb25jYXQoc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgR1Rvb2xzLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1vZHVsZXMgPSB7XG4gICAgICAgICAgICAnQmFzZU1vZCc6IGJhc2VfMS5CYXNlTW9kLFxuICAgICAgICAgICAgJ1N0cmluZ01vZCc6IHN0cmluZ18xLlN0cmluZ01vZCxcbiAgICAgICAgICAgICdOdW1iZXJNb2QnOiBudW1iZXJfMS5OdW1iZXJNb2QsXG4gICAgICAgICAgICAnRGF0ZU1vZCc6IGRhdGVfMS5EYXRlTW9kLFxuICAgICAgICAgICAgJ0FycmF5TW9kJzogYXJyYXlfMS5BcnJheU1vZCxcbiAgICAgICAgICAgICdPdGhlck1vZCc6IG90aGVyXzEuT3RoZXJNb2RcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBtIGluIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMuX2V4dGVuZChyZXMsIG5ldyBtb2R1bGVzW21dKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgcmV0dXJuIEdUb29scztcbn0oKSk7XG4vLyBpbnRlcmZhY2UgR2xvYmFsIGV4dGVuZHMgV2luZG93IHtcbi8vICAgICBHVG9vbHM6IGFueVxuLy8gfVxuLy8gKDxHbG9iYWw+d2luZG93KS5HVG9vbHMgPSBHVG9vbHMuaW5pdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbW9kdWxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBtb2R1bGVzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Y675a2X56ym5Liy56m65qC8XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciDlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSAxLeaJgOacieepuuagvCAgMi3liY3lkI7nqbrmoLwgIDMt5YmN56m65qC8IDQt5ZCO56m65qC8XG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24gKHN0ciwgdHlwZSkge1xuICAgICAgICB0eXBlID0gdHlwZSB8fCAxO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgXCJcIik7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXlxccyopL2csIFwiXCIpO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOabv+aNouWtl+espuS4suS4reaJgOacieaMh+WumuWtl+esplxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg5YaF5a65XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJlZm9yZVN0ciDpnIDopoHmm7/mjaLlrZfnrKZcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWZ0ZXJTdHIg5pu/5o2i5oiQ55qE5a2X56ymXG4gICAgICogQHJldHVybnMgeyhzdHJpbmcpfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbiAoc3RyLCBiZWZvcmVTdHIsIGFmdGVyU3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGJlZm9yZVN0ciwgJ2dtJyksIGFmdGVyU3RyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmm7/mjaLooqvmiKrlj5blrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIOWGheWuuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdWJTdGFydCDmiKrlj5blvIDlp4vkvY3nva5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ViRW5kIOaIquWPlue7k+adn+S9jee9rlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiZWZvcmVTdHIg6ZyA6KaB5pu/5o2i5a2X56ymXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFmdGVyU3RyIOabv+aNouaIkOeahOWtl+esplxuICAgICAqIEByZXR1cm5zIHsoc3RyaW5nKX1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5yZXBsYWNlU3ViU3RyaW5nID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBvcHRpb25zLnN0ci5zdWJzdHJpbmcob3B0aW9ucy5zdWJTdGFydCwgb3B0aW9ucy5zdWJFbmQpO1xuICAgICAgICByZXR1cm4gdGVtcC5yZXBsYWNlKG9wdGlvbnMuYmVmb3JlU3RyLCBvcHRpb25zLmFmdGVyU3RyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDov4fmu6RodG1s5pON5L2c56ymXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5maWx0ZXJIdG1sQ29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgdmFyIHRlbXAgPSB7XG4gICAgICAgICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICAgICAgICc+JzogJyZndCcsXG4gICAgICAgICAgICAnJic6ICcmYW1wOycsXG4gICAgICAgICAgICAnKCc6ICcmIzQwOycsXG4gICAgICAgICAgICAnKSc6ICcmIzQxOycsXG4gICAgICAgICAgICAnICc6ICcmbmJzcDsnLFxuICAgICAgICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAgICAgICAnXFwnJzogXCImIzM5O1wiXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvWzw+JnwoKSAnXCJdL2csIGZ1bmN0aW9uIChjaHIpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wW2Nocl07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIG1vZHVsZXM7XG59KCkpO1xuZXhwb3J0cy5TdHJpbmdNb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xudmFyIG1vZHVsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKG1vZHVsZXMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gbW9kdWxlcygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g55Sf5oiQ5oyH5a6a5L2N5pWw55qE6ZqP5py65pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBsYWNlUmFuZ2Ug5L2N5pWwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJldHVyblR5cGVcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldFBsYWNlUmFuZG9tTnVtID0gZnVuY3Rpb24gKHBsYWNlUmFuZ2UsIHJldHVyblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblR5cGUgPT0gXCJmbG9hdFwiID8gTWF0aC5yYW5kb20oKSAqIHBsYWNlUmFuZ2UgOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHBsYWNlUmFuZ2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOeUn+aIkOaMh+WumuiMg+WbtOeahOmaj+acuuaVsFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4g5pyA5bCP5YC8XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCDmnIDlpKflgLxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldFJhbmdlUmFuZG9tTnVtID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAoKG1heCArIDEpIC0gbWluKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5qC85byP5YyW5oiQ6LSn5biB5qC85byPXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRGb3JtYXRDdXJyZW5jeSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKS5yZXBsYWNlKC8oXFxkezN9KD89XFxkKSg/IVxcZCtcXC58JCkpL2csICckMSwnKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOi9rOaNouaIkOWkp+WGmei0p+W4geagvOW8j1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUg6LSn5biB6YeR6aKdXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5jaGFuZ2VUb0NobkN1cnJlbmN5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICAvL+i/h+a7pOS8oOWFpeWAvOeahOaXoOeUqOWtl+esplxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLywvZywgXCJcIikucmVwbGFjZSgvIC9nLCBcIlwiKS5yZXBsYWNlKC/vv6UvZywgXCJcIik7XG4gICAgICAgIC8v6aqM6K+B6L6T5YWl55qE5a2X56ym5piv5ZCm5Li65pWw5a2XXG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgLy/lrZfnrKblpITnkIblrozmr5XlkI7lvIDlp4vovazmjaJcbiAgICAgICAgdmFyIHBhcnQgPSBTdHJpbmcodmFsdWUpLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgdmFyIG5ld2NoYXIgPSBcIlwiO1xuICAgICAgICAvL+Wwj+aVsOeCueWJjei/m+ihjOi9rOWMllxuICAgICAgICBmb3IgKHZhciBpID0gcGFydFswXS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHBhcnRbMF0ubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0ZW1wY2hhciA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgb2xkY2hhciA9IHBhcnRbMF0uY2hhckF0KGkpO1xuICAgICAgICAgICAgc3dpdGNoIChvbGRjaGFyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIumbtlwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLlo7lcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi6LSwXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuWPgVwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLogoZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5LyNXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIumZhlwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLmn5JcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5o2MXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjlcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIueOllwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChwYXJ0WzBdLmxlbmd0aCAtIGkgLSAxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLlhYNcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkY2hhciAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5ou+XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZGNoYXIgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuS9sFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRjaGFyICE9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLku59cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLkuIdcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkY2hhciAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5ou+XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZGNoYXIgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gdGVtcGNoYXIgKyBcIuS9sFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRjaGFyICE9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLku59cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLkur9cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IHRlbXBjaGFyICsgXCLmi75cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdjaGFyID0gdGVtcGNoYXIgKyBuZXdjaGFyO1xuICAgICAgICB9XG4gICAgICAgIC8v5bCP5pWw54K55LmL5ZCO6L+b6KGM6L2s5YyWXG4gICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKFwiLlwiKSAhPSAtMSkge1xuICAgICAgICAgICAgaWYgKHBhcnRbMV0ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIC8v5L+d55WZ5Lik5L2N5bCP5pWwXG4gICAgICAgICAgICAgICAgcGFydFsxXSA9IHBhcnRbMV0uc3Vic3RyKDAsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0WzFdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBjaGFyID0gXCJcIjtcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2hhciA9IHBhcnRbMV0uY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocGVyY2hhcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIumbtlwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLlo7lcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi6LSwXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIuWPgVwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLogoZcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5LyNXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIumZhlwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBjaGFyID0gXCLmn5JcIiArIHRlbXBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI4XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY2hhciA9IFwi5o2MXCIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiOVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSBcIueOllwiICsgdGVtcGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMClcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi6KeSXCI7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgdGVtcGNoYXIgPSB0ZW1wY2hhciArIFwi5YiGXCI7XG4gICAgICAgICAgICAgICAgbmV3Y2hhciA9IG5ld2NoYXIgKyB0ZW1wY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+abv+aNouaJgOacieaXoOeUqOaxieWtl1xuICAgICAgICB3aGlsZSAobmV3Y2hhci5zZWFyY2goXCLpm7bpm7ZcIikgIT0gLTEpIHtcbiAgICAgICAgICAgIG5ld2NoYXIgPSBuZXdjaGFyLnJlcGxhY2UoXCLpm7bpm7ZcIiwgXCLpm7ZcIikucmVwbGFjZShcIumbtuS6v1wiLCBcIuS6v1wiKS5yZXBsYWNlKFwi5Lq/5LiHXCIsIFwi5Lq/XCIpLnJlcGxhY2UoXCLpm7bkuIdcIiwgXCLkuIdcIikucmVwbGFjZShcIumbtuWFg1wiLCBcIuWFg1wiKS5yZXBsYWNlKFwi6Zu26KeSXCIsIFwiXCIpLnJlcGxhY2UoXCLpm7bliIZcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld2NoYXIuY2hhckF0KG5ld2NoYXIubGVuZ3RoIC0gMSkgPT0gXCLlhYNcIikge1xuICAgICAgICAgICAgbmV3Y2hhciA9IG5ld2NoYXIgKyBcIuaVtFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdjaGFyO1xuICAgIH07XG4gICAgcmV0dXJuIG1vZHVsZXM7XG59KGJhc2VfMS5CYXNlTW9kKSk7XG5leHBvcnRzLk51bWJlck1vZCA9IG1vZHVsZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XG52YXIgbW9kdWxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMobW9kdWxlcywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBtb2R1bGVzKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmoLzlvI/ljJbml6XmnJ9cbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0ZSDml7bpl7TmiLPmiJbml6XmnJ9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDpu5jorqTvvJp5eXl5LU1NLWRkIGhoOm1tOnNzXG4gICAgICogQHJldHVybnMge2FueX1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5mb3JtYXREYXRlID0gZnVuY3Rpb24gKGRhdGUsIHR5cGUpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKChkYXRlICsgJycpLmxlbmd0aCA9PT0gMTApIHtcbiAgICAgICAgICAgIGRhdGUgPSBOdW1iZXIoZGF0ZSkgKiAxMDAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmb3JtYXQgPSB0eXBlIHx8ICd5eXl5LU1NLWRkIGhoOm1tOnNzJywgdGVtcGRhdGU7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRlbXBkYXRlID0gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZvcm1hdE9iaiA9IHtcbiAgICAgICAgICAgIHl5eXk6IHRlbXBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBNTTogdGVtcGRhdGUuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgICAgICBkZDogdGVtcGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgaGg6IHRlbXBkYXRlLmdldEhvdXJzKCksXG4gICAgICAgICAgICBtbTogdGVtcGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgc3M6IHRlbXBkYXRlLmdldFNlY29uZHMoKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyh5eXl5fE1NfGRkfGhofG1tfHNzKSsvZywgZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBmb3JtYXRPYmpba2V5XTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCAmJiB2YWx1ZSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnMCcgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSB8fCAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmoLzlvI/ljJbml7bliIbnp5JcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0ZSDml7bpl7TmiLNcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmZvcm1hdFRpbWUgPSBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICB2YXIgdGVtcCA9ICcnO1xuICAgICAgICBpZiAodGltZSA+PSAzNjAwKSB7XG4gICAgICAgICAgICB0ZW1wID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCkgKyAn5bCP5pe2JyArIE1hdGguZmxvb3IodGltZSAlIDM2MDAgLyA2MCkgKyAn5YiGJyArIHRpbWUgJSA2MCArICfnp5InO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRpbWUgPj0gNjApIHtcbiAgICAgICAgICAgIHRlbXAgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCkgKyAn5YiGJyArIHRpbWUgJSA2MCArICfnp5InO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGVtcCA9IHRpbWUgJSA2MCArICfnp5InO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluS4pOS4quaXpeacn+mXtOW3ruWAvFxuICAgICAqIEBwYXJhbSB7Kn0gc3RhcnREYXRlXG4gICAgICogQHBhcmFtIHsqfSBlbmREYXRlXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXREYXlNaW51cyA9IGZ1bmN0aW9uIChzdGFydERhdGUsIGVuZERhdGUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKE51bWJlcihuZXcgRGF0ZShlbmREYXRlKSkgLSBOdW1iZXIobmV3IERhdGUoc3RhcnREYXRlKSkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5bmn5DlubTmnInlpJrlsJHlpKlcbiAgICAgKiBAcGFyYW0geyp9IHllYXIgMTk5OVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0WWVhckRheXMgPSBmdW5jdGlvbiAoeWVhcikge1xuICAgICAgICB2YXIgZGF5cyA9IDM2NTtcbiAgICAgICAgdGhpcy5nZXRNb250aERheXMoeWVhciArICctMicpID09IDI5ID8gZGF5cyA9IDM2NiA6IGRheXM7XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluafkOW5tOafkOaciOacieWkmuWwkeWkqVxuICAgICAqIEBwYXJhbSB7Kn0gZGF0ZSAxOTk5LTFcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmdldE1vbnRoRGF5cyA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciB0ZW1wID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIHZhciB5ZWFyID0gdGVtcC5nZXRGdWxsWWVhcigpO1xuICAgICAgICB2YXIgbW9udGggPSB0ZW1wLmdldE1vbnRoKCk7XG4gICAgICAgIHJldHVybiBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVttb250aF0gfHwgKF9zdXBlci5wcm90b3R5cGUuaXNMZWFwWWVhci5jYWxsKHRoaXMsIHllYXIpID8gMjkgOiAyOCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5p+Q5bm05p+Q5aSp5piv56ys5Yeg5ZGoXG4gICAgICogQHBhcmFtIHsqfSBkYXRlIDE5OTktMS0xXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRXaGljaFdlZWsgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICB2YXIgdGVtcCA9IG5ldyBEYXRlKGRhdGUpLCB5ZWFyID0gdGVtcC5nZXRGdWxsWWVhcigpLCBtb250aCA9IHRlbXAuZ2V0TW9udGgoKSwgZGF5cyA9IHRlbXAuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgeWVhckZpcnN0RGF5ID0gbmV3IERhdGUoeWVhciwgMCwgMSkuZ2V0RGF5KCkgfHwgNztcbiAgICAgICAgdmFyIHdlZWsgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBtID0gMDsgbSA8IG1vbnRoOyBtKyspIHtcbiAgICAgICAgICAgIGRheXMgKz0gdGhpcy5nZXRNb250aERheXMoeWVhciArICctJyArIG0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ZWFyRmlyc3REYXkgPT0gMSkge1xuICAgICAgICAgICAgd2VlayA9IE1hdGguY2VpbChkYXlzIC8geWVhckZpcnN0RGF5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRheXMgLT0gKDcgLSB5ZWFyRmlyc3REYXkgKyAxKTtcbiAgICAgICAgICAgIHdlZWsgPSBNYXRoLmNlaWwoZGF5cyAvIDcpICsgMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2VlaztcbiAgICB9O1xuICAgIHJldHVybiBtb2R1bGVzO1xufShiYXNlXzEuQmFzZU1vZCkpO1xuZXhwb3J0cy5EYXRlTW9kID0gbW9kdWxlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG1vZHVsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gbW9kdWxlcygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiDmlbDnu4TlhYPntKDljrvph41cbiAgICAgICAgICogQHBhcmFtIHtBcnJheSA8IGFueSA+fSBhcnJcbiAgICAgICAgICogQHJldHVybnMge0FycmF5IDwgYW55ID59XG4gICAgICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyclVuaXF1ZSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0ZW1wLmluZGV4T2YoYXJyW2ldKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRlbXAucHVzaChhcnJbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaVsOe7hOWFg+e0oOaOkuW6j1xuICAgICAqIEBwYXJhbSB7Kn0gYXJyIOaVsOe7hFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIDEt6ZmN5bqPICAyLeWNh+W6jyAgMy3pmo/mnLpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkgPCBhbnkgPn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJTb3J0ID0gZnVuY3Rpb24gKGFyciwgdHlwZSkge1xuICAgICAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yig6Zmk5oyH5a6a55qE5pWw57uE5YWD57SgXG4gICAgICogQHBhcmFtIHtBcnJheSA8IGFueSA+fSBhcnJcbiAgICAgKiBAcGFyYW0geyp9IGVsZVxuICAgICAqIEByZXR1cm5zIHtBcnJheSA8IGFueSA+fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyclJlbW92ZSA9IGZ1bmN0aW9uIChhcnIsIGVsZSkge1xuICAgICAgICB2YXIgaSA9IGFyci5pbmRleE9mKGVsZSk7XG4gICAgICAgIGkgPiAtMSA/IGFyci5zcGxpY2UoaSwgMSkgOiBudWxsO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+W+l+S4pOS4quaVsOe7hOeahOW5tumbhlxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBhbnkgPn0gYVxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBhbnkgPn0gYlxuICAgICAqIEByZXR1cm5zIHtBcnJheSA8IGFueSA+fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLmFyclVuaW9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyVW5pcXVlKGEuY29uY2F0KGIpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflvpfkuKTkuKrmlbDnu4TnmoTkuqTpm4ZcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgYW55ID59IGFcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgYW55ID59IGJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkgPCBhbnkgPn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJJbnRlcnNlY3QgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmluZGV4T2YodikgIT09IC0xO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDnu4TlhYPntKDmnIDlpKflgLzvvIhudW1iZXLvvIlcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgbnVtYmVyID59IGFyclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyTWF4ID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgYXJyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDnu4TlhYPntKDmnIDlsI/lgLzvvIhudW1iZXLvvIlcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgbnVtYmVyID59IGFyclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyTWluID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgYXJyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmlbDnu4TlhYPntKDmsYLlkozvvIhudW1iZXLvvIlcbiAgICAgKiBAcGFyYW0ge0FycmF5IDwgbnVtYmVyID59IGFyclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuYXJyU3VtID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAocHJlLCBjdXIpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmUgKyBjdXI7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaVsOe7hOWFg+e0oOW5s+Wdh+WAvO+8iG51bWJlcu+8iVxuICAgICAqIEBwYXJhbSB7QXJyYXkgPCBudW1iZXIgPn0gYXJyXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5hcnJBdmVyYWdlID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJTdW0oYXJyKSAvIGFyci5sZW5ndGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5ZCI5bm25Lik5Liq5a+56LGhXG4gICAgICogQHBhcmFtIHsqfSBhIOWvueixoVxuICAgICAqIEBwYXJhbSB7Kn0gYiDlr7nosaFcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIG1vZHVsZXMucHJvdG90eXBlLm1lcmdlSlNPTiA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciB0ZW1wID0ge307XG4gICAgICAgIGlmIChhICYmIGIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gYikge1xuICAgICAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVtcCA9IGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5rex5ou36LSd5pWw57uE5oiW5a+56LGhXG4gICAgICogQHBhcmFtIHsob2JqZWN0IHwgQXJyYXkgPCBhbnkgPil9IG8g5pWw57uE5oiW5a+56LGhXG4gICAgICogQHJldHVybnMgeyhvYmplY3QgfCBBcnJheSA8IGFueSA+KX1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5kZWVwQ29weSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG8pKTtcbiAgICB9O1xuICAgIHJldHVybiBtb2R1bGVzO1xufSgpKTtcbmV4cG9ydHMuQXJyYXlNb2QgPSBtb2R1bGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbW9kdWxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBtb2R1bGVzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaHRtbOi9rOaIkOWtl+espuS4slxuICAgICAqIEBwYXJhbSB7Kn0gaHRtbERPTSBodG1sRE9NXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5odG1sVG9TdGlybmcgPSBmdW5jdGlvbiAoaHRtbERPTSkge1xuICAgICAgICB2YXIgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRlbXAuYXBwZW5kQ2hpbGQoaHRtbERPTSk7XG4gICAgICAgIHJldHVybiB0ZW1wLmlubmVySFRNTDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlrZfnrKbkuLLovaxodG1sXG4gICAgICogQHBhcmFtIHsqfSBodG1sU3RyaW5nIGh0bWzlrZfnrKbkuLJcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5zdHJpbmdUb0h0bWwgPSBmdW5jdGlvbiAoaHRtbFN0cmluZykge1xuICAgICAgICB2YXIgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRlbXAuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgICAgICAgcmV0dXJuIHRlbXAuY2hpbGRyZW5bMF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+WdXJs5Lit5oyH5a6a5Y+C5pWw5YC8XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtIOWPguaVsOWQjeensFxuICAgICAqIEByZXR1cm5zIHsoc3RyaW5nIHwgbnVsbCl9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0UXVlcnlQYXJhbSA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICB2YXIgciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpLm1hdGNoKG5ldyBSZWdFeHAoXCIoXnwmKVwiICsgcGFyYW0gKyBcIj0oW14mXSopKCZ8JClcIikpOyAvL3NlYXJjaCzmn6Xor6LvvJ/lkI7pnaLnmoTlj4LmlbDvvIzlubbljLnphY3mraPliJlcbiAgICAgICAgaWYgKHIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6ZqP5py655Sf5oiQ6Imy5YC8XG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBtb2R1bGVzLnByb3RvdHlwZS5nZXRSYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcjJyArXG4gICAgICAgICAgICAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChjb2xvciArPSAnMDEyMzQ1Njc4OWFiY2RlZidbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKGNvbG9yLmxlbmd0aCA9PSA2KSA/IGNvbG9yIDogYXJndW1lbnRzLmNhbGxlZShjb2xvcik7XG4gICAgICAgICAgICB9KSgnJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5b2T5YmN5rWP6KeI5Zmo54mI5pysXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUuZ2V0QnJvd3NlclR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICB2YXIgaXNPcGVyYSA9IHVzZXJBZ2VudC5pbmRleE9mKFwiT3BlcmFcIikgPiAtMTtcbiAgICAgICAgdmFyIGlzSUUgPSB1c2VyQWdlbnQuaW5kZXhPZihcImNvbXBhdGlibGVcIikgPiAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgPiAtMSAmJiAhaXNPcGVyYTtcbiAgICAgICAgdmFyIGlzSUUxMSA9IHVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPiAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZihcInJ2OjExLjBcIikgPiAtMTtcbiAgICAgICAgdmFyIGlzRWRnZSA9IHVzZXJBZ2VudC5pbmRleE9mKFwiRWRnZVwiKSA+IC0xICYmICFpc0lFO1xuICAgICAgICB2YXIgaXNGRiA9IHVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSA+IC0xO1xuICAgICAgICB2YXIgaXNTYWZhcmkgPSB1c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKSA+IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpID09IC0xO1xuICAgICAgICB2YXIgaXNDaHJvbWUgPSB1c2VyQWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKSA+IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpID4gLTE7XG4gICAgICAgIGlmIChpc0lFKSB7XG4gICAgICAgICAgICB2YXIgcmVJRSA9IG5ldyBSZWdFeHAoXCJNU0lFIChcXFxcZCtcXFxcLlxcXFxkKyk7XCIpO1xuICAgICAgICAgICAgcmVJRS50ZXN0KHVzZXJBZ2VudCk7XG4gICAgICAgICAgICB2YXIgZklFVmVyc2lvbiA9IHBhcnNlRmxvYXQoUmVnRXhwW1wiJDFcIl0pO1xuICAgICAgICAgICAgaWYgKGZJRVZlcnNpb24gPT0gNylcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJRTdcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGZJRVZlcnNpb24gPT0gOClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJRThcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGZJRVZlcnNpb24gPT0gOSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJRTlcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGZJRVZlcnNpb24gPT0gMTApXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSUUxMFwiO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBcIklFN+S7peS4i1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0lFMTEpXG4gICAgICAgICAgICByZXR1cm4gJ0lFMTEnO1xuICAgICAgICBpZiAoaXNFZGdlKVxuICAgICAgICAgICAgcmV0dXJuIFwiRWRnZVwiO1xuICAgICAgICBpZiAoaXNGRilcbiAgICAgICAgICAgIHJldHVybiBcIkZGXCI7XG4gICAgICAgIGlmIChpc09wZXJhKVxuICAgICAgICAgICAgcmV0dXJuIFwiT3BlcmFcIjtcbiAgICAgICAgaWYgKGlzU2FmYXJpKVxuICAgICAgICAgICAgcmV0dXJuIFwiU2FmYXJpXCI7XG4gICAgICAgIGlmIChpc0Nocm9tZSlcbiAgICAgICAgICAgIHJldHVybiBcIkNocm9tZVwiO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluebuOWvuei3r+W+hOeahOe7neWvuei3r+W+hFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg55u45a+56Lev5b6EXG4gICAgICogQHJldHVybnMge3N0cmluZ30g57ud5a+56Lev5b6EXG4gICAgICovXG4gICAgbW9kdWxlcy5wcm90b3R5cGUucmVsYXRpdmVQYXRoVG9GdWxsUGF0aCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gdXJsOyAvLyDorr7nva7nm7jlr7not6/lvoTnu5lpbWFnZSwg5q2k5pe25Lya5Y+R6YCB5Ye66K+35rGCXG4gICAgICAgIHVybCA9IGltZy5zcmM7IC8vIOatpOaXtuebuOWvuei3r+W+hOW3sue7j+WPmOaIkOe7neWvuei3r+W+hFxuICAgICAgICBpbWcuc3JjID0gJyc7IC8vIOWPlua2iOivt+axglxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH07XG4gICAgO1xuICAgIHJldHVybiBtb2R1bGVzO1xufSgpKTtcbmV4cG9ydHMuT3RoZXJNb2QgPSBtb2R1bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==