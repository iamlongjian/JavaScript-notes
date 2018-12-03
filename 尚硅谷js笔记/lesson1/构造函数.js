// function Person(name,sex,address){        //创建Person构造函数
//     this.name = name;                     //this指向的是该函数所对应的对象
//     this.sex  = sex;
//     this.address  = address;
//     this.getName = function(){
//         return name;            
//     }
// }       
// function Dog(name,sex,kind){                //创建Dog构造函数
//     this.name = name;
//     this.sex  = sex;
//     this.kind = kind;
//     this.getKind = function (){
//         return this.kind;
//     }
// }

// var per = new Person('longjian',18,'宝安区');    //调用Person类，赋实参 //per也叫Person类的实例
// var per2 = new Person('zhubaojia',19,'宝安区');
// var per3 = new Person('hapi',13,'宝安区');
// console.log(per2);                              //输出 调用构造函数后的返回结果
// console.log(per3);
// console.log(per);

// var dog = new Dog('阿齐',3,'吉娃娃');           //调用Dog类，赋实参     //dog也叫Dog类的实例
// var dog2 = new Dog('旺财',6,'柯基');
// var dog3 = new Dog('小黑',2,'沙皮');
// console.log(dog);
// console.log(dog2);
// console.log(dog3);

// console.log("name" in per);         //检查per对象中是否含有name属性，属性名称使用双引号
// for (var n in per){                   //使用for in语句,输出该对象中的所有属性。
//     console.log(n,':',per[n]);
// }
// console.log(dog instanceof Dog);     //使用instanceof语句，判断某个对象是否是某个类的实例,如果该对象存在，但是不属于该类，则返回false，如果该对象不存在，则报错。


//复习
//创建一个构造函数
// function Person(name,sex,age){
//     this.name = name,
//     this.sex = sex,
//     this.age = age,
//     //向对象中添加方法
//     this.getName = function(){
//         alert('你好,我是:'+name);
//     }
// }
// var long = new Person('longer','男',19);
// var shi = new Person('shier','男',19);
// console.log(long);
// shi.getName();


//改进版构造函数
function Person(name,sex,age){
    this.name=name;
    this.sex = sex;
    this.age = age;
    this.getName = fun;
}
function fun(){
    console.log(this.name);
}
var long = new Person('longer','男',19);
long.getName();