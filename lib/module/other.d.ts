declare class modules {
    /**
     * @description 随机生成色值
     * @returns {string}
     */
    getRandomColor(): string;
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
    /**
     * @description 一次执行函数（防止重复调用或加载）
     * @param {*} fn
     * @param {*} context
     * @returns
     */
    once(func: any, context: any): () => any;
    /**
     * @description 防抖函数
     * @param {*} func 函数体
     * @param {number} wait 间隔时间
     * @returns
     */
    debounce(func: any, wait: number): () => void;
    /**
     * @description 节流函数
     * @param {*} func 函数体
     * @param {number} wait 间隔时间
     * @returns
     */
    throttle(func: any, wait: number): () => void;
}
export { modules as OtherMod };
