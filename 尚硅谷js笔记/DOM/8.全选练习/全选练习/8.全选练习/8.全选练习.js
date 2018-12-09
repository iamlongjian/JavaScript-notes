//封装一个公用函数
function myClick(id,fun) {
    var btn = document.getElementById(id);
    btn.onclick=fun;
}
//全选
myClick('checkedAllBtn',function(){
       //获取四个items
    var items = document.getElementsByName("items");
    for(var i = 0;i<items.length;i++){
        items[i].checked=true;
    } 
    var imp=document.getElementById("checkedAllBox")
    imp.checked=true;
})

//全不选
myClick('checkedNoBtn',function(){
    //获取四个items
    var items = document.getElementsByName("items");
    for(var i = 0;i<items.length;i++){
        items[i].checked=false;
    } 
    var imp=document.getElementById("checkedAllBox")
    imp.checked=false;
})

//反选
myClick("checkedRevBtn",function(){
    //获取四个items
    var items = document.getElementsByName("items");
    for(var i = 0;i<items.length;i++){
        items[i].checked=!items[i].checked;
    } 
    var imp=document.getElementById("checkedAllBox")
    imp.checked=!imp.checked;
})
//提交
myClick("sendBtn",function(){
    var items = document.getElementsByName("items");
    for(var i = 0;i<items.length;i++){
        if(items[i].checked){
            alert(items[i].value);
        }
    } 
})

//全选/全不选
myClick("checkedAllBox",function(){
    var items = document.getElementsByName("items");
    for(var i = 0;i<items.length;i++){
        items[i].checked=this.checked;
    } 

})

//使得第一个按钮和items同步
//获取第一个按钮
var checkedAllBox=document.getElementById("checkedAllBox")
//分别为四个多选框绑定单击响应函数

var items = document.getElementsByName("items");

for(var i = 0;i<items.length;i++){
    items[i].onclick=function(){
        checkedAllBox.checked=true;
        //遍历多选框的状态
        for(var j=0;j<items.length;j++){
            //判断四个items是否选中
            //只要有一个是false则第一个按钮就要为false
            if(!items[j].checked){
            checkedAllBox.checked=false;
            break;
            }
        }
    }
}