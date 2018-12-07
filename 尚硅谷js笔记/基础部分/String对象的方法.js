// var str = '中国ABC';
//charAt():获取指定索引的元素
// alert(str.charAt(2));

//charCodeAt():获取指定索引的unicode编码
// alert(str.charCodeAt(4));

//formCharCode():返回指定unicode编码所对应的内容
// alert(String.fromCharCode(72));

//str.concat():用于连接两个或多个字符串或字符
// console.log(str.concat('123456','哈皮'));
// ==
// console.log(str+'123456'+'哈皮');

//indexOf():查找字符串指定内容,从哪个位置开始查找
//lastIndexOf():查找字符串指定内容，从后往前找
// console.log(str.indexOf('A'),3)   //-1
// console.log(str.lastIndexOf('A',3)) //2

//slice()方法:截取字符串(start,end)
// console.log(str.slice(0,3));
// console.log(str.slice(0,-1));

//split()方法:将一个字符串拆分为数组,根据参数去判断如何拆分
// console.log(str.split(/a/i));

//toLowerCase():toUpperCase() 转换大小写  //不会对原字符串产生影响
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());