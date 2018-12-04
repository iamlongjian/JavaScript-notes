### Math()对象  数学运算
- Math它不是一个构造函数,它属于一个工具类,不需要创建对象,里面封装好了数学运算相关的属性和方法
- 比如`Math.PI() //输出圆周率`
##### Math.abs() 计算一个数的绝对值
- `Math.abs(-1)` 返回1 
##### Math.ceil() 将一个数向上取整
- `Math.abs(1.1)` 返回2
- `Math.abs(-1.1)` 返回-1
##### Math.floor() 将一个数向下取整
- `Math.floor(1.1)` 返回1
- `Math.floor(-1.1)` 返回-2
##### Math.floor() 将一个数四舍五入
- `Math.round(1.1)` 返回1
- `Math.round(1.5)` 返回2
- `Math.round(-1.5)` 返回-1
##### Math.random() 生成一个0-1之间的随机数
- `Math.random()`  返回一个0-1之间的随机数
- 如果想返回0-10之间的随机数 `Math.random()*10`
- 如果想返回0-100之间的随机数 `Math.random()*100`
- 得出结论:**生成一个0-X**之间的随机整数`Math.round(Math.random()*X);`
- **生成一个X-Y**之间的随机整数`Math.round(Math.random()*(Y-X)+X)`

##### Math.max() 返回多个数中的最大值
- 语法`Math.max(1,2,3,6,7,8,1,10)`     //10
##### Math.min() 返回多个数中的最小值
- 语法`Math.min(1,2,3,6,7,8,-5,10)`     //-5
##### Math.pow(x,y) 返回x的y次幂
- 语法`Math.pow(1,2)`   //1的2次幂=1
- 语法`Math.pow(3,2)`   //3的2次幂=9
- 语法`Math.pow(2,3)`   //2的3次幂=8
##### Math.sqrt() 求一个数的平方根(对一个数开房)
- 语法`Math.sqrt(4)`   //4的平方根=2
- 语法`Math.sqrt(9)`   //9的平方根=3