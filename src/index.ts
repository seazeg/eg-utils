import {BaseMod} from './module/base'
import {StringMod} from './module/string'
import {NumberMod} from './module/number'
import {DateMod} from './module/date'
import {ArrayMod} from './module/array'
import {OtherMod} from './module/other'

/**
 * @description 入口主函数
 * @class Core
 */
class GTools{
    static init(){
        return (new this).merge()
    }
    constructor(public options:{[key:string]:any} = {}){
        this.options = options
    }
    private _extend(target:any,source:any){
        if(Object.prototype.toString.call(target) === '[object Object]' && Object.prototype.toString.call(source) === '[object Object]'){
            for(var key in source){
                target[key] = target[key] && target[key].toString() === "[object Object]" ?
                this._extend(target[key], source[key]) : target[key] = source[key];
            }
        }else if(Object.prototype.toString.call(target) === '[object Array]' && Object.prototype.toString.call(source) === '[object Array]'){
            target=target.concat(source);
        }
        return target;
    }
    private merge(){
       let modules: {[key:string]:any}={
            'BaseMod':BaseMod,
            'StringMod':StringMod,
            'NumberMod':NumberMod,
            'DateMod':DateMod,
            'ArrayMod':ArrayMod,
            'OtherMod':OtherMod
       }
       let res = {}
       for(let m in modules){
            res = this._extend(res,new modules[m])
       }
       return res;
    }
}

// interface Global extends Window {
//     GTools: any
// }
// (<Global>window).GTools = GTools.init();


