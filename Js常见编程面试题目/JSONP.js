function jsonp(url, data = {}, callback) {
    // 转化数据为url字符串形式
    let dataStr = url.indexOf('?') === -1 ? '?' : '&';
    for (let key in data) {
        dataStr += `${key}=${data[key]}&`;
    }
    // 处理url中的回调函数
    let cb_name = 'jsonpCallback';
    dataStr += 'callback=' + cb_name;
    // 创建srcipt标签并添加src属性值
    let scriptBody = document.createElement('script');
    scriptBody.src = url + dataStr;
    // 在全局对象上挂载回调函数
    window[cb_name] = function (data) {
        callback(data);
        document.body.removeChild(scriptBody);
    }
    // append到页面中 添加到页面就立刻发起请求
    document.body.appendChild(scriptBody);
}
// 来源：https://zhuanlan.zhihu.com/p/82728612
/**
 * JSONP原理就是动态插入带有跨域url的script标签，然后调用回调函数，
    把我们需要的json数据作为参数传入，通过一些逻辑把数据显示在页面上。
 */
