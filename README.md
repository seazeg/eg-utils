# Javascript 常用工具类库

[![npm version](https://img.shields.io/npm/v/eg-utils.svg?style=flat-square)](https://www.npmjs.org/package/eg-utils)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/xe-utils/blob/master/LICENSE)

eg-Utils 提供常用的一些工具函数和方法

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6.1+ ✔ |

## npm 安装

```javascript
npm i eg-utils -S
```

## 开始使用

CDN / unpkg
```html
<script src="https://cdn.jsdelivr.net/npm/eg-utils@1.1.6/dist/eg-utils.js"></script>
<!-- <script src="https://unpkg.com/eg-utils@1.1.6/dist/eg-utils.js"></script> -->
<script>
egUtils.isString('evang') //true
</script>
```

nodejs
```javascript
const egUtils = require('eg-utils');
egUtils.isString('evang') //true
```

ES6
```javascript
import egUtils from 'eg-utils'
egUtils.isString('evang') //true
```

### API详细文档[戳这里](https://github.com/seazeg/eg-utils/wiki/API)

### License

Copyright (c) 2019-present, Evan.G
