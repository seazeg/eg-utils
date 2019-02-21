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
