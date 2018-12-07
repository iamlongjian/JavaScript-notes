var checkedAllBox = document.getElementById("checkedAllBox");
//全选按钮
//先获取全选按钮
        var al = document.getElementById("checkedAllBtn");
        al.onclick=function(){
            var items = document.getElementsByName("items");
            for(var i=0;i<items.length;i++){
                items[i].checked=true;
            }
            checkedAllBox.checked=true;
        }

//全不选按钮
        var no = document.getElementById("checkedNoBtn");
        no.onclick=function(){
            var items = document.getElementsByName("items");
            for(var i=0;i<items.length;i++){
                items[i].checked=false;
            }
            checkedAllBox.checked=false;
        }
//反选:点击按钮以后选中的变成没选中，没选中的变成选中
        var rev = document.getElementById('checkedRevBtn');
        rev.onclick=function (){
            var items = document.getElementsByName("items");

            //直接用取反方式
            for(var i =0;i<items.length;i++){
                items[i].checked = !items[i].checked;
            }

            //判断方式
            // for(var i=0;i<items.length;i++){
            //    //需要先判断多选框是什么状态，在做出响应的操作
            //    if(items[i].checked){  //由于items[i]本身就是布尔值 所以无需==true
            //         items[i].checked=false; //如果为true 则变成没选中状态
            //    }else{
            //     items[i].checked=true;    //否则则为选中状态
            //    }
            // }
            checkedAllBox.checked=true;
            for(var j =0;j<items.length;j++){
                if(!items[j].checked){
                    checkedAllBox.checked=false;
                }
            }
        }
//提交按钮:点击后将所有选中的多选框的value属性弹出

        var send = document.getElementById("sendBtn");
        send.onclick=function (){
            var items = document.getElementsByName("items");   //获取到所有多选框
            for(var i=0;i<items.length;i++){        //遍历多选框
                if(items[i].checked){       //如果为选中状态
                    alert(items[i].value);  //则输出该多选框的value值
                }
            } 
        }
       

//全选/全不选(一个按钮)
        var checkedAllBox = document.getElementById("checkedAllBox");
        checkedAllBox.onclick=function (){
            var items = document.getElementsByName("items");   //获取到所有多选框
            for(var i=0;i<items.length;i++){        //遍历多选框
                    items[i].checked = this.checked;           //判断checkedAllBox是否为选中状态，如果选中 //则下面的多选框也被选中 //否则都不选中
            } 
            
        }

//如果四个勾选框都选中,那么该checkedAllBox会自动勾上。
//如果四个勾选框没有都选中,那么该checkedAllBox不会勾上。

//分别为四个多选框绑定onclick函数
var items = document.getElementsByName("items");
for(var i=0;i<items.length;i++){        //遍历多选框
    items[i].onclick=function(){
        checkedAllBox.checked=true;

        for(var j =0;j<items.length;j++){
            if(!items[j].checked){
                checkedAllBox.checked=false;
                break;
            }
        }
    }           
} 