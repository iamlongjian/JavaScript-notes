//定义一个求和的函数
// 1. 可以在函数后面的()声明形参
// 2. 多个形参需要使用','----声明形参就相当于在函数内部声明了对应的变量(但是并不赋值)
// 3. 在调用函数时,可以在函数后面()中指定实参
// function qiuhe(a,b){
//     console.log(a+b);
// }
// qiuhe(1,3);
//----------------------------------------------------------------------------------------
//定义一个函数,判断一个数字是否为函数,是则ture,不是则false
// function du(a){
//     if(a%2==0){
//         return '是偶数';
//     }else{
//         return '不是偶数';
//     }
// }
// var x = du(8);
// alert(x);

//改进版
// function du(a){
//     return a%2 == 0;
// }
// var x = du(9);
// console.log(x);              //效果和上面的是一样的,这个更加简单
//----------------------------------------------------------------------------------------
//定义一个函数,可以根据半径,求圆的面积
// function mianji(r){
//     return 3.14*r*r;           //直接返回结果
// }
// var result = mianji(5);          //将函数返回的结果储存到result变量中
// console.log(result);            //输出结果正确
//----------------------------------------------------------------------------------------
//定义一个函数,可以在控制台中输出人的信息
//实参可以是任何数据类型,也可以是一个对象
// function person(i){
//    document.write('我的名字叫:',i.name,',我是',i.sex,'生','我家住在',i.address);
// }
// var info = {
//     name:'龙健',
//     sex:'男',
//     address:'宝安区'
// }
// person(info);
//如果参数过多的话,建议把参数封装到一个对象中,通过对象传递。
//----------------------------------------------------------------------------------------
//闭包
// function user(name,age,sex){
//     return {
//         getName:function(){
//             console.log(name);
//         },
//         setName:function(newName){
//             name = newName;
//             console.log(name);
//         },
//         getSex:function(){
//             console.log(sex);
//         },
//         setSex:function(newSex){
//             sex = newSex;
//             console.log(Sex);
//         },
//         getAge:function(){
//             console.log(age);
//         },
//         setAge:function(newAge){
//             age = newAge;
//             console.log(age);
//         },
//     }
// }
// var long = user('longer',18,'男');
// long.getName();
// long.setName('hapi');
// long.getSex();
// long.getAge();

// alert(123);

// var x = confirm('你好，以下按钮二选一');
// if(x == true){
//     alert('你做了正确的选择');
// }else{
//     alert('你选错了嗷');
// }

// var x = prompt();
// alert(x);