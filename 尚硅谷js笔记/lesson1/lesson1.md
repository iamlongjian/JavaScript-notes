### javaScript
其实js就是es,es是js的标准。
js主要指前端:es,dom(操作网页),bom(操作浏览器).

一单script标签中引入了外部的script文件，则script中不可以再编写js代码。如果需要，请新建一个script标签进行编写。

**注意事项**
1. js严格区分大小写：alert()喝Alert()不一样
2. js每一条语句用';'结尾
3. js会忽略多余空格和换行，我们可以利用空格换行来进行代码格式化。

#### 字面量和变量
- 字面量
字面量就是不可改变的量:1,2,3,4,5,false,ture,'hello'...
一般很少使用字面量，都是将字面量赋值给变量，对变量进行使用。
- 变量
变量可以用来保存字面量，变量的值都是可以任意改变的。
使用var 声明`var x = '123';` 这个x就是变量，'123'就是字面量。

#### 标识符
1. 标识符中可以含有数字，字母，下划线，$
2. 标识符不能以数字开头
3. 标识符不能是ES中的关键字和保留字
4. 标识符一般采用驼峰命名法(首字母小写,每个单词的开头字母大写:xxxYyyZzz)

#### 数据类型（1-5基本数据类型，6-7引用数据类型）
##### 检查数据类型的方法:typeof 变量
1. String 字符串
字符串需要用引号(单双引号都行，但不要混着用)引起来
引号可以嵌套，但不能单嵌单，双嵌双，如果非要这样，要在内嵌的引号前加上'\'转义字符。
`'\'转义符` `\n换行符` `\t制表符(相当于按了一下tab键)`
` var str = 'hello';`  此时的str就是字符串
`console.log('\\');`           //结果为\ 因为\为转义字符，它转义它自己
2. Number 数字类型
在js中，所有的数值都是Number类型,包括整形和浮点型
十六进制：0x开头
八进制：0开头
二进制：0b开头
`正无穷 Infinity  负无穷 -Infinity`
`NaN not a number 非数字`
`Number.MAX_VALUE 正数最大值` `Number.MIN_VALUE 正数最小值`
整数可以保证准确，但是浮点数的运算会有偏差。
3. Boolean 布尔值 (主要做逻辑判断)
只有 true false
4. Null 空值
专指一个为空的对象(object类型)
5. undefined 未定义
当声明一个变量但是并不给变量赋值时，则变量就是undefined;
6. Object 对象
7. Array 数组

### 强制类型转换 ###
**将一种数据类型转换为另一种数据类型，一般String Number Boolean值互转**
#### 转换为**String** ####
1. `toString();`方法:将变量a的数据类型转换为String`a.toString();`
我们需要定义一个新变量来储存`toString();`方法所返回的值.如var b = a.toString();
**当然如果不希望定义新变量**可以直接使用`a = a.toString();`把结果赋值给本身.
注意:`null`和`undefined`没有`toString();`方法
2. `String();`函数:并且将被转换的数据作为参数传递给函数。
如 把变量a的类型转换为String类型。`a = String(a);`
3. `a += '';`直接把a变量转换为了String类型。
#### 转换为**Number** ####
1. 使用Number();函数 `a = Number(a);` 把a的数据类型转换为数字型。
String--->Number的情况:1. 如果时纯数字，则**直接转换**。 2. 如果字符串中有非数字,则为**NaN**。 3. 如果时空格或者空字符串则转换为**0**
Boolean--->Number的情况:1. true转成**1** 2. false转为**0**
null--->Number：转为0
undefied--->Number：转为NaN
2. parseInt();和parseFloat();
3. `a -= 0;`直接把a变量转换为了Number类型。
4. 最简单的方法：直接`a=+a` 直接变成了Number类型。
parseInt();函数：可以将字符串中的整数提取出来，然后转换为Number
**parseInt(a,10)可以传参:前面的代码表示将a转换为10进制的Number类型的**
parseFloat();函数：可以将字符串中的浮点数提取出来，然后转换为Number
**如果不是String会先转换为String，函数再生效。**
#### 转换为Boolean ####
使用`Boolean();`函数:`a = Boolean(a);`
Number--->Boolean:除了0和NaN其他都是**true**;
String--->Boolean:除了空字符串，其他都是**true**;
null--->Number：false
undefied--->Number：false
