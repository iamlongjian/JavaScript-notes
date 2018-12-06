//全选按钮
//先获取全选按钮
var btn1 = document.getElementById('checkedAllBtn');
btn1:onclick=function (){
    //获取四个多选框 name为items
    var items = document.getElementsByName('items');
    //遍历items
    for(var i =0;i<items.length;i++){
        items[i].checked=true;
    }
}

//全不选按钮
