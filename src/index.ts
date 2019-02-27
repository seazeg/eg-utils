import {
    BaseMod
} from './module/base'
import {
    StringMod
} from './module/string'
import {
    NumberMod
} from './module/number'
import {
    DateMod
} from './module/date'
import {
    ArrayMod
} from './module/array'
import {
    DomMod
} from './module/dom'
import {
    BrowserMod
} from './module/browser'
import {
    OtherMod
} from './module/other'

/**
 * @description 入口主函数
 * @class Center
 */
class Center {
    _extend(target: any, source: any) {
        if (Object.prototype.toString.call(target) === '[object Object]' && Object.prototype.toString.call(source) === '[object Object]') {
            for (let key in source) {
                target[key] = target[key] && target[key].toString() === "[object Object]" ?
                    this._extend(target[key], source[key]) : target[key] = source[key];
            }
        }
        return target;
    }
    _init() {
        let modules: {
            [key: string]: any
        } = {
            'BaseMod': BaseMod,
            'StringMod': StringMod,
            'NumberMod': NumberMod,
            'DateMod': DateMod,
            'ArrayMod': ArrayMod,
            'DomMod': DomMod,
            'BrowserMod': BrowserMod,
            'OtherMod': OtherMod
        }
        let res: {
            [key: string]: any
        } = {}
        for (let m in modules) {
            res = this._extend(res, new modules[m])
        }
        res.help = function () {
            console.info('目前共有函数方法个数：' + Object.keys(res).length);
            console.table(Object.keys(res))
        }
        return res;
    }
}

export = (new Center())._init();