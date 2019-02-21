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
var base_1 = require("./base");
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
