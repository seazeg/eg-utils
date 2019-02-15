class Modules {
    /**
     * @description 判断字符串类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isString(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'String'
    }
    /**
     * @description 判断字符串类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isNumber(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Number'
    }
    /**
     * @description 判断string类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isBoolean(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Boolean'
    }
    /**
     * @description 判断Function类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isFunction(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Function'
    }
    /**
     * @description 判断null类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isNull(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Null'
    }
    /**
     * @description 判断undefined类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isUndefined(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Undefined'
    }
    /**
     * @description 判断object类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isObj(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Object'
    }
    /**
     * @description 判断array类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isArray(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Array'
    }
    /**
     * @description 判断date类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isDate(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Date'
    }
    /**
     * @description 判断regExp类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isRegExp(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'RegExp'
    }
    /**
     * @description 判断error类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isError(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Error'
    }
    /**
     * @description 判断symbol类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isSymbol(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Symbol'
    }
    /**
     * @description 判断promise类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isPromise(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Promise'
    }
    /**
     * @description 判断set类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isSet(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Set'
    }
    /**
     * @description 判断是否为空
     * @param {*} value
     * @returns {Boolean}
     */
    public isEmpty(value: any): Boolean {
        return typeof value == "undefined" || value == null || value == "" ? true : false
    }
    /**
     * @description 判断是否为ios
     * @returns {Boolean}
     */
    public isIos(): Boolean {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }
    /**
     * @description 判断是否为android
     * @returns {Boolean}
     */
    public isAndroid(): Boolean {
        return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1
    }
    /**
     * @description 判断是否为pc端
     * @returns {Boolean}
     */
    public isPC(): Boolean {
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
    }
    /**
     * @description 判断是否为闰年
     * @param {*} value
     * @returns {boolean}
     */
    public isLeapYear(value: any): boolean {
        return (value % 400 == 0) || (value % 4 == 0 && value % 100 != 0)
    }
}

export {
    Modules as BaseMod
};