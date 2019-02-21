"use strict";
var base_1 = require("./module/base");
var string_1 = require("./module/string");
var number_1 = require("./module/number");
var date_1 = require("./module/date");
var array_1 = require("./module/array");
var other_1 = require("./module/other");
/**
 * @description 入口主函数
 * @class Center
 */
var Center = /** @class */ (function () {
    function Center() {
    }
    Center.prototype._extend = function (target, source) {
        if (Object.prototype.toString.call(target) === '[object Object]' && Object.prototype.toString.call(source) === '[object Object]') {
            for (var key in source) {
                target[key] = target[key] && target[key].toString() === "[object Object]" ?
                    this._extend(target[key], source[key]) : target[key] = source[key];
            }
        }
        return target;
    };
    Center.prototype._init = function () {
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
    return Center;
}());
module.exports = (new Center())._init();
