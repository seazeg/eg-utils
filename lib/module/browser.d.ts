declare class modules {
    /**
     * @description 获取当前浏览器版本
     * @returns {*}
     */
    getBrowser(): any;
    /**
     * @description 获取当前操作系统类型
     * @returns {*}
     */
    getOS(): any;
    /**
     * @description 获取url中指定参数值
     * @param {string} param 参数名称
     * @returns {(string | null)}
     */
    getQueryParam(param: string): string | null;
    /**
     * @description url地址参数序列化
     * @param {string} url
     * @returns {*}
     */
    parseQueryParam(url: string): any;
    /**
     * @description url参数对象反序列化
     * @param {{[key:string]:any}} paramObj {a:1,b:1}
     * @returns {*}
     */
    stringfyQueryParam(paramObj: {
        [key: string]: any;
    }): any;
    /**
     * @description 设置cookie
     * @param {*} key
     * @param {*} value
     * @param {*} days 过期时间长度
     */
    setCookie(key: any, value: any, days: any): void;
    /**
     * @description 获取指定cookie
     * @param {*} key
     * @returns {*}
     */
    getCookie(key: any): any;
    /**
     * @description 删除指定cookie
     * @param {*} key
     */
    delCookie(key: any): void;
    /**
     * @description 获取相对路径的绝对路径
     * @param {string} url 相对路径
     * @returns {string} 绝对路径
     */
    getAbsoluteUrl(url: string): string;
}
export { modules as BrowserMod };
