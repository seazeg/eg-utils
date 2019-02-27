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
