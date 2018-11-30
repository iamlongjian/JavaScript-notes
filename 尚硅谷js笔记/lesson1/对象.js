//对象的增删查改

var user = {                    //创建一个名为user的对象
    123 : '汤姆',               //为对象user增加属性
    sex :'男',
    age : 18,
}
user.age=19;                    //修改属性值     //修改属性值:对象名.属性名=新值
console.log(user.age);          //输出19
console.log(user.hello);        //未定义属性    //不会报错,输出undefined 
delete user.age;                //删除属性  //删除了user对象的age属性
console.log(user.age);          //输出undefined
var n = 123;                    //使用变量来储存属性名
console.log(user[n]);           //直接输出该变量    //输出汤姆
console.log('sex' in user);     //检查user中是否含有sex属性,结果为true。



