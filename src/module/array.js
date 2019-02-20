'use strict'
const arrayMethods = {
    /**
     * @description 数组元素去重
     * @param {Array < any >} arr
     * @returns {Array < any >}
     */
    arrUnique: function (arr) {
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
            if (temp.indexOf(arr[i]) == -1) {
                temp.push(arr[i]);
            }
        }
        return temp;
    },
    /**
     * @description 数组元素排序
     * @param {*} arr 数组
     * @param {number} type 1-降序  2-升序  3-随机
     * @returns {Array < any >}
     */
    arrSort: function (arr, type) {
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
    },
    /**
     * @description 删除指定的数组元素
     * @param {Array < any >} arr
     * @param {*} ele
     * @returns {Array < any >}
     */
    arrRemove: function (arr, ele) {
        let i = arr.indexOf(ele);
        i > -1 ? arr.splice(i, 1) : null;
        return arr;
    },
    /**
     * @description 获得两个数组的并集
     * @param {Array < any >} a
     * @param {Array < any >} b
     * @returns {Array < any >}
     */
    arrUnion: function (a, b) {
        return this.arrUnique(a.concat(b));
    },
    /**
     * @description 获得两个数组的交集
     * @param {Array < any >} a
     * @param {Array < any >} b
     * @returns {Array < any >}
     */
    arrIntersect: function (a, b) {
        return b.filter(function (v) {
            return a.indexOf(v) !== -1;
        });
    },
    /**
     * @description 数组元素最大值（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    arrMax: function (arr) {
        return Math.max.apply(null, arr);
    },
    /**
     * @description 数组元素最小值（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    arrMin: function (arr) {
        return Math.min.apply(null, arr);
    },
    /**
     * @description 数组元素求和（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    arrSum: function (arr) {
        return arr.reduce(function (pre, cur) {
            return pre + cur;
        });
    },
    /**
     * @description 数组元素平均值（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    arrAverage: function (arr) {
        return this.arrSum(arr) / arr.length;
    },
    /**
     * @description 合并两个对象
     * @param {*} a 对象
     * @param {*} b 对象
     * @returns {Object}
     */
    mergeJSON: function (a, b) {
        let temp = {};
        if (a && b) {
            for (let i in b) {
                a[i] = b[i];
            }
            temp = a;
        }
        return temp;
    },
    /**
     * @description 深拷贝数组或对象
     * @param {(object | Array < any >)} o 数组或对象
     * @returns {(object | Array < any >)}
     */
    deepCopy: function (o) {
        return JSON.parse(JSON.stringify(o));
    }
}

module.exports = arrayMethods