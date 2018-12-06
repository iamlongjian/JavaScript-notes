//返回指定节点下的指定标签名的子节点
var city = document.getElementById("city");
var lis = city.getElementsByTagName("li");
for(var i =0;i<lis.length;i++){
    console.log(lis[i]);
}
//返回指定节点下的所有子元素
var city = document.getElementById("city");
var lis = city.children;

for(var i =0;i<lis.length;i++){
    alert(lis[i].innerHTML);
}
//返回指定节点下的第一个子节点(包括空白节点)

var btn = document.getElementById('btn');
btn.onclick=function(){
    var city = document.getElementById("city");
    var lis = city.firstChild;  //获取第一个子节点
    // var lis = city.firstElementChild;  //获取子元素  //但是不支持IE8及以下,所以不推荐
    alert(lis.innerHTML);
}
//返回指定节点下的最后一个子节点(包括空白节点)
var btn = document.getElementById("btn");
btn.onclick=function (){
    var city = document.getElementById("city");
    var lst = city.lastChild;       //获取最后一个子节点
    alert(lst.innerHTML);
}