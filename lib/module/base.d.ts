declare class Modules {
    /**
     * @description 判断字符串类型
     * @param {*} value
     * @returns {Boolean}
     */
    isString(value: any): Boolean;
    /**
     * @description 判断数字类型
     * @param {*} value
     * @returns {Boolean}
     */
    isNumber(value: any): Boolean;
    /**
     * @description 判断布尔类型
     * @param {*} value
     * @returns {Boolean}
     */
    isBoolean(value: any): Boolean;
    /**
     * @description 判断Function类型
     * @param {*} value
     * @returns {Boolean}
     */
    isFunction(value: any): Boolean;
    /**
     * @description 判断null类型
     * @param {*} value
     * @returns {Boolean}
     */
    isNull(value: any): Boolean;
    /**
     * @description 判断undefined类型
     * @param {*} value
     * @returns {Boolean}
     */
    isUndefined(value: any): Boolean;
    /**
     * @description 判断object类型
     * @param {*} value
     * @returns {Boolean}
     */
    isObject(value: any): Boolean;
    /**
     * @description 判断array类型
     * @param {*} value
     * @returns {Boolean}
     */
    isArray(value: any): Boolean;
    /**
     * @description 判断date类型
     * @param {*} value
     * @returns {Boolean}
     */
    isDate(value: any): Boolean;
    /**
     * @description 判断regExp类型
     * @param {*} value
     * @returns {Boolean}
     */
    isRegExp(value: any): Boolean;
    /**
     * @description 判断error类型
     * @param {*} value
     * @returns {Boolean}
     */
    isError(value: any): Boolean;
    /**
     * @description 判断symbol类型
     * @param {*} value
     * @returns {Boolean}
     */
    isSymbol(value: any): Boolean;
    /**
     * @description 判断promise类型
     * @param {*} value
     * @returns {Boolean}
     */
    isPromise(value: any): Boolean;
    /**
     * @description 判断set类型
     * @param {*} value
     * @returns {Boolean}
     */
    isSet(value: any): Boolean;
    /**
     * @description 判断是否为空
     * @param {*} value
     * @returns {Boolean}
     */
    isEmpty(value: any): Boolean;
    /**
     * @description 判断是否为ios
     * @returns {Boolean}
     */
    isIos(): Boolean;
    /**
     * @description 判断是否为android
     * @returns {Boolean}
     */
    isAndroid(): Boolean;
    /**
     * @description 判断是否为pc端
     * @returns {Boolean}
     */
    isPC(): Boolean;
    /**
     * @description 判断是否为闰年
     * @param {*} value
     * @returns {boolean}
     */
    isLeapYear(value: any): boolean;
    /**
     * @description 判断是否含有html标签
     * @param {*} value
     * @returns {boolean}
     */
    isHtml(value: any): boolean;
    /**
     * @description 判断校验身份证信息
     * @param {*} value
     * @returns {boolean}
     */
    isCardID(value: any): boolean;
    /**
     * @description 字符串综合校验
     * @param {*} value num-数字 en-英文 chn-中文 lower-小写 upper-大写 phone-手机号码 tel-座机 url-网址 ip-IP地址 date-日期格式 email-邮箱 postal-邮政编码
     * @returns {boolean}
     */
    isVerify(value: any, type: any): boolean;
}
export { Modules as BaseMod };
