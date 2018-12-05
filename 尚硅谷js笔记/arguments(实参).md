### argunments(实参)
- 在调用函数时，浏览器每次都会传递两个隐含的参数(this和arguments)
1. 函数的上下文对象this
2. 封装实参的对象arguments
- arguments是一个类数组对象(并不是数组)，它也可以通过索引来操作数据(arguments[0])，也可以获取长度(arguments.length)
- 在调用函数时，我们所传递的实参都会保存到arguments中
- arguments有两个属性
1. arguments.length:获取实参的长度
2. arguments.callee:这个属性对应一个函数对象,就是当前正在指向的函数的对象
```
function fun(){
    console.log(arguments.callee == fun); //true
}
```
