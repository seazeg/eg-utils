const egUtils = require('../lib/index');

//base.js
test('isString:', () => {
    expect(egUtils.isString('test')).toBe(true);
});
test('isNumber:', () => {
    expect(egUtils.isNumber(1)).toBe(true);
});
test('isBoolean:', () => {
    expect(egUtils.isBoolean(true)).toBe(true);
});
test('isFunction:', () => {
    expect(egUtils.isFunction(function () {})).toBe(true);
});
test('isNull:', () => {
    expect(egUtils.isNull(null)).toBe(true);
});
test('isUndefined:', () => {
    expect(egUtils.isUndefined(undefined)).toBe(true);
});
test('isObject:', () => {
    expect(egUtils.isObject({})).toBe(true);
});
test('isArray:', () => {
    expect(egUtils.isArray([])).toBe(true);
});
test('isDate:', () => {
    expect(egUtils.isDate(new Date())).toBe(true);
});
test('isRegExp:', () => {
    expect(egUtils.isRegExp(new RegExp('g'))).toBe(true);
});
test('isError:', () => {
    expect(egUtils.isError(new Error())).toBe(true);
});
test('isSymbol:', () => {
    expect(egUtils.isSymbol(Symbol())).toBe(true);
});
test('isPromise:', () => {
    expect(egUtils.isPromise(new Promise(function (resolve, reject) {}))).toBe(true);
});
test('isSet:', () => {
    expect(egUtils.isSet(new Set())).toBe(true);
});
test('isEmpty:', () => {
    expect(egUtils.isEmpty('')).toBe(true);
});
test('isInteger:', () => {
    expect(egUtils.isInteger(100)).toBe(true);
});
test('isFloat:', () => {
    expect(egUtils.isFloat(3.14)).toBe(true);
});
test('isLeapYear:', () => {
    expect(egUtils.isLeapYear(1984)).toBe(true);
});
test('isHtml:', () => {
    expect(egUtils.isHtml('<div>html</div>')).toBe(true);
});
test('isCardID:', () => {
    expect(egUtils.isCardID('370902201809093241')).toBe(false);
});
test('isVerify:', () => {
    expect(egUtils.isVerify(1, 'num')).toBe(true);
    expect(egUtils.isVerify('en', 'en')).toBe(true);
    expect(egUtils.isVerify('中文', 'chn')).toBe(true);
    expect(egUtils.isVerify('en', 'lower')).toBe(true);
    expect(egUtils.isVerify('EN', 'upper')).toBe(true);
    expect(egUtils.isVerify('15066876086', 'phone')).toBe(true);
    expect(egUtils.isVerify('0532-88888888', 'tel')).toBe(true);
    expect(egUtils.isVerify('http://baidu.com', 'url')).toBe(true);
    expect(egUtils.isVerify('192.168.1.1', 'ip')).toBe(true);
    expect(egUtils.isVerify('2019-01-01', 'date')).toBe(true);
    expect(egUtils.isVerify('seazeg@126.com', 'email')).toBe(true);
    expect(egUtils.isVerify('266000', 'postal')).toBe(true);
});

//array
test('arrUnique:', () => {
    expect(egUtils.arrUnique([1, 1, 2, 3])).toEqual([1, 2, 3]);
});
test('arrSort:', () => {
    expect(egUtils.arrSort([1, 3, 2], 1)).toEqual([3, 2, 1]);
    expect(egUtils.arrSort([1, 3, 2], 2)).toEqual([1, 2, 3]);
});
test('arrRemove:', () => {
    expect(egUtils.arrRemove(['aa', 'bb', 'cc'], 'bb')).toEqual(['aa', 'cc']);
});
test('arrUnion:', () => {
    expect(egUtils.arrUnion([1, 2, 3], [1, 3, 4])).toEqual([1, 2, 3, 4]);
});
test('arrIntersect:', () => {
    expect(egUtils.arrIntersect([1, 2, 3], [1, 3, 4])).toEqual([1, 3]);
});
test('arrMax:', () => {
    expect(egUtils.arrMax([1, 2, 3])).toBe(3);
});
test('arrMin:', () => {
    expect(egUtils.arrMin([1, 2, 3])).toBe(1);
});
test('arrSum:', () => {
    expect(egUtils.arrSum([1, 2, 3])).toBe(6);
});
test('arrAverage:', () => {
    expect(egUtils.arrAverage([1, 2, 3])).toBe(2);
});
test('arrEqual:', () => {
    expect(egUtils.arrEqual([1, 2, 3], [1, 2, 3])).toBe(true);
});
test('getObjectLen:', () => {
    expect(egUtils.getObjectLen({a:1,b:2})).toBe(2);
});

