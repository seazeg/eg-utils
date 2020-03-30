"use strict";
exports.__esModule = true;
var modules = /** @class */ (function () {
    function modules() {
    }
    /**
     * @description 获取当前浏览器版本
     * @returns {*}
     */
    modules.prototype.getBrowser = function () {
        var sys = {}, ua = navigator.userAgent.toLowerCase(), s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
            (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
                (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
                    (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
                        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
                            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                                (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
        if (sys.ie)
            return ('IE: ' + sys.ie);
        if (sys.edge)
            return ('EDGE: ' + sys.edge);
        if (sys.firefox)
            return ('Firefox: ' + sys.firefox);
        if (sys.chrome)
            return ('Chrome: ' + sys.chrome);
        if (sys.opera)
            return ('Opera: ' + sys.opera);
        if (sys.safari)
            return ('Safari: ' + sys.safari);
        return 'Unkonwn';
    };
    /**
     * @description 获取当前操作系统类型
     * @returns {*}
     */
    modules.prototype.getOS = function () {
        var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
        var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
        var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
        if (/mac/i.test(appVersion))
            return 'MacOSX';
        if (/win/i.test(appVersion))
            return 'windows';
        if (/linux/i.test(appVersion))
            return 'linux';
        if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent))
            'ios';
        if (/android/i.test(userAgent))
            return 'android';
        if (/win/i.test(appVersion) && /phone/i.test(userAgent))
            return 'windowsPhone';
    };
    /**
     * @description 获取url中指定参数值
     * @param {string} param 参数名称
     * @returns {(string | null)}
     */
    modules.prototype.getQueryParam = function (param) {
        var r = window.location.search.substr(1).match(new RegExp("(^|&)" + param + "=([^&]*)(&|$)")); //search,查询？后面的参数，并匹配正则
        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        else {
            return null;
        }
    };
    /**
     * @description url地址参数序列化
     * @param {string} url
     * @returns {*}
     */
    modules.prototype.parseQueryParam = function (url) {
        url = url == null ? window.location.href : url;
        var search = url.substring(url.lastIndexOf('?') + 1);
        if (!search) {
            return {};
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    };
    /**
     * @description url参数对象反序列化
     * @param {{[key:string]:any}} paramObj {a:1,b:1}
     * @returns {*}
     */
    modules.prototype.stringfyQueryParam = function (paramObj) {
        if (!paramObj)
            return '';
        var temp = [];
        for (var key in paramObj) {
            var value = paramObj[key];
            if (value instanceof Array) {
                for (var i = 0; i < value.length; ++i) {
                    temp.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                }
                continue;
            }
            temp.push(encodeURIComponent(key) + '=' + encodeURIComponent(paramObj[key]));
        }
        return temp.join('&');
    };
    /**
     * @description 设置cookie
     * @param {*} key
     * @param {*} value
     * @param {*} days 过期时间长度
     */
    modules.prototype.setCookie = function (key, value, days) {
        var Days = days || 30 * 24 * 60 * 60 * 1000;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days);
        document.cookie = key + "=" + escape(value) + ";expires=" + exp.toUTCString();
    };
    /**
     * @description 获取指定cookie
     * @param {*} key
     * @returns {*}
     */
    modules.prototype.getCookie = function (key) {
        var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
        if (arr != null) {
            return (arr[2]);
        }
        else {
            return "";
        }
    };
    /**
     * @description 删除指定cookie
     * @param {*} key
     */
    modules.prototype.delCookie = function (key) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var tmpValue = this.getCookie(key);
        if (tmpValue != null) {
            document.cookie = key + "=" + tmpValue + ";expires=" + exp.toUTCString();
        }
    };
    /**
     * @description 获取滚动条的位置坐标
     * @param {*} el dom元素，默认window
     */
    modules.prototype.getScrollPosition = function (el) {
        if (el === void 0) { el = window; }
        return {
            x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
            y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
        };
    };
    ;
    /**
     * @description 滚动到指定元素区域
     * @param {*} el dom元素
     */
    modules.prototype.rollToViewArea = function (el) {
        document.querySelector(el).scrollIntoView({
            behavior: 'smooth'
        });
    };
    ;
    /**
     * @description storage存储(可设置过期时间)
     * @param {*} key
     * @param {*} value
     * @param {string} type true-localStorage, false-sessionStorage
     */
    modules.prototype.storageSet = function (key, value, type, expires) {
        if (type === void 0) { type = true; }
        if (typeof (value) === 'object')
            value = JSON.stringify(value);
        type ? localStorage.setItem(key, value) : sessionStorage.setItem(key, value);
        if (expires) {
            setTimeout(function () {
                localStorage.removeItem(key);
            }, expires);
        }
    };
    ;
    /**
     * @description storage读取
     * @param {*} key
     * @param {string} type true-localStorage, false-sessionStorage
     */
    modules.prototype.storageGet = function (key, type) {
        if (type === void 0) { type = true; }
        return localStorage.getItem(key);
    };
    ;
    /**
     * @description storage读取
     * @param {*} key
     * @param {string} type true-localStorage, false-sessionStorage
     */
    modules.prototype.storageRemove = function (key, type) {
        if (type === void 0) { type = true; }
        type ? localStorage.removeItem(key) : sessionStorage.removeItem(key);
    };
    ;
    return modules;
}());
exports.BrowserMod = modules;
