// Type definitions for ./src/module/base.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare namespace baseMethods{
		
	/**
	 * @description 判断字符串类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isString(value : any): boolean;
		
	/**
	 * @description 判断数字类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isNumber(value : String): boolean;
		
	/**
	 * @description 判断string类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isBoolean(value : any): boolean;
		
	/**
	 * @description 判断Function类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isFunction(value : any): boolean;
		
	/**
	 * @description 判断null类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isNull(value : any): boolean;
		
	/**
	 * @description 判断undefined类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isUndefined(value : any): boolean;
		
	/**
	 * @description 判断object类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isObj(value : any): boolean;
		
	/**
	 * @description 判断array类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isArray(value : any): boolean;
		
	/**
	 * @description 判断date类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isDate(value : any): boolean;
		
	/**
	 * @description 判断regExp类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isRegExp(value : any): boolean;
		
	/**
	 * @description 判断error类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isError(value : any): boolean;
		
	/**
	 * @description 判断symbol类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isSymbol(value : any): boolean;
		
	/**
	 * @description 判断promise类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isPromise(value : any): boolean;
		
	/**
	 * @description 判断set类型
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isSet(value : any): boolean;
		
	/**
	 * @description 判断是否为空
	 * @param {*} value
	 * @returns {Boolean}
	 * @param value 
	 * @return  
	 */
	function isEmpty(value : any): boolean;
		
	/**
	 * @description 判断是否为ios
	 * @returns {Boolean}
	 * @return  
	 */
	function isIos(): boolean;
		
	/**
	 * @description 判断是否为android
	 * @returns {Boolean}
	 * @return  
	 */
	function isAndroid(): boolean;
		
	/**
	 * @description 判断是否为pc端
	 * @returns {Boolean}
	 * @return  
	 */
	function isPC(): boolean;
		
	/**
	 * @description 判断是否为闰年
	 * @param {*} value
	 * @returns {boolean}
	 * @param value 
	 * @return  
	 */
	function isLeapYear(value : any): boolean;
		
	/**
	 * @description 判断是否含有html标签
	 * @param {*} value
	 * @returns {boolean}
	 * @param value 
	 * @return  
	 */
	function isHtml(value : any): boolean;
		
	/**
	 * @description 校验身份证信息
	 * @param {*} value
	 * @returns {boolean}
	 * @param value 
	 * @return  
	 */
	function isCardID(value : String): boolean;
		
	/**
	 * @description 字符串综合校验
	 * @param {*} value num-数字 en-英文 chn-中文 lower-小写 upper-大写 phone-手机号码 tel-座机 url-网址 ip-IP地址 date-日期格式 email-邮箱 postal-邮政编码
	 * @returns {boolean}
	 * @param value 
	 * @param type 
	 * @return  
	 */
	function isVerify(value : any, type : any): boolean;
}
