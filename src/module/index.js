'use strict'
const baseModule = require('./base');
const stringModule = require('./string');
const numberModule = require('./number');
const arrayModule = require('./array');
const dateModule = require('./date');
const otherModule = require('./other');

let modules = {};
Object.assign(
    modules,
    baseModule,
    stringModule,
    numberModule,
    arrayModule,
    dateModule,
    otherModule
)
module.exports = modules;