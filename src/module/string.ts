import {BaseMod} from './base'
class modules extends BaseMod{
    /**
     * @description 去字符串空格
     * @param {string} str 字符串
     * @param {number} type 1-所有空格  2-前后空格  3-前空格 4-后空格
     * @returns {string}
     */
    public trim(str: string, type: number): string {
        type = type || 1
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
    }
    /**
     * @description 替换字符串中所有指定字符
     * @param {string} str 内容
     * @param {string} beforeStr 需要替换字符
     * @param {string} afterStr 替换成的字符
     * @returns {(string)}
     */
    public replaceAll(str: string, beforeStr: string, afterStr: string): string {
        return str.replace(new RegExp(beforeStr, 'gm'), afterStr);
    }
    /**
     * @description 替换被截取字符串
     * @param {string} str 内容
     * @param {number} subStart 截取开始位置
     * @param {number} subEnd 截取结束位置
     * @param {string} beforeStr 需要替换字符
     * @param {string} afterStr 替换成的字符
     * @returns {(string)}
     */
    public replaceSubString(options: {
        [key: string]: any;
    }): string {
        let temp = options.str.substring(options.subStart, options.subEnd);
        return temp.replace(options.beforeStr, options.afterStr)
    }
    /**
     * @description 过滤html操作符
     * @param {string} value 
     * @returns {string}
     */
    public filterHtmlCode(str: string): string {
        const temp: {
            [key: string]: string;
        } = {
            '<': '&lt;',
            '>': '&gt',
            '&': '&amp;',
            '(': '&#40;',
            ')': '&#41;',
            ' ': '&nbsp;',
            '"': '&quot;',
            '\'': "&#39;"
        };
        return str.replace(/[<>&|() '"]/g, function (chr: string) {
            return temp[chr];
        });
    }

    /**
     * @description 首字母大写
     * @param {string} str
     * @returns {string}
     */
    public fristCharUpperCase(str:string):string {
        if (!super.isEmpty(str)) {
            return str.replace(/^[a-z]/, function (chr) {
                return chr.toLocaleUpperCase();
            });
        } else {
            return str
        }
    }
    /**
     * @description 首字母小写
     * @param {string} str
     * @returns {string}
     */
    public fristCharLowerCase(str:string):string {
        if (!super.isEmpty(str)) {
            return str.replace(/^[A-Z]/, function (chr) {
                return chr.toLocaleLowerCase();
            });
        } else {
            return str
        }
    }
    /**
     * @description 压缩相同且连续的字符
     * @param {string} str
     * @param {boolean} 是否区分大小写
     * @returns {string} bbbssss => 3b4s
     */
    public compressRepeatedStr(str:string, ignoreCase:boolean) {
        let regex = new RegExp("([a-z])\\1+", ignoreCase ? "gi" : "g");
        return str.replace(regex, function (str, group) {
            return str.length + group;
        });
    }
}

export {
    modules as StringMod
}