import { BaseMod } from './base';
declare class modules extends BaseMod {
    /**
     * @description 去除字符串空格
     * @param {string} str 字符串
     * @param {number} type all-所有空格  side-前后空格  left-前空格 right-后空格
     * @returns {string}
     */
    trim(str: string, type: string): string;
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
     * @description 过滤html操作符(防XSS)
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
    /**
     * @description 中文转Unicode码
     * @param {string} str
     * @returns {string}
     */
    toUnicode(str: string): string;
    /**
     * @description Unicode码转中文
     * @param {string} str
     * @returns {string}
     */
    toGB2312(str: any): string;
    /**
     * @description 获取相对路径的绝对路径
     * @param {string} url 相对路径
     * @returns {string} 绝对路径
     */
    getAbsoluteUrl(url: string): string;
}
export { modules as StringMod };
