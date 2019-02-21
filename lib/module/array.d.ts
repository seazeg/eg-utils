declare class modules {
    /**
     * @description 数组元素去重
     * @param {Array < any >} arr
     * @returns {Array < any >}
     */
    arrUnique(arr: Array<any>): Array<any>;
    /**
     * @description 数组元素排序
     * @param {*} arr 数组
     * @param {number} type 1-降序  2-升序  3-随机
     * @returns {Array < any >}
     */
    arrSort(arr: any, type: number): Array<any>;
    /**
     * @description 删除指定的数组元素
     * @param {Array < any >} arr
     * @param {*} ele
     * @returns {Array < any >}
     */
    arrRemove(arr: Array<any>, ele: any): Array<any>;
    /**
     * @description 获得两个数组的并集
     * @param {Array < any >} a
     * @param {Array < any >} b
     * @returns {Array < any >}
     */
    arrUnion(a: Array<any>, b: Array<any>): Array<any>;
    /**
     * @description 获得两个数组的交集
     * @param {Array < any >} a
     * @param {Array < any >} b
     * @returns {Array < any >}
     */
    arrIntersect(a: Array<any>, b: Array<any>): Array<any>;
    /**
     * @description 数组元素最大值（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    arrMax(arr: Array<number>): number;
    /**
     * @description 数组元素最小值（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    arrMin(arr: Array<number>): number;
    /**
     * @description 数组元素求和（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    arrSum(arr: Array<number>): number;
    /**
     * @description 数组元素平均值（number）
     * @param {Array < number >} arr
     * @returns {number}
     */
    arrAverage(arr: Array<number>): number;
    /**
     * @description 合并两个对象
     * @param {*} a 对象
     * @param {*} b 对象
     * @returns {Object}
     */
    mergeJSON(a: any, b: any): Object;
    /**
     * @description 深拷贝数组或对象
     * @param {(object | Array < any >)} o 数组或对象
     * @returns {(object | Array < any >)}
     */
    deepCopy(o: object | Array<any>): object | Array<any>;
}
export { modules as ArrayMod };
