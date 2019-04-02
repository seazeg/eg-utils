declare class modules {
    /**
     * @description 判断是否有指定class
     * @param {*} ele
     * @param {*} cls
     * @returns {boolean}
     */
    hasClass(ele: any, cls: any): boolean;
    /**
     * @description 添加class
     * @param {*} ele
     * @param {*} cls
     */
    addClass(ele: any, cls: any): void;
    /**
     * @description 删除class
     * @param {*} ele
     * @param {*} cls
     */
    removeClass(ele: any, cls: any): void;
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
     * @description 简易双向绑定
     * @param {*} inputObj 输入的input
     * @param {*} outputObj 输出的input
     * @returns {*}
     */
    viewModel(inputObj: any, outputObj: any): any;
}
export { modules as DomMod };
