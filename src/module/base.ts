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
     * @description 判断数字类型
     * @param {*} value
     * @returns {Boolean}
     */
    public isNumber(value: any): Boolean {
        return Object.prototype.toString.call(value).slice(8, -1) === 'Number'
    }
    /**
     * @description 判断布尔类型
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
    public isObject(value: any): Boolean {
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
     * @description 判断对象是否为空
     * @param {*} value
     * @returns {Boolean}
     */
    public isEmptyObject(value: any): Boolean {
        return !Object.keys(value).length
    }
    /**
     * @description 判断是否是整数
     * @param {*} value
     * @returns {boolean}
     */
    public isInteger(value: any) {
        return this.isNumber(value) &&
            isFinite(value) &&
            Math.floor(value) === value;
    };
    /**
     * @description 判断是否是小数
     * @param {*} value
     * @returns {boolean}
     */
    public isFloat(value: any) {
        return !this.isInteger(value);
    };
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
     * @description 判断是否支持webp
     * @returns {boolean}
     */
    public isWebp(): boolean {
        return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    /**
     * @description 判断是否为闰年
     * @param {*} value
     * @returns {boolean}
     */
    public isLeapYear(value: any): boolean {
        return (value % 400 == 0) || (value % 4 == 0 && value % 100 != 0)
    }
    /**
     * @description 判断是否含有html标签
     * @param {*} value
     * @returns {boolean}
     */
    public isHtml(value: any): boolean {
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(value);
    }
    /**
     * @description 判断校验身份证信息
     * @param {*} value
     * @returns {boolean}
     */
    public isCardID(value: any): boolean {
        let format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
        if (this.isNumber(value)) {
            value = new String(value);
        };
        //初步校验-号码规则校验
        if (!format.test(value)) {
            return false;
        }
        //二级校验-区位码校验
        let year = value.substr(6, 4), //身份证年
            month = value.substr(10, 2), //身份证月
            day = value.substr(12, 2), //身份证日
            time = Date.parse(month + '-' + day + '-' + year), //身份证日期时间戳
            nowtime = Date.parse(new Date().toString()), //当前时间戳
            nowday = (new Date(year, month, 0)).getDate(); //身份证当月天数
        if (time > nowtime || day > nowday) {
            return false;
        }
        //三级校验-校验码判断 {https://jingyan.baidu.com/article/7f41ececff944a593d095c8c.html}
        let c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //系数
        let b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']; //校验码对照表
        let idArr = value.split("");
        let sum = 0;
        for (let i = 0; i < 17; i++) {
            sum += parseInt(idArr[i]) * c[i];
        }
        if (idArr[17].toUpperCase() != b[sum % 11].toUpperCase()) {
            return false;
        }
        return true;
    }
    /**
     * @description 字符串综合校验
     * @param {*} value num-数字 en-英文 chn-中文 lower-小写 upper-大写 phone-手机号码 tel-座机 url-网址 ip-IP地址 date-日期格式 email-邮箱 postal-邮政编码 
     * @returns {boolean}
     */
    public isVerify(value: any, type: any): boolean {
        switch (type) {
            case 'num':
                return /^[0-9]$/.test(value);
            case 'en':
                return /^[a-zA-Z]+$/.test(value);
            case 'chn':
                return /^[\u4E00-\u9FA5]+$/.test(value);
            case 'lower':
                return /^[a-z]+$/.test(value);
            case 'upper':
                return /^[A-Z]+$/.test(value);
            case 'phone':
                return /^1[3|4|5|7|8][0-9]{9}$/.test(value);
            case 'tel':
                return /^0\d{2,3}-\d{7,8}(-\d{1,6})?$/.test(value);
            case 'url':
                return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value);
            case 'ip':
                return /([0-9]{1,3}\.{1}){3}[0-9]{1,3}/.test(value);
            case 'date':
                return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(value) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(value);
            case 'email':
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value);
            case 'postal':
                return /[1-9]\d{5}(?!\d)/.test(value);
            default:
                return false;
        }
    }
}

export {
    Modules as BaseMod
};