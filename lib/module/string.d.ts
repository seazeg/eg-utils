import { BaseMod } from './base';
declare class modules extends BaseMod {
    /**
     * @description 去字符串空格
     * @param {string} str 字符串
     * @param {number} type 1-所有空格  2-前后空格  3-前空格 4-后空格
     * @returns {string}
     */
    trim(str: string, type: number): string;
    /**
     * @description 替换字符串中所有指定字符
     * @param {string} str 内容
     * @param {string} beforeStr 需要替换字符
     * @param {string} afterStr 替换成的字符
     * @returns {(string)}
     */
    replaceAll(str: string, beforeStr: string, afterStr: string): string;
    /**
     * @description 替换被截取字符串
     * @param {string} str 内容
     * @param {number} subStart 截取开始位置
     * @param {number} subEnd 截取结束位置
     * @param {string} beforeStr 需要替换字符
     * @param {string} afterStr 替换成的字符
     * @returns {(string)}
     */
    replaceSubString(options: {
        [key: string]: any;
    }): string;
    /**
     * @description 过滤html操作符
     * @param {string} value
     * @returns {string}
     */
    filterHtmlCode(str: string): string;
    /**
     * @description 首字母大写
     * @param {string} str
     * @returns {string}
     */
    fristCharUpperCase(str: string): string;
    /**
     * @description 首字母小写
     * @param {string} str
     * @returns {string}
     */
    fristCharLowerCase(str: string): string;
    /**
     * @description 压缩相同且连续的字符
     * @param {string} str
     * @param {boolean} 是否区分大小写
     * @returns {string} bbbssss => 3b4s
     */
    compressRepeatedStr(str: string, ignoreCase: boolean): string;
}
export { modules as StringMod };
