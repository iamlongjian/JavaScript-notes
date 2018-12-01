// var user = {
//     name:'longer',
//     sex:'男',
//     age:12
// }
// user.getName = function(){
//     console.log(user.name);
// }
// user.getName();


//枚举对象中的属性
// var obj = {
//     name : '张三',
//     sex  : '男',
//     age  :15,
//     address: '宝安区'
// }
// // for(var n in obj){
// //     console.log('输出几句就表示该对象有几个属性');
// // }
// for(var n in obj){
//     console.log(n);                            //直接输出所有的属性名称
//     console.log(n,':',obj[n]);              //输出属性名称和属性值
// }
var a = 123;
function fun(){
    alert(a);
    a = 456;
}
fun();
alert(a);