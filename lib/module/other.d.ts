declare class modules {
    /**
     * @description html转成字符串
     * @param {*} htmlDOM htmlDOM
     * @returns {string}
     */
    htmlToStirng(htmlDOM: any): string;
    /**
     * @description 字符串转html
     * @param {*} htmlString html字符串
     * @returns {*}
     */
    stringToHtml(htmlString: any): any;
    /**
     * @description 获取url中指定参数值
     * @param {string} param 参数名称
     * @returns {(string | null)}
     */
    getQueryParam(param: string): string | null;
    /**
     * @description 随机生成色值
     * @returns {string}
     */
    getRandomColor(): string;
    /**
     * @description 获取当前浏览器版本
     * @returns {*}
     */
    getBrowserType(): any;
    /**
     * @description 获取相对路径的绝对路径
     * @param {string} url 相对路径
     * @returns {string} 绝对路径
     */
    relativePathToFullPath(url: string): string;
    /**
     * @description 校验密码强度(通用)
     * @param {*} str 字符串
     * @returns {number}
     */
    checkPwd(str: string): number;
    /**
     * @description 颜色16进制转RGB
     * @param {string} str #000000
     * @returns {string} RGB(0,0,0)
     */
    HEXToRGB(str: string): string;
    /**
     * @description 颜色RGB转16进制
     * @param {string} str RGB(0,0,0)
     * @returns {string} #000000
     */
    RGBToHEX(str: string): string;
}
export { modules as OtherMod };
