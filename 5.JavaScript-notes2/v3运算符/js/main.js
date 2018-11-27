;(function(){
    console.log('1'+1);
console.log(1+'1');
console.log(1+1);
console.log('1'+'1');

function mf(){
    var h = new Date().getHours();        //获取当前时间的Hours,存到变量h中
    if (h>17){
        console.log("爸爸已经下班了");
    }else{
        console.log("爸爸还没下班")
    }
}
mf();


var arr = new Date().getDay();           //使用switch获取当前是周几
switch(arr){
    case 1:
    console.log('今天是周一');
    break;
    case 2:
    console.log('今天是周二');
    break;
    case 3:
    console.log('今天是周三');
    break;
    default:
    console.log('不告诉你');
    break;


}


//for
var arr = [1,2,3,4,5,6,7];
for (var i=0;i < arr.length;i++){
    console.log('for:',arr[i]);
}
//while
var x = 0;
while(x<5){
    console.log('while:',x);
    x++;
}
//do while
var a=0;
do{
    console.log('dowhile:',a);
    a++;
}while(a<5);

var cars=["BMW","Volvo","Saab","Ford"];
for (var i=0;i<cars.length;i++){
    if(i==1){
        break;                    //break的用法 只能用在循环或 switch 中。
                                 //通过标签引用，break 语句可用于跳出任何 JavaScript 代码块。http://www.w3school.com.cn/js/js_break.asp
    }
    console.log(cars[i]);
}

var cars=["BMW","Volvo","Saab","Ford"];
for (var i=0;i<cars.length;i++){
    if(i==1){
        continue;           //continue的用法  （带有或不带标签引用）只能用在循环中。
    }
    console.log(cars[i]);
}



        var txt = "";
        function message() {
            try {
                alert("这里出现一个错误");
            } catch(err) {
                txt = "本页有一个错误 \n\n";
                txt += "错误描述: " + err.message + "\n\n";
                txt += "点击确定继续 \n\n";
                alert(txt);
            }
        }
        message();


})();