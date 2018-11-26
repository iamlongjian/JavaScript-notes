setTimeout(function(){
    console.log('时间到！');
},2000);         //两秒后在控制台显示:时间到！


var counter = 0;
var timer = setInterval(function(){
    counter++;
    if(counter>3){                  //当counter的值为3
    clearInterval(timer);         //则关闭计时器
    return counter;             //返回counter的值
    }
    console.log('hi+'+counter);
},1000)         //每隔一秒输出hi+counter

//巩固:
;(function(){
    var counter = 0;
    var timer2 = setInterval(function(){
    counter++;
    if (counter > 3){
        clearInterval(timer2);
        return;
    }
    console.log('你好+'+counter);
},1000)
})();

//演示！！！
console.log('我是第一！！！');
console.log('我是第二！！！');



