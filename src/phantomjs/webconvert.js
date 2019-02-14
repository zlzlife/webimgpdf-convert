var system = require('system');
var webpage = require('webpage');
var args = system.args;
var page = webpage.create();
// 网页地址
var webUrl = args[1];
// 输出的文件地址
var output = args[2];
// 输出的文件路径
var format = args[3];
// 质量
var quality = args[4] || 100;
// 超时时间,单位为秒
var timeout = (args[5] || 10) * 1000;

console.log(' webUrl : ' + webUrl);
console.log(' output : ' + output);
console.log(' format : ' + format);
console.log(' quality : ' + quality);
console.log(' timeout : ' + timeout);

page.open(webUrl, function (status) {
    console.log(' status : ' + status);
    page.render(output, {format: format, quality: quality});
    phantom.exit();
});

// 超过10秒没有响应就退出
setTimeout(function () {
    phantom.exit();
}, timeout);
