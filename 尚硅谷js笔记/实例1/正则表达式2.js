//将字符串拆分为数组:split()
//根据正则表达式去拆分字符串
// var reg = /aaa/g;
// var str = '1aaa1aa=aaa23';
// console.log(str.split(reg));     //[1,1aa=,23]

//search()搜索字符串中是否含有指定内容并返回所在位置的索引
// var str = '1222aaa1aa=aaa23';
// var reg = /aaa/g;
// console.log(str.search(reg));      //4


//match():将字符串中符合正则表达式的内容提取出来封装到数组中返回(默认提取一个，需要用到全局模式g)
// var str = '1222aaa1aa=aaa23';
// var reg = /aaa/g;
// var result = str.match(reg);
// console.log(result);      //[aaa,aaa]


//replace():将字符串中符合正则表达式的内容使用第二个参数替换
// var str = '123a456a789a';
// var reg = /a/g;
// console.log(str.replace(reg,'b'));  //123b456b789b