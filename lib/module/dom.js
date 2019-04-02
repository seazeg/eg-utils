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
    /**
     * @description 简易双向绑定
     * @param {*} inputObj 输入的input
     * @param {*} outputObj 输出的input
     * @returns {*}
     */
    modules.prototype.viewModel = function (inputObj, outputObj) {
        var model = new Object();
        var key = null;
        Object.defineProperty(model, 'key', {
            set: function (value) {
                key = value;
                outputObj.value = value;
            },
            get: function () {
                return key;
            }
        });
        inputObj.addEventListener('input', function () {
            model['key'] = inputObj.value;
        });
    };
    return modules;
}());
exports.DomMod = modules;
