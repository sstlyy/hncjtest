/*
*公共请求数据的函数
* @param passage1 请求数据的接口
* @param passage2 请求数据的参数
* @param method   请求数据的方法get/post
* @param callback  回调函数
 */
function requestMethod(passage1, passage2, method, callback) {
    //1.创建对象
    var xhr = new XMLHttpRequest();
    //2.与服务器建立连接
    xhr.open(method, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + passage1);
    //3.设置头部信息
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //4.发送请求
    xhr.send(passage2);
    //5.接受服务端返回的数据
    xhr.onreadystatechange = function () {
        //readyState == 4  代表ajax数据请求已经完成
        //status == 200 表示数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = JSON.parse(xhr.responseText);
            var str = res.data;
            callback(str);
        }
    }
}



