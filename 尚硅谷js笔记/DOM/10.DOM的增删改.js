//创建共用函数
function myClick(id,fun){
    var btn = document.getElementById(id);
    btn.onclick=fun;
}

//创建深圳节点,添加到#city下
myClick('btn01',function(){
    //创建一个li
    var li = document.createElement("li");
    li.innerHTML="深圳";
    var city = document.getElementById("city");
    city.appendChild(li);
})

// 将'江西'节点插到#bj前面
myClick("btn02",function(){
    var li = document.createElement("li");
    li.innerHTML="江西";
    var bj = document.getElementById("bj");
    bj.parentElement.insertBefore(li,bj);
})

//使用深圳节点替换#bj节点
myClick("btn03",function(){
    var li = document.createElement("li");
    li.innerHTML="深圳";
    var bj = document.getElementById('bj');
    bj.parentElement.replaceChild(li,bj);
})
//删除#tokyo节点
myClick("btn04",function(){
    var tokyo = document.getElementById("tokyo");
    tokyo.parentElement.removeChild(tokyo);
})

//读取#city内的HTML代码
myClick("btn05",function(){
    var city = document.getElementById("city");
    alert(city.innerHTML);
})
//设置#bj内的HTML代码
myClick("btn06",function(){
    var bj = document.getElementById("bj");
    bj.innerHTML='修改后的北京';
})
//直接通过inner创建节点
myClick("btn07",function(){
    var li = document.createElement("li");
    li.innerHTML="我是七号按钮创建的";
    var city = document.getElementById("city");
    city.parentElement.insertBefore(li,city);
})

//点击增加图片
myClick("btn08",function(){
    var img = document.createElement("img");
    img.src='JS切换图片复习/2.jpg';
    img.alt='图片显示不出来啦';
    var city = document.getElementById("city");
    city.parentElement.replaceChild(img,city);
})