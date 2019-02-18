'use strict'
const modules = require('./module/');

let egUtils = (function () {
    let egUtils = function (options) {
        return new egUtils.fn.init(options).modules;
    }

    egUtils.fn = egUtils.prototype = {
        constructor: egUtils,
        init: function (options) {
            this.options = options;
            this.modules = modules;
        }
    }
    egUtils.fn.init.prototype = egUtils.fn;
    return egUtils;
})();
