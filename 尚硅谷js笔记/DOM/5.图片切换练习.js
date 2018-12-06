
//点击按钮切换图片
//获取两个按钮
var prev = document.getElementById('prev');
var next = document.getElementById('next');



//获取img标签
var img = document.getElementsByTagName('img')[0];

//创建一个数组来保存图片路径
var imgSrc = ['1.jpg','2.jpg','3.jpg','4.jpg'];

//创建一个变量来储存索引
var index = 0;

//分别为两个按钮绑定单击响应函数
//要切换图片就是修改img的src属性
prev.onclick=function (){
    //点击上一张时,索引开始自减
   index--;
   //当索引小于0时,自动跳到最后一张
   if(index<0){
       index = imgSrc.length-1;
   }
   img.src=imgSrc[index];
}
next.onclick=function (){
    //修改元素的属性就是:元素.属性
    //点击下一张时,索引开始自减
    index++;
     //当索引大于最后一张的索引时,自动跳到第一张
   if(index>imgSrc.length-1){
       index = 0;
   }
   img.src=imgSrc[index];
}
