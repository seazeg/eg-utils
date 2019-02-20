'use strict'
const allModules = require('./module');

let egUtils = (function () {
    let egUtils = function (options) {
        return new egUtils.fn.init(options).allModules;
    }

    egUtils.fn = egUtils.prototype = {
        constructor: egUtils,
        init: function (options) {
            this.options = options;
            this.allModules = allModules;
        }
    }
    egUtils.fn.init.prototype = egUtils.fn;
    return egUtils;
})();

module.exports = new egUtils()

