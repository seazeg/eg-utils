// Type definitions for ./src/module/date.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare namespace dateMethods{
		
	/**
	 * @description 格式化日期
	 * @param {any} date 时间戳或日期
	 * @param {string} type 默认：yyyy-MM-dd hh:mm:ss
	 * @returns {any}
	 * @param date 
	 * @param type 
	 * @return  
	 */
	function formatDate(date : number, type : string): string;
		
	/**
	 * @description 格式化时分秒
	 * @param {any} date 时间戳
	 * @returns {string}
	 * @param time 
	 * @return  
	 */
	function formatTime(time : any): string;
		
	/**
	 * @description 获取两个日期间差值
	 * @param {*} startDate
	 * @param {*} endDate
	 * @returns {number}
	 * @param startDate 
	 * @param endDate 
	 * @return  
	 */
	function getDayMinus(startDate : any, endDate : any): number;
		
	/**
	 * @description 获取某年有多少天
	 * @param {*} year 1999
	 * @returns {number}
	 * @param year 
	 * @return  
	 */
	function getYearDays(year : any): number;
		
	/**
	 * @description 获取某年某月有多少天
	 * @param {*} date 1999-1
	 * @returns {number}
	 * @param date 
	 * @return  
	 */
	function getMonthDays(date : string): number;
		
	/**
	 * @description 获取某年某天是第几周
	 * @param {*} date 1999-1-1
	 * @returns {number}
	 * @param date 
	 * @return  
	 */
	function getWhichWeek(date : any): number;
}
