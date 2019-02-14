const path = require('path');
const o = require('../index');

// ------------------------- 测试webToPdf -------------------------
const web = 'https://www.baidu.com/';
const pdf = path.join(__dirname, '..', 'files', 'a.pdf');
try {
    o.webToPdf(web, pdf);
    console.log('done');
} catch (err) {
    console.error(err);
}
// ------------------------- 测试webToPdf -------------------------


