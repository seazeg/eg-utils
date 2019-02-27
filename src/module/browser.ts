class modules {
    /**
     * @description 获取当前浏览器版本
     * @returns {*}
     */
    public getBrowser(): any {
        let sys:{[key: string]: any} = {},ua = navigator.userAgent.toLowerCase(),s;
            (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
            (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1]:
            (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1]:
            (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1]:
            (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1]:
            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1]:
            (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1]:0;
        if (sys.ie) return ('IE: ' + sys.ie)
        if (sys.edge) return ('EDGE: ' + sys.edge)
        if (sys.firefox) return ('Firefox: ' + sys.firefox)
        if (sys.chrome) return ('Chrome: ' + sys.chrome)
        if (sys.opera) return ('Opera: ' + sys.opera)
        if (sys.safari) return ('Safari: ' + sys.safari)
        return 'Unkonwn'
    }
    /**
     * @description 获取当前操作系统类型
     * @returns {*}
     */
    public getOS():any {
        let userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
        let vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
        let appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
    
        if (/mac/i.test(appVersion)) return 'MacOSX'
        if (/win/i.test(appVersion)) return 'windows'
        if (/linux/i.test(appVersion)) return 'linux'
        if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'
        if (/android/i.test(userAgent)) return 'android'
        if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
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
     * @description url地址参数序列化
     * @param {string} url
     * @returns {*}
     */
    public parseQueryParam(url:string):any {
        url = url == null ? window.location.href : url
        let search = url.substring(url.lastIndexOf('?') + 1)
        if (!search) {
            return {}
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    }
    /**
     * @description url参数对象反序列化
     * @param {{[key:string]:any}} paramObj {a:1,b:1}
     * @returns {*}
     */
    public stringfyQueryParam(paramObj:{[key:string]:any}):any {
        if (!paramObj) return '';
        let temp = [];
        for (let key in paramObj) {
            let value = paramObj[key];
            if (value instanceof Array) {
                for (let i = 0; i < value.length; ++i) {
                    temp.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                }
                continue;
            }
            temp.push(encodeURIComponent(key) + '=' + encodeURIComponent(paramObj[key]));
        }
        return temp.join('&');
    }
    /**
     * @description 设置cookie
     * @param {*} key
     * @param {*} value
     * @param {*} days 过期时间长度
     */
    public setCookie(key: any, value: any, days: any): void {
        let Days = days || 30 * 24 * 60 * 60 * 1000;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days);
        document.cookie = key + "=" + escape(value) + ";expires=" + exp.toUTCString();
    }
    /**
     * @description 获取指定cookie
     * @param {*} key
     * @returns {*}
     */
    public getCookie(key: any): any {
        let arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
        if (arr != null) {
            return (arr[2]);
        } else {
            return "";
        }
    }
    /**
     * @description 删除指定cookie
     * @param {*} key
     */
    public delCookie(key: any): void {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let tmpValue = this.getCookie(key);
        if (tmpValue != null) {
            document.cookie = key + "=" + tmpValue + ";expires=" + exp.toUTCString();
        }
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

}

export {
    modules as BrowserMod
}