// function Person(name,sex,age) {        
//         this.name=name;
//         this.sex=sex;
//         this.age=age; 
// }
// Person.prototype.getSex=function(){           //prototype就是一个原型对象,可以说是一个构造函数里面的公共区域
//     alert(this.sex); 
// }
// var long = new Person('longer','男',18);
// var long2 = new Person('123','女',18);
// long.getSex();
// long2.getSex();


// //复习:
// function Fun(name,age,sex){
//     this.name=name;
//     this.age=age;
//     this.sex=sex;
// }
// //给原型对象增加属性   既可以保证函数只有一个(节省内存)又可以不污染全局作用域
// Fun.prototype.getName=function(){
//     console.log(this.name);
// }
// var som = new Fun('long',18,'男');
// var som2 = new Fun('cici',18,'男');

// som.getName();
// console.log(som);


// 改进版带有prototype的构造函数
// function Person(name,sex,age){
//     this.name = name;
//     this.sex  = sex;
//     this.age  = age;
// }
// Person.prototype.setName = function(newName){        //这是一个修改name的函数，存在prototype中
//     console.log(this.name=newName);
// }
// var long = new Person('longer','男',18);
// console.log(long);      //修改name前的数组
// long.setName('aqi');
// console.log(long);      //修改name后的数组
//-----------------------------------------------------------------------------
//创建一个构造函数
// function Myclass(){

// }
// //向Myclass的原型中添加一个name属性
// Myclass.prototype.name='我是one班的班主任';
// var one = new Myclass();
// one.name = '123';
// //输出的是portotype中的name属性
// console.log(one.name);
// //使用in关键字查看one对象中是否有name属性,结果为true(如果对象中没有.但是原型中有的话也会返回true.)
// console.log('name' in one);
// //可以使用实例的hasOwnProperty方法来检查对象自身中是否含有某个属性
// console.log(window.hasOwnProperty('hasOwnProperty'));
//--------------------------------------------------------------------练习
// function Person(name,sex,age){
//     this.name= name;
//     this.sex = sex;
//     this.age = age;
// }
// Person.prototype.getName=function (){
//     alert(this.name);
// }
// var long = new Person('longjian','男',18);
// var long2 = new Person('www','男',18);
// console.log(long);
// console.log(long2);

// function Dog(name,age,kind){
//     this.name = name;
//     this.age = age;
//     this.kind = kind;
// }
// Dog.prototype.setName=function(newName){
//     this.name=newName;
// }
// var dog = new Dog('阿奇',8,'吉娃娃');
// console.log(dog);
// dog.setName('阿飞');
// console.log(dog.name)
// console.log(dog);

// console.log(dog.hasOwnProperty('setName'));

function Person(name,age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;
}
// Person.prototype.toString = function(){
//     return '我是一个构造函数';
// }
Person.prototype.toString = function(){
    return '我是一个Person';
}
var per =new Person('long',18,'男');
console.log(per);
