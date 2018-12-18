### JSON
1. js中的对象只js自己认识，别的语言都不认识
2. JSON就是一个特殊格式的字符串,这个字符串可以被任何语言识别,并且可以转换为任意语言中的对象，所以JSON主要用于不同语言之间的
数据交互
3. javascript  object NOtation (js对象表示法)
4. json和js的格式一样，只不过json字符串中的对象属性名必须加引号
其他的和js语法一致
### JSON的分类(两类)
- JSON数组：`'[1,2,3,4,"hello",true]'`
- JSON对象：`'{"name":"孙悟空","age":"18","sex":"男"}'`
### JSON中允许的值
1. 字符串
2. 数组
3. 对象(不包括函数)
4. null
5. number
6. 布尔值
### JS对象--->JSON
##### JSON.stringify('js对象')
```
var jsObj = {name:'孙悟空',sex:'男',age:18};
JSON.stringify(str);   //此时的typeof 就是string了
```
### JSON--->JS对象
##### JSON.prase('JSON字符串')
```
var jsonStr = '{"name":"longer","sex":"男","age":"18"}';
JSON.parse(jsonStr);   //此时的typeof 就是object了
var jsonStr = '[1,2,3,4,"hello",true]';
console.log(JSON.parse(jsonStr)[2]); //输出3 //从字符串转换为了一个数组对象
```
### eval()  不推荐使用
![FtVFwF.png](https://s1.ax1x.com/2018/12/12/FtVFwF.png)