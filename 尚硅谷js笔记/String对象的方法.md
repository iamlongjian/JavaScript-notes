### String对象的方法
- 在底层字符串是以字符数组的形式存在的，如["h","e","l","l","o"];
- 字符串的操作方法和数组的操作方法类似，有length属性,也可以通过索引操作元素。
```
var str = 'Hello World';
console.log(str.length);    //11 //获取字符串的长度
console.log(str[0]);        //H  //通过索引查看字符串元素
```
##### str.charAt('所需要获取的元素索引'):返回指定位置的字符(简写:str.['所需要获取的元素索引'])
- 语法`charAt('所需要获取的元素索引');`
```
var str = 'Hello World';
console.log(str.chatAt(1));  //e 
//更简单的方法:
console.log(str[1]); //e
```
##### str.charCodeAt('所需要获取unicode编码的元素索引'):返回指定位置字符的unicode编码
- 语法`charCodeAt('所需要获取unicode编码的元素索引');`
```
var str = 'Hello World';
console.log(str.chatCodeAt(1));  //101  //e的unicode编码为101 
```
##### String.formCharCode('unicode编码'):根据unicode编码去获取字符
- 语法`String.formCharCode('unicode编码');` **注意**该方法是String调的
```
console.log(String.formCharCode(72)); //H  //unicode中72表示H
```
##### str.concat():用于连接字符串,也可以直接连接字符(简写:str+(str2)+'123')
- 语法：`str.concat(字符串名称+''+'123')` 可用于连接一个或多个字符串,或者字符
```
var str = "Hello";
var str2 = "Longer";
console.log(str.concat(","+str2+'!'));   //输出:Hello,Longer!
//简写:
console.log(str+','+str2+'!');
```
##### str.indexOf('',X):用于检索字符串是否含有指定内容(并返回该元素所在位置的索引)
- 语法`str.indexOf('需要检索的内容',开始查找位置的索引);`
```
var str = 'hello hou';
console.log(str.indexOf('h')); //0 //h所在字符串中的索引为0
console.log(str.indexOf('h',1)); //6 //从索引为1开始往后寻找,h所在字符串中的索引为6
console.log(str.indexOf('l')); //2 //字符串中有两个l,则返回第一个l出现的位置索引
console.log(str.indexOf('p')); //-1 //如果字符串中不含有该内容,则返回-1
```
##### str.lastIndexOf():用法和indexOf()一样
- 不同的是检索方向**相反**(从后往前)
- 也可以传递两个参数,语法:`str.lastIndexOf('需要查找的内容',从后往前开始查找的起始索引)`
```
var str = 'hello hoho';
console.log(str.lastIndexOf('h'),7);    //6 //从索引为7的位置开始往前查找,则输出第二个h
```
##### slice()方法:截取字符串片段,第二个参数是可选参数
- 语法:`slice(start索引,end索引)`包前不包后;
- 参数可以传递负数,如果是负数则从后往前计算:-1表示倒数第一个字符 -2表示倒数第二个
- 不会影响原字符串
```
var str = 'hello hoho';
console.log(str.slice(1,3)); //el //从索引1开始 索引3结束
console.log(str.slice(1,-3)); //ello h //从索引1开始 索引-3(倒数第三个)结束
```
##### subString()方法:也是用于截取字符串,第二个参数也是可选的
- 语法:`subString(start,end)` 包前不包后
- 不同的是这个方法不能接收负值,如果写了负值则默认为0
- 而且会自动调整参数的位置,如果第一个参数大于第二个参数,则会调换两个参数的位置
##### split()方法:可以将字符串拆分为一个数组
- 语法:`str.split()`
- 参数：需要一个字符串作为参数，会根据该字符串去拆分数组
```
var str = "abc,def,ghi,jkl";
console.log(str.split(','));  //根据,去拆分数组 //[abc,def,ghi,jkl]
```
##### toLowerCase()把字符串转换为小写,toUpperCase()把字符串转换为大写
- 语法`str.toLowerCase()`和`str.toUpperCase()`
