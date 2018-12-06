//定义一个通用函数
function myclick(btnId,fun){
    var btnId = document.getElementById(btnId);
    btnId.onclick=fun;
}
//parentNode属性:获取当前节点的父节点
myclick('btn01',function(){
    var bj = document.getElementById('bj');
    var pa = bj.parentNode;
    alert(pa.innerText);
})

//previousSibling属性:获取当前节点的上一个兄弟节点

myclick('btn02',function(){
    var bj = document.getElementById('bj');
    var per = bj.previousSibling;   //获取上一个兄弟节点,包括空白节点
    var per = bj.previousElementSibling; //获取下一个兄弟元素
    alert(per.innerText);
})


//nextSibling属性:获取当前节点的下一个兄弟节点

myclick('btn03',function(){
    var bj = document.getElementById('bj');
    var per= bj.nextSibling;      //获取下一个兄弟节点,包括空白节点
    var per = bj.nextElementSibling;   //获取下一个兄弟元素
    alert(per.innerText);
})

//获取并修改btn04的value属性
myclick('btn04',function(){
    alert(btn04.value);
    alert(btn04.value="已经修改");
})

//获取btn04的文本
myclick('btn05',function(){
    alert(btn05.innerText);
    
})