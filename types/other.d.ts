// Type definitions for ./src/module/other.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare namespace otherMethods{
		
	/**
	 * @description html转成字符串
	 * @param {*} htmlDOM htmlDOM
	 * @returns {string}
	 * @param htmlDOM 
	 * @return  
	 */
	function htmlToStirng(htmlDOM : any): string;
		
	/**
	 * @description 字符串转html
	 * @param {*} htmlString html字符串
	 * @returns {*}
	 * @param htmlString 
	 */
	function stringToHtml(htmlString : any): void;
		
	/**
	 * @description 获取url中指定参数值
	 * @param {string} param 参数名称
	 * @returns {(string | null)}
	 * @param param 
	 * @return  
	 */
	function getQueryParam(param : string): string;
		
	/**
	 * @description 随机生成色值
	 * @returns {string}
	 * @return  
	 */
	function getRandomColor(): string;
		
	/**
	 * @description 获取当前浏览器版本
	 * @returns {*}
	 * @return  
	 */
	function getBrowserType(): string;
		
	/**
	 * @description 获取相对路径的绝对路径
	 * @param {string} url 相对路径
	 * @returns {string} 绝对路径
	 * @param url 
	 * @return  
	 */
	function relativePathToFullPath(url : string): string;
		
	/**
	 * @description 校验密码强度(通用)
	 * @param {*} str 字符串
	 * @returns {number}
	 * @param str 
	 * @return  
	 */
	function checkPwd(str : any): number;
}