//number
test('numAdd:', () => {
    expect(egUtils.numAdd(300,3.14)).toBe(303.14);
});
test('numSub:', () => {
    expect(egUtils.numSub(300,3.14)).toBe(296.86);
});
test('numMul:', () => {
    expect(egUtils.numMul(300,3.14)).toBe(942);
});
test('numDivi:', () => {
    expect(egUtils.numDivi(300,2.5)).toBe(120);
});
test('getFormatCurrency:', () => {
    expect(egUtils.getFormatCurrency('10000')).toBe('10,000');
});
test('changeToChnCurrency:', () => {
    expect(egUtils.changeToChnCurrency('100')).toBe('壹佰元整');
});

//string
test('trim:', () => {
    expect(egUtils.trim(' ab c ', 1)).toBe('abc');
    expect(egUtils.trim(' ab c ', 2)).toBe('ab c');
    expect(egUtils.trim(' ab c ', 3)).toBe('ab c ');
    expect(egUtils.trim(' ab c ', 4)).toBe(' ab c');
});
test('replaceAll:', () => {
    expect(egUtils.replaceAll('aabbccc', 'b', 'f')).toBe('aaffccc');
});
test('replaceSubString:', () => {
    expect(egUtils.replaceSubString({
        str: 'aabbcc',
        subStart: 1,
        subEnd: 3,
        beforeStr: 'a',
        afterStr: 'o'
    })).toBe('ob');
});
test('filterHtmlCode:', () => {
    expect(egUtils.filterHtmlCode('<div>&123</div>')).toBe('&lt;div&gt&amp;123&lt;/div&gt');
});
test('fristCharUpperCase:', () => {
    expect(egUtils.fristCharUpperCase('abc')).toBe('Abc');
});
test('fristCharLowerCase:', () => {
    expect(egUtils.fristCharLowerCase('ABC')).toBe('aBC');
});
test('compressRepeatedStr:', () => {
    expect(egUtils.compressRepeatedStr('bbbccccc')).toBe('3b5c');
});
test('toUnicode:', () => {
    expect(egUtils.toUnicode('中文')).toBe('\\u4e2d\\u6587');
});
test('toGB2312:', () => {
    expect(egUtils.toGB2312('\\u4e2d\\u6587')).toBe('中文');
});

//date
test('formatDate:', () => {
    expect(egUtils.formatDate(1551184404277, 'yyyy-MM-dd hh:mm:ss')).toBe('2019-02-26 20:33:24');
});
test('formatTime:', () => {
    expect(egUtils.formatTime(3620)).toBe('1小时0分20秒');
});
test('getDayMinus:', () => {
    expect(egUtils.getDayMinus('2018-12-3', '2019-2-26')).toBe(85);
});
test('getYearDays:', () => {
    expect(egUtils.getYearDays(2019)).toBe(365);
});
test('getMonthDays:', () => {
    expect(egUtils.getMonthDays('1984-2')).toBe(29);
});
test('getWhichWeek:', () => {
    expect(egUtils.getWhichWeek('2019-2-26')).toBe(8);
});
test('getDateMinusDaysDate:', () => {
    expect(egUtils.getDateMinusDaysDate('2018-12-3', 158)).toBe('2019-5-10');
    expect(egUtils.getDateMinusDaysDate('2018-12-3', -11)).toBe('2018-11-22');
});

// browser
test('parseQueryParam:', () => {
    expect(egUtils.parseQueryParam('http://www.evang.cn?a=1&b=2')).toEqual({a:'1',b:'2'});
});
test('stringfyQueryParam:', () => {
    expect(egUtils.stringfyQueryParam({a:1,b:2})).toBe('a=1&b=2');
});

//other
test('checkPwd:', () => {
    expect(egUtils.checkPwd('12345')).toBe(0);
    expect(egUtils.checkPwd('123456')).toBe(1);
    expect(egUtils.checkPwd('123456abc')).toBe(2);
    expect(egUtils.checkPwd('123456Abc')).toBe(3);
    expect(egUtils.checkPwd('123456Abc_')).toBe(4);
});
test('HEXToRGB:', () => {
    expect(egUtils.HEXToRGB('#000000')).toBe('RGB(0,0,0)');
});
test('RGBToHEX:', () => {
    expect(egUtils.RGBToHEX('RGB(0,0,0)')).toBe('#000000');
});