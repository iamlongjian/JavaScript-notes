//querySelector：根据参数(css选择器)去获取一个元素节点对象
var box = document.querySelector('.box');   

//document.all 获取页面中所有元素
box = document.all;              
// for(var i = 0;i<box.length;i++){
//     alert(box[i]);
// }

//获取根标签
box = document.documentElement;

//获取body
box = document.body;

box = document.querySelectorAll('.box');
alert(box.length);

