// Type definitions for ./src/module/number.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare namespace numberMethods{
		
	/**
	 * @description 生成指定位数的随机数
	 * @param {number} placeRange 位数
	 * @param {string} returnType
	 * @returns {number}
	 * @param placeRange 
	 * @param returnType 
	 * @return  
	 */
	function getPlaceRandomNum(placeRange : number, returnType : string): number;
		
	/**
	 * @description 生成指定范围的随机数
	 * @param {number} min 最小值
	 * @param {number} max 最大值
	 * @returns {number}
	 * @param min 
	 * @param max 
	 * @return  
	 */
	function getRangeRandomNum(min : number, max : number): number;
		
	/**
	 * @description 格式化成货币格式
	 * @param {string} value
	 * @returns {string}
	 * @param value 
	 * @return  
	 */
	function getFormatCurrency(value : string): string;
		
	/**
	 * @description 转换成大写货币格式
	 * @param {*} value 货币金额
	 * @returns {string}
	 * @param value 
	 * @return  
	 */
	function changeToChnCurrency(value : {} | string): string;
}
