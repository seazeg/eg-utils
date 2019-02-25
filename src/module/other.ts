class modules {
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
    /**
     * @description 获取url中指定参数值
     * @param {string} param 参数名称
     * @returns {(string | null)}
     */
    public getQueryParam(param: string): string | null {
        let r = window.location.search.substr(1).match(new RegExp("(^|&)" + param + "=([^&]*)(&|$)")); //search,查询？后面的参数，并匹配正则
        if (r != null) {
            return decodeURIComponent(r[2]);
        } else {
            return null;
        }
    }
    /**
     * @description 随机生成色值
     * @returns {string}
     */
    public getRandomColor(): string {
        return '#' +
            (function (color) {
                return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
                    (color.length == 6) ? color : arguments.callee(color);
            })('');
    }
    /**
     * @description 获取当前浏览器版本
     * @returns {*}
     */
    public getBrowserType(): any {
        let userAgent = navigator.userAgent;
        let isOpera = userAgent.indexOf("Opera") > -1;
        let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
        let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        let isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
        let isFF = userAgent.indexOf("Firefox") > -1;
        let isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1;
        let isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;

        if (isIE) {
            let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            let fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7) return "IE7"
            else if (fIEVersion == 8) return "IE8";
            else if (fIEVersion == 9) return "IE9";
            else if (fIEVersion == 10) return "IE10";
            else return "IE7以下"
        }
        if (isIE11) return 'IE11';
        if (isEdge) return "Edge";
        if (isFF) return "FF";
        if (isOpera) return "Opera";
        if (isSafari) return "Safari";
        if (isChrome) return "Chrome";
    }
    /**
     * @description 获取相对路径的绝对路径
     * @param {string} url 相对路径
     * @returns {string} 绝对路径
     */
    public relativePathToFullPath(url: string): string {
        let img = new Image();
        img.src = url;
        url = img.src;
        img.src = '';
        return url;
    };
    /**
     * @description 校验密码强度(通用)
     * @param {*} str 字符串
     * @returns {number}
     */
    public checkPwd(str: string): number {
        var level = 0;
        if (str.length < 6) {
            return level;
        }
        if (/[0-9]/.test(str)) {
            level++;
        }
        if (/[a-z]/.test(str)) {
            level++;
        }
        if (/[A-Z]/.test(str)) {
            level++;
        }
        if (/[\.|-|_]/.test(str)) {
            level++;
        }
        return level;
    }
    /**
     * @description 颜色16进制转RGB
     * @param {string} str #000000
     * @returns {string} RGB(0,0,0)
     */
    public HEXToRGB(str: string): string {
        let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        str = str.toLowerCase();
        if (str && reg.test(str)) {
            if (str.length === 4) {
                var temp = "#";
                for (var i = 1; i < 4; i += 1) {
                    temp += str.slice(i, i + 1).concat(str.slice(i, i + 1));
                }
                str = temp;
            }
            //处理六位的颜色值
            let sColorChange = [];
            for (var i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + str.slice(i, i + 2)));
            }
            return "RGB(" + sColorChange.join(",") + ")";
        } else {
            return str;
        }
    }
    /**
     * @description 颜色RGB转16进制
     * @param {string} str RGB(0,0,0)
     * @returns {string} #000000
     */
    public RGBToHEX(str: string): string {
        let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        let result = '';
        if (/^(rgb|RGB)/.test(str)) {
            let aColor = str.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
            let strHex = "#";
            for (let i = 0; i < aColor.length; i++) {
                let hex = Number(aColor[i]).toString(16);
                if (hex === "0") {
                    hex += hex;
                }
                strHex += hex;
            }
            if (strHex.length !== 7) {
                strHex = str;
            }
            result = strHex;
        } else if (reg.test(str)) {
            let aNum = str.replace(/#/, "").split("");
            if (aNum.length === 6) {
                return str;
            } else if (aNum.length === 3) {
                let numHex = "#";
                for (let i = 0; i < aNum.length; i += 1) {
                    numHex += (aNum[i] + aNum[i]);
                }
                result = numHex;
            }
        } else {
            result = str;
        }
        return result;
    }
}

export {
    modules as OtherMod
}