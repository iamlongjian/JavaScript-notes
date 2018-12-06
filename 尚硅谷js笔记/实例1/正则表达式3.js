// console.log(/^b$/.test('b'));  //如果^和$同时出现，则要求字符串完全符合正则表达式

//练习：创建一个正则表达式，检查一个字符串是否是一个手机号
// var phone = /[0-9]{11}/g;
// var str ='13128913910';
// var result = phone.test(str);
// console.log(result);

//修正版(严谨)
// var phoneReg = /^1[0-3][0-9]{9}$/;
// var phoneStr = '13128913910';
// var phoneStr2 = 'asdas13128913910asdasd';
// console.log(phoneReg.test(phoneStr));   //true
// console.log(phoneReg.test(phoneStr2));   //false

//练习：创建一个正则表达式，检查一个字符串是否是一个手机号
// var Reg = /\./;
// console.log(Reg.test('aasdasd.b.c'));

// //单词边界
// var reg = /\bchild\b/;
// console.log(reg.test('hello child'));

//删除前后空格
// var name = prompt('请输入用户名');
// name = name.replace(/^\s*|\s*$/g,'');
// console.log(name);


//复习-------------------------------------------------
// var str = 'hello 123';
// //{n} 重复出现几次
// var reg = /(ab){1,3}/;
// ///^a/或者/b$/  以a开头或者以b结尾
// reg = /^a|b$/   //只要以a开头,只要以b结尾 满足任何一项都返回true   

// reg = /\s/;   //s空格
// reg = /\w/;   //w 任意的数字，字母，下划线
// reg = /\d/;   //任意数字
// reg = /\bhello\b/;   //单词边界 //表示hello要单独出现
// console.log(reg.test(str));


//练习 检测用户输入的手机号是否合法
/*
131289113910
1.以1开头 ^1
2.3-9的数字 [3-9]
3.后面9位是任意数字 []
*/

// var reg = /^1[3-9]\d{9}$/;
// var phoneNumber = prompt('请输入您的手机号:');
// console.log(reg.test(phoneNumber));