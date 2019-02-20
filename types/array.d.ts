declare namespace arrayMethods {

	/**
	 * @description 数组元素去重
	 * @param {Array < any >} arr
	 * @returns {Array < any >}
	 * @param arr 
	 * @return  
	 */
	function arrUnique(arr: any): Array < any >;

	/**
	 * @description 数组元素排序
	 * @param {*} arr 数组
	 * @param {number} type 1-降序  2-升序  3-随机
	 * @returns {Array < any >}
	 * @param arr 
	 * @param type 
	 */
	function arrSort(arr: any, type: number): Array < any > ;

	/**
	 * @description 删除指定的数组元素
	 * @param {Array < any >} arr
	 * @param {*} ele
	 * @returns {Array < any >}
	 * @param arr 
	 * @param ele 
	 * @return  
	 */
	function arrRemove(arr: any, ele: any): Array < any >;

	/**
	 * @description 获得两个数组的并集
	 * @param {Array < any >} a
	 * @param {Array < any >} b
	 * @returns {Array < any >}
	 * @param a 
	 * @param b 
	 * @return  
	 */
	function arrUnion(a: any, b: any): Array < any >;

	/**
	 * @description 获得两个数组的交集
	 * @param {Array < any >} a
	 * @param {Array < any >} b
	 * @returns {Array < any >}
	 * @param a 
	 * @param b 
	 */
	function arrIntersect(a: any, b: any): Array < any >;

	/**
	 * @description 数组元素最大值（number）
	 * @param {Array < number >} arr
	 * @returns {number}
	 * @param arr 
	 * @return  
	 */
	function arrMax(arr: any): number;

	/**
	 * @description 数组元素最小值（number）
	 * @param {Array < number >} arr
	 * @returns {number}
	 * @param arr 
	 * @return  
	 */
	function arrMin(arr: any): number;

	/**
	 * @description 数组元素求和（number）
	 * @param {Array < number >} arr
	 * @returns {number}
	 * @param arr 
	 * @return  
	 */
	function arrSum(arr: any): number;

	/**
	 * @description 数组元素平均值（number）
	 * @param {Array < number >} arr
	 * @returns {number}
	 * @param arr 
	 * @return  
	 */
	function arrAverage(arr: any): number;

	/**
	 * @description 合并两个对象
	 * @param {*} a 对象
	 * @param {*} b 对象
	 * @returns {Object}
	 * @param a 
	 * @param b 
	 * @return  
	 */
	function mergeJSON(a:any, b: any): any;

	/**
	 * @description 深拷贝数组或对象
	 * @param {(object | Array < any >)} o 数组或对象
	 * @returns {(object | Array < any >)}
	 * @param o 
	 */
	function deepCopy(o: any): void;
}