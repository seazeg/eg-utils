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
     * @description 生成指定位数内的随机数
     * @param {number} placeRange 位数 10,100..
     * @param {string} returnType 默认整数/小数float
     * @returns {number}
     */
    modules.prototype.getPlaceRandomNum = function (placeRange, returnType) {
        return returnType == "float" ? Math.random() * placeRange : Math.ceil(Math.random() * placeRange);
    };
    /**
     * @description 生成指定范围的随机数
     * @param {number} min 最小值
     * @param {number} max 最大值
     * @param {string} returnType 默认整数/小数float
     * @returns {number}
     */
    modules.prototype.getRangeRandomNum = function (min, max, returnType) {
        return returnType == "float" ? min + Math.random() * ((max + 1) - min) : Math.floor(min + Math.random() * ((max + 1) - min));
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
