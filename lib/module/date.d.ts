import { BaseMod } from './base';
declare class modules extends BaseMod {
    /**
     * @description 格式化日期
     * @param {any} date 时间戳或日期
     * @param {string} type 默认：yyyy-MM-dd hh:mm:ss
     * @returns {any}
     */
    formatDate(date: any, type: string): any;
    /**
     * @description 格式化时分秒
     * @param {any} date 时间戳
     * @returns {string}
     */
    formatTime(time: any): string;
    /**
     * @description 获取两个日期间差值
     * @param {*} startDate
     * @param {*} endDate
     * @returns {number}
     */
    getDayMinus(startDate: any, endDate: any): number;
    /**
     * @description 获取某年有多少天
     * @param {*} year 1999
     * @returns {number}
     */
    getYearDays(year: any): number;
    /**
     * @description 获取某年某月有多少天
     * @param {*} date 1999-1
     * @returns {number}
     */
    getMonthDays(date: any): number;
    /**
     * @description 获取某年某天是第几周
     * @param {*} date 1999-1-1
     * @returns {number}
     */
    getWhichWeek(date: any): number;
    /**
     * @description 获取某日期前后若干天数的日期
     * @param {*} date
     * @param {number} minusDays
     * @returns {string}
     */
    getDateMinusDaysDate(date: any, minusDays: number): string;
}
export { modules as DateMod };
