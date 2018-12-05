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
var name = prompt('请输入用户名');
name = name.replace(/^\s*|\s*$/g,'');
console.log(name);