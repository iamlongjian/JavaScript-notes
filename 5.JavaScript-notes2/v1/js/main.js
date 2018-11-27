document.write(`1
23`);   //html中输出内容 可以折行 使用`

function fun(){
    console.log('123');
    
}

function fun2(){
    var x = document.getElementById('demo');        //按下按钮 控制台输出'123';
    x.innerHTML='变身完成!';
}

function ChangeImg(){
    var x = document.getElementById("demo1");     //点击按钮我就改变图片路径
    if(x.src.match("bulbon")){
        x.src="img/eg_bulboff.gif";
    }else{
        x.src="img/eg_bulbon.gif";
    }
}

function ChangeColor(){
    var x = document.getElementById("demo2");       //点击按钮我就变绿
    x.style.color="green";
}


function num(){
    var x = document.getElementById("demo3").value;        //检测输入框的值是否为数字
    if(x==""||isNaN(x)){
        alert('请输入数字');
    }else{
        alert('提交成功');
    }
}

function add(){                                         
    var a = 'hapi';
    var b = document.getElementById("demo4");
    b.innerHTML=a;
}



function a(){
    var a;
    console.log(a);
}
a();                         //console为undefined


var arr =['1','2','3','4'];
console.log(arr[1]);         //数组

var obj={one:'1',two:'2',three:'3'}
console.log(obj.two);        //对象

var mes = "Hello World!";
var p = mes.toLowerCase();    //toUpperCase,toLowerCase 大小写转换
console.log(p);