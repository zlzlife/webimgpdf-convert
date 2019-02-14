const cp = require('child_process');
const path = require('path');
const phantomjsPath = path.join(__dirname, 'src', 'phantomjs', 'webconvert.js');

/**
 * 将网页转成pdf
 * @param {string} web 网页地址 https://www.baidu.com
 * @param {string} pdf 文件输出路劲 /xxx/xxx/xxx/a.pdf
 */
function webToPdf(web, pdf) {
    const phantomjs = 'phantomjs';
    const format = 'pdf';
    const quality = 100;
    const timeout = 10;
    const cmd = [
        phantomjs,
        phantomjsPath,
        web,
        pdf,
        format,
        quality,
        timeout
    ];
    console.log(cmd.join(' '));
    cp.execSync(cmd.join(' '));
}

/**
 * 将指定网页转成图片
 * @param {string} web 网页地址 https://www.baidu.com
 * @param {string} img 文件输出路劲 /xxx/xxx/xxx/a.jpg
 */
function webToImg(web, img) {
    const phantomjs = 'phantomjs';
    const quality = 100;
    const timeout = 10;
    const format = path.extname(img).substr(1);
    const cmd = [
        phantomjs,
        phantomjsPath,
        web,
        img,
        format,
        quality,
        timeout
    ];
    console.log(cmd.join(' '));
    cp.execSync(cmd.join(' '));
}

/**
 * 将html转成pdf文件
 * @param {string} html HTML文件路劲 /xxx/xxx/xxx/a.html
 * @param {string} pdf 文件输出路劲 /xxx/xxx/xxx/a.pdf
 */
function htmlToPdf(html, pdf) {
    webToPdf(path.join('file:///', html), pdf);
}

/**
 * 将html转成img文件
 * @param {string} html HTML文件路劲 /xxx/xxx/xxx/a.html
 * @param {string} img 文件输出路劲 /xxx/xxx/xxx/a.jpg
 */
function htmlToImg(html, img) {
    webToImg(path.join('file:///', html), img);
}

module.exports.webToPdf = webToPdf;
module.exports.webToImg = webToImg;
module.exports.htmlToPdf = htmlToPdf;
module.exports.htmlToImg = htmlToImg;
