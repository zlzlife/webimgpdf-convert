# webimgpdf-convert
网页，html，pdf，图片互转

## Dependencies
使用前安装配置phantomjs环境

安装请参考 http://phantomjs.org/download

## Installation
> npm 
````$xslt
npm install webimgpdf-convert
````

> yarn
````$xslt
yarn add webimgpdf-convert 
````

## Usage
````$xslt
const path = require('path');
const wip = require('webimgpdf-convert');
const web = 'https://www.baidu.com';

const pdf = path.join(process.cwd(),'a.pdf');
const img = path.join(process.cwd(),'a.jpg');
const html = path.join(process.cwd(),'a.html');

//将网页转成pdf
wip.webToPdf(web, pdf);

//将网页转成img
wip.webToImg(web, img);

//将html转成pdf
wip.htmlToPdf(html, pdf);

//将html转成img
wip.htmlToImg(html, img);
````
