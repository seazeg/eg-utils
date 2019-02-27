class modules {
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
     * @description 校验密码强度(通用)
     * @param {*} str 字符串
     * @returns {number}
     */
    public checkPwd(str: string): number {
        let level = 0;
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