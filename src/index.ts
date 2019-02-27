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
            for (var key in source) {
                target[key] = target[key] && target[key].toString() === "[object Object]" ?
                    this._extend(target[key],source[key]) : target[key] = source[key];
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
            'DomMod':DomMod,
            'BrowserMod':BrowserMod,
            'OtherMod': OtherMod
        }
        let res = {}
        for (let m in modules) {
            res = this._extend(res, new modules[m])
        }
        return res;
    }
}

export = (new Center())._init();
