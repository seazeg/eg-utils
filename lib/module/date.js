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
