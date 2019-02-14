const path = require('path');
const fs = require('fs');
const o = require('../index');

// ------------------------- 测试webToPdf -------------------------
// const web = 'https://www.baidu.com/';
// const pdf = path.join(__dirname, '..', 'files', 'a.pdf');
// try {
//     o.webToPdf(web, pdf);
//     console.log('done');
// } catch (err) {
//     console.error(err);
// }
// ------------------------- 测试webToPdf -------------------------


// ------------------------- 测试webToImg -------------------------
// const web = 'https://www.baidu.com/';
// const img = path.join(__dirname, '..', 'files', 'a.png');
// try {
//     o.webToImg(web, img);
//     console.log('done');
//     console.log(fs.existsSync(img));
// } catch (err) {
//     console.error(err);
// }
// ------------------------- 测试webToImg -------------------------


// ------------------------- 测试webToImg -------------------------
const web = path.join(__dirname, 'html', 'index.html');
const file = path.join(__dirname, '..', 'files', 'b.jpg');
try {
    o.htmlToPdf(web, file);
    console.log('done');
    console.log(fs.existsSync(file));
} catch (err) {
    console.error(err);
}
