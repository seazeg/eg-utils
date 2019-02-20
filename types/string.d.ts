// Type definitions for ./src/module/string.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare namespace stringMethods{
		
	/**
	 * @description 去字符串空格
	 * @param {string} str 字符串
	 * @param {number} type 1-所有空格  2-前后空格  3-前空格 4-后空格
	 * @returns {string}
	 * @param str 
	 * @param type 
	 * @return  
	 */
	function strTrim(str : string, type : number): string;
		
	/**
	 * 
	 * @param str 
	 * @return  
	 */
	function strReverse(str : any): any;
		
	/**
	 * @description 替换字符串中所有指定字符
	 * @param {string} str 内容
	 * @param {string} beforeStr 需要替换字符
	 * @param {string} afterStr 替换成的字符
	 * @returns {(string)}
	 * @param str 
	 * @param beforeStr 
	 * @param afterStr 
	 * @return  
	 */
	function replaceAll(str : string, beforeStr : string, afterStr : string): string;
		
	/**
	 * @description 替换被截取字符串
	 * @param {string} str 内容
	 * @param {number} subStart 截取开始位置
	 * @param {number} subEnd 截取结束位置
	 * @param {string} beforeStr 需要替换字符
	 * @param {string} afterStr 替换成的字符
	 * @returns {(string)}
	 * @param options 
	 * @return  
	 */
	function replaceSubString(options : any): string;
		
	/**
	 * @description 过滤html操作符
	 * @param {string} str
	 * @returns {string}
	 * @param str 
	 * @return  
	 */
	function filterHtmlCode(str : string): string;
		
	/**
	 * @description 首字母大写
	 * @param {string} str
	 * @returns {string}
	 * @param str 
	 * @return  
	 */
	function fristCharUpperCase(str : string): string;
		
	/**
	 * @description 首字母小写
	 * @param {string} str
	 * @returns {string}
	 * @param str 
	 * @return  
	 */
	function fristCharLowerCase(str : string): string;
		
	/**
	 * @description 压缩相同且连续的字符
	 * @param {string} str
	 * @param {boolean} 是否区分大小写
	 * @returns {string} bbbssss => 3b4s
	 * @param str 
	 * @param ignoreCase 
	 * @return  
	 */
	function compressRepeatedStr(str : string, ignoreCase : any): string;
}
