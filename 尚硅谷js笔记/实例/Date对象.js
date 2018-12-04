// //创建一个Date对象
// //如果直接是用构造函数创建Date对象，则会封装成当前代码执行的时间
// var d = new Date();
// console.log(d);

// //创建一个指定时间的对象
// var d2 = new Date('12/4/2017 10:20:6');
// console.log(d2);

// //getDate()属性  返回今天几号
// var d3 = new Date().getDate();
// console.log(d3);

// //getDay()属性  返回今天周几
// var day = new Date().getDay();
// console.log(day);

// //getMonth()属性 返回当前几月份
// var month = new Date().getMonth();
// console.log(month+1);

// //getFullYear()属性 返回20**年
// var year = new Date().getFullYear();
// console.log(year);

// //getTime()属性 获取当前时间对象的时间戳
// var chuo = new Date().getTime();
// console.log(chuo/1000/60/60/365/24);

//利用时间戳来测试性能
var start = Date.now();
for(var i=0;i<1000;i+=5){
    console.log(i);
}
var end = Date.now();
console.log(end-start);

//getHours(),getMinutes(),getSeconds(),getMilliseconds()
//返回Date对象的小时，分钟，秒，毫秒
// var dd = new Date('12/6/2012 10:00:28:1');
// console.log(dd.getMilliseconds());