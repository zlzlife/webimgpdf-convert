const cp = require('child_process');
const path = require('path');
const phantomjsPath = path.join(__dirname, 'src', 'phantomjs', 'webconvert.js');

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
    console.info(cmd.join(' '));
    cp.execSync(cmd.join(' '));
}

// todo
async function webToImg(web, img) {

}

// todo
async function htmlToPdf(html, root, pdf) {

}

// todo
async function pdfToImg(pdf, img) {

}

module.exports.webToPdf = webToPdf;
module.exports.webToImg = webToImg;
module.exports.htmlToPdf = htmlToPdf;
module.exports.pdfToImg = pdfToImg;
