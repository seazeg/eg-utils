"use strict";
exports.__esModule = true;
var modules = /** @class */ (function () {
    function modules() {
    }
    /**
     * @description 随机生成不重复的GUID
     * @returns {string}
     */
    modules.prototype.guid = function () {
        var guid = "";
        for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                guid += "-";
        }
        return guid;
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
    /**
     * @description 一次执行函数（防止重复调用或加载）
     * @param {*} fn
     * @param {*} context
     * @returns
     */
    modules.prototype.once = function (func, context) {
        var result;
        var _this = this;
        return function () {
            if (func) {
                result = func.apply(context || _this, arguments);
                func = null;
            }
            return result;
        };
    };
    /**
     * @description 防抖函数
     * @param {*} func 函数体
     * @param {number} wait 间隔时间
     * @returns
     */
    modules.prototype.debounce = function (func, wait) {
        var timer = null;
        var self = this;
        return function () {
            var args = arguments;
            timer && clearTimeout(timer);
            timer = setTimeout(function () {
                func.apply(self, args);
            }, wait);
        };
    };
    ;
    /**
     * @description 节流函数
     * @param {*} func 函数体
     * @param {number} wait 间隔时间
     * @returns
     */
    modules.prototype.throttle = function (func, wait) {
        var isExecute = false;
        var self = this;
        return function () {
            var args = Array.prototype.slice.apply(arguments);
            if (isExecute) {
                return;
            }
            isExecute = true;
            setTimeout(function () {
                func.apply(self, args);
                isExecute = false;
            }, wait);
        };
    };
    return modules;
}());
exports.OtherMod = modules;
