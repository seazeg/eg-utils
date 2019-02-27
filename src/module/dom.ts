class modules {
    /**
     * @description 判断是否有指定class
     * @param {*} ele
     * @param {*} cls
     * @returns {boolean}
     */
    public hasClass(ele:any, cls:any):boolean {
        return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
    }
    /**
     * @description 添加class
     * @param {*} ele
     * @param {*} cls
     */
    public addClass(ele:any, cls:any):void {
        if (!this.hasClass(ele, cls)) {
            ele.className += ' ' + cls;
        }
    }
    /**
     * @description 删除class
     * @param {*} ele
     * @param {*} cls
     */
    public removeClass(ele:any, cls:any) {
        if (this.hasClass(ele, cls)) {
            ele.className = ele.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' ');
        }
    }
    /**
     * @description html转成字符串
     * @param {*} htmlDOM htmlDOM
     * @returns {string}
     */
    public htmlToStirng(htmlDOM: any): string {
        let temp = document.createElement("div");
        temp.appendChild(htmlDOM);
        return temp.innerHTML
    }
    /**
     * @description 字符串转html
     * @param {*} htmlString html字符串
     * @returns {*}
     */
    public stringToHtml(htmlString: any): any {
        let temp = document.createElement("div");
        temp.innerHTML = htmlString;
        return temp.children[0];
    }

}
export {
    modules as DomMod
}