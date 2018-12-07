//获取到两个button对象
var prev = document.getElementById("prev");
var next = document.getElementById("next");

//修改img的src属性
//获取到img标签
var img = document.getElementsByTagName("img")[0];

//创建一个数组来储存图片路径
var imgArr = ["1.jpg","2.jpg","3.jpg","4.jpg"];

//创建一个变量来保存索引
var index = 0;

//获取提示文本
var infos = document.getElementById("info");
infos.innerHTML = "一共"+imgArr.length+"张,当前是第"+(index+1)+"张";

//设置一个单击响应函数
prev.onclick=function(){
    //点击上一张 需要index自减
    index--;
    if(index<0){
        index = imgArr.length-1;
    }
    img.src=imgArr[index];
    infos.innerHTML = "一共"+imgArr.length+"张,当前是第"+(index+1)+"张";
}
next.onclick=function(){
    //点击下一张 需要index自增
    index++;
    if(index>imgArr.length-1){
        index = 0;
    }
    img.src=imgArr[index];
    infos.innerHTML = "一共"+imgArr.length+"张,当前是第"+(index+1)+"张";
}
