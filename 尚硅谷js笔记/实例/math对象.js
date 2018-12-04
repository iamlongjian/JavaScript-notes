// //Math.abs('')  运算一个数的绝对值
// console.log(Math.abs(-10));          //10

// //Math.ceil('') 将一个数向上取整
// console.log(Math.ceil(-1.1))         //-1
// console.log(Math.ceil(1.1))         //2

// //Math.floor('') 将一个数向下取整
// console.log(Math.floor(-1.1))         //-2
// console.log(Math.floor(1.1))         //1

// //Math.round('') 将一个数四舍五入
// console.log(Math.round('1.4'));      //1
// console.log(Math.round('1.5'));      //2
// console.log(Math.round('-1.5'));      //-1

// //Math.random() 用来生成一个0-10之间的随机整数
// for (var i = 0;i<10;i++){
//     console.log(Math.round(Math.random()*10));
// }
// //生成一个18-24之间的随机数
// for(var j=0;j<10;j++){
//     console.log(Math.round(Math.random()*6)+18);
// }
// var result=Math.sqrt(4);
// console.log(result);

function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.setName=function(newName){
   console.log(this.name=newName);
}
var per = new Person('龙健',18);
per.setName('哈皮');
console.log(per);