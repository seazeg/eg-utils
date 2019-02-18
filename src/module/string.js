'use strict'
module.exports ={
    /**
     * @description 去字符串空格
     * @param {string} str 字符串
     * @param {number} type 1-所有空格  2-前后空格  3-前空格 4-后空格
     * @returns {string}
     */
    trim: function (str, type) {
        type = type || 1;
        switch (type) {
            case 1:
                return str.replace(/\s+/g, "");
            case 2:
                return str.replace(/(^\s*)|(\s*$)/g, "");
            case 3:
                return str.replace(/(^\s*)/g, "");
            case 4:
                return str.replace(/(\s*$)/g, "");
            default:
                return str;
        }
    },
    /**
     * @description 替换字符串中所有指定字符
     * @param {string} str 内容
     * @param {string} beforeStr 需要替换字符
     * @param {string} afterStr 替换成的字符
     * @returns {(string)}
     */
    replaceAll: function (str, beforeStr, afterStr) {
        return str.replace(new RegExp(beforeStr, 'gm'), afterStr);
    },
    /**
     * @description 替换被截取字符串
     * @param {string} str 内容
     * @param {number} subStart 截取开始位置
     * @param {number} subEnd 截取结束位置
     * @param {string} beforeStr 需要替换字符
     * @param {string} afterStr 替换成的字符
     * @returns {(string)}
     */
    replaceSubString: function (options) {
        let temp = options.str.substring(options.subStart, options.subEnd);
        return temp.replace(options.beforeStr, options.afterStr);
    },
    /**
     * @description 过滤html操作符
     * @param {string} value
     * @returns {string}
     */
    filterHtmlCode: function (str) {
        let temp = {
            '<': '&lt;',
            '>': '&gt',
            '&': '&amp;',
            '(': '&#40;',
            ')': '&#41;',
            ' ': '&nbsp;',
            '"': '&quot;',
            '\'': "&#39;"
        };
        return str.replace(/[<>&|() '"]/g, function (chr) {
            return temp[chr];
        });
    },
}
