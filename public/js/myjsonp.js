function jsonp(options) {
    // 动态创建script标签
    var script = document.createElement('script');
    //拼接字符串变量
    var params = '';
    for (var attr in options.data) {
        params += '&' + attr + '=' + options.data[attr];
    }
    // 拼接随机函数名称
    var fnName = 'myJsonp' + Math.random().toString().replace('.', '');
    console.log(fnName);

    //我们要想办法将它变成全局函数
    window[fnName] = options.sussess;
    // 为script标签添加src属性
    script.src = options.url + '?callback=' + fnName + params;
    // 将script标签追加到页面中
    document.body.appendChild(script);
    //为script标签添加onload加载完成事情
    script.onload = function() {
        document.body.removeChild(script)
    }
}