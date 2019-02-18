'use strict'
module.exports = {
    /**
     * @description 判断字符串类型
     * @param {*} value
     * @returns {Boolean}
     */
    isString: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'String';
    },
    /**
     * @description 判断字符串类型
     * @param {*} value
     * @returns {Boolean}
     */
    isNumber: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Number';
    },
    /**
     * @description 判断string类型
     * @param {*} value
     * @returns {Boolean}
     */
    isBoolean: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Boolean';
    },
    /**
     * @description 判断Function类型
     * @param {*} value
     * @returns {Boolean}
     */
    isFunction: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Function';
    },
    /**
     * @description 判断null类型
     * @param {*} value
     * @returns {Boolean}
     */
    isNull: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Null';
    },
    /**
     * @description 判断undefined类型
     * @param {*} value
     * @returns {Boolean}
     */
    isUndefined: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Undefined';
    },
    /**
     * @description 判断object类型
     * @param {*} value
     * @returns {Boolean}
     */
    isObj: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Object';
    },
    /**
     * @description 判断array类型
     * @param {*} value
     * @returns {Boolean}
     */
    isArray: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Array';
    },
    /**
     * @description 判断date类型
     * @param {*} value
     * @returns {Boolean}
     */
    isDate: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Date';
    },
    /**
     * @description 判断regExp类型
     * @param {*} value
     * @returns {Boolean}
     */
    isRegExp: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'RegExp';
    },
    /**
     * @description 判断error类型
     * @param {*} value
     * @returns {Boolean}
     */
    isError: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Error';
    },
    /**
     * @description 判断symbol类型
     * @param {*} value
     * @returns {Boolean}
     */
    isSymbol: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Symbol';
    },
    /**
     * @description 判断promise类型
     * @param {*} value
     * @returns {Boolean}
     */
    isPromise: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Promise';
    },
    /**
     * @description 判断set类型
     * @param {*} value
     * @returns {Boolean}
     */
    isSet: function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Set';
    },
    /**
     * @description 判断是否为空
     * @param {*} value
     * @returns {Boolean}
     */
    isEmpty: function (value) {
        return typeof value == "undefined" || value == null || value == "" ? true : false;
    },
    /**
     * @description 判断是否为ios
     * @returns {Boolean}
     */
    isIos: function () {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    },
    /**
     * @description 判断是否为android
     * @returns {Boolean}
     */
    isAndroid: function () {
        return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1;
    },
    /**
     * @description 判断是否为pc端
     * @returns {Boolean}
     */
    isPC: function () {
        let flag = true;
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"
        ];
        for (let i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    },
    /**
     * @description 判断是否为闰年
     * @param {*} value
     * @returns {boolean}
     */
    isLeapYear: function (value) {
        return (value % 400 == 0) || (value % 4 == 0 && value % 100 != 0);
    }
}
