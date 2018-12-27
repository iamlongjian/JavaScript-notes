### 变量的声明提前和函数的声明提前
#### 变量声明提前
- 使用 var 关键字声明的变量(var a = 2;),会在代码执行之前被声明(但是不会赋值),如果不使用 var 关键字(a = 1;),则不会被提前声明
```
//使用var，变量会声明提前
console.log(a);     //undefined
var a  = 2;
//不使用var，则不会申明提前
console.log(a);     //报错
a = 1;
```
#### 函数的声明提前
- 使用`函数声明`的方法(function fun(){})创建函数,则会被提前声明。也就是说它会在所有代码执行之前被创建,所以我们可以在函数声明之前,调用该函数
```
fun();
function fun(){
    console.log(123);
}
```
- 使用`函数表达式`方法创建的函数,则不会被提前声明。很好理解:因为foo是变量,会提升到头部,会被赋值为undefined,当你调用的时候,实际上foo的值为undefined。
```
foo();  //foo is not a function //报错
var foo = function(){
    console.log(123);
};
```

### this
- this指的是,调用函数的那个对象。this永远指向函数运行时所在的对象。
- 解析器在调用函数的时候,每次都会向函数内部传递一个隐含的参数,这个参数就是this。
- 根据函数的调用方式不同,this的指向也会不同
1. 函数在全局环境下调用,则this指向window。比如`fun()`相当于`window.fun()`
2. 函数以方法的形式调用,则this指向调用方法的那个对象。
3. 以构造函数的形式调用时,则this指向构造函数的实例对象。
4. 使用call,apply,bind方法时,this指向方法的第一个参数的对象。
**this无法在定义函数的时候确认,只有函数执行的时候才可以确认**
#### this的几种场景
- 构造函数（this指向实例对象）
```
function Add(){
    this.name = 'hello';
}
var a = new Add();
a.name;  //'hello'
```
- 方法（this指向函数执行时的方法）
```
var obj = {
    name:'longer',
    sayName:function(){
        console.log(this.name);
    }
};
obj.sayName();  //'longer'
```
- 全局调用（this指向window）
```
var x = 1;
function fun(){
    console.log(this.x);
}
fun();  //1
```
- call.apply.bind（this指向绑定的对象）
```
//call
function fun(name,sex){
    this.name = name;
    this.sex = sex;
    console.log(this.name+this.sex);
}
var obj = {
};
fun.call(obj,'longer ','男');  //longer男
console.log(obj.name);  //longer
```
```
//apply
function fun(name,sex){
    this.name = name;
    this.sex = sex;
    console.log(this.name+this.sex);
}
var obj = {};
fun.apply(obj,['longer ','男']) //longer男  //apply和call唯一的差别就是,除了对象参数,后面的参数都可以使用数组的形式来传递
```
```
//bind
function fun(name,sex){
    this.name = name;
    this.sex = sex;
    console.log(this.name+this.sex);
}
var obj = {};
var user = fun.bind(obj,'cici ','女');  //它会返回一个函数,可以在以后调用
user();
```
### 作用域
- 指的是一个变量的作用范围。它是静态的,在写代码的时候就已经确定了
#### 作用
- 为了隔离变量,不同作用域下的同名变量不会有冲突
#### 分类
- 全局作用域,局部作用域,块级作用域(ES6)
- 他们的关系:全局作用域不能访问局部变量,局部作用域可以访问全局变量
```
if(true){
    var name = 123;
}
console.log(name);  //123 //name为全局变量
```
#### 全局作用域
- 在全局作用域中,有一个全局对象`window`.它代表的是浏览器的窗口.它由浏览器创建我们可以直接使用
- 创建的变量会作为`window`的属性保存
- 创建的函数会作为`window`的方法保存
- 全局作用域中的变量在页面的任意部分都可以访问到
#### 函数作用域
- 调用函数时,创建函数作用域,函数执行完毕后,函数作用域销毁.
- 每调用一次函数,就会创建一个新的函数作用域.它们之间时互相独立的.
- 在函数作用域中如果像访问全局变量,可以使用window对象(如:全局作用域和函数作用域都定义了a变量,在函数作用域访问全局作用域的a变量时,需要以window.a的形式访问)
```
//当全局变量和局部变量同名时,函数内部访问全局变量的方法(window.a)
var a = 2;
function fun(){
    var a = 1;
    console.log(a); //1
    console.log(window.a);  //2
}
fun();
```
##### 注意:在函数中没有使用var声明变量,则这个变量就会是全局变量(并且不会声明提前)
```
function fun(){
    x = 2;  //此处的a相当于window.a
    console.log(x);
}
fun();  //2
console.log(x);  //2
```
##### 注意二:定义的形参就相当于在函数作用域中声明了变量
```
function fun(name){
    console.log(name);
}
fun();  //undefined
fun('longer');  //'longer'
```
### 作用域链
- 当在函数中操作一个变量时,它会现在自身的作用域找,如果由就直接使用(就近原则)如果没有,则去上一级作用域找.直到全局作用域.如果全局作用域中依然没有找到,则报错ReferenceError.
- 外部定义函数的变量可以被内部函数所使用,反之则不行
```
<script>
    //f1-->全局
    function f1(){
        //f2-->f1-->全局
        function f2(){
            //f3-->f2-->f1-->全局
            function f3(){

            }
        }
        //f4-->f1-->全局
        function f4(){

        }
    }
</script>
```
**举例说明**
```
var a = 1

function fn1() {
    var b = 2

    function fn2() {
    var c = 3
    console.log(c)  //3
    console.log(b)  //2
    console.log(a)  //1
    console.log(d)  //Uncaught ReferenceError: d is not defined
    }
    fn2()
}
fn1()
```
### 闭包
- 闭包就是能够读取其他函数内部数据(变量,函数)的函数
- 只有函数内部的子函数才能够读取局部变量,因此可以把闭包简单理解为'定义在一个函数内部的函数'
#### 闭包是怎么产生的
**当一个嵌套的内部(子)函数引用了嵌套的外部(父)函数的数据(变量,函数)时,就产生了闭包**
#### 闭包到底是什么
- 理解一:闭包是嵌套的内部函数(大部分人)
- 理解二:包含引用变量 or 函数的对象(极少数人)
**注意:闭包存在于嵌套的内部函数中**
#### 产生闭包的条件
1. 函数嵌套
2. 内部函数引用了外部函数的数据(变量,函数)
**来看看条件2**
```
function f1(){
    function f2(){

    }
    return f2;
}
f1();
```
**上面的做法不会产生闭包,因为f2没有引用f1的数据**
#### 常见的闭包
##### 闭包一:将一个函数作为另一个函数的返回值
```
function f1(){
    var x = 1;
    function f2(){
        x++;
        console.log(x);
    }
    return f2;
}
var fun = f1(); //执行函数f1,返回的是函数f2
fun();  //2
fun();  //3
```
**上面代码中:当fun()第二次执行的时候,x的值加1了,这说明:闭包里面的数据没有消失,而是储存在了内存中.如果没有闭包,代码执行到`var fun = f1()`的时候,变量a就消失了**
**看一个函数创建了几个闭包对象,要看外部函数运行了几次.而不是看内部函数(上面例子外部函数运行了一次,所以产生了一个闭包)**
##### 闭包二:将函数作为实参,传递给另一个函数调用
```
function set(msg,time){
    setTimeout(function(){
        console.log(msg)
    },time);
}
set('hello',2000);
```
**上面代码中:闭包是setTimeout里面的function,因为它是嵌套的子函数,并且引用了外部函数的变量**
#### 闭包的作用
1. 使得函数内部的变量在函数执行完,任然存活在内存中(延长了局部变量的生命周期)
2. 让函数外部可以操作(读写)到函数内部的数据(变量,函数)
**拿以下代码来分析**
```
function f1(){
    var x =1;
    function f2(){
        x++;
        console.log(x);
    }
    return f2;
}
var fun = f1(); //f1函数执行完后返回的是内部函数f2
fun();  //2
fun();  //3
```
**作用一分析:外部函数f1执行完后,变量x没有立即消失,而是保存在内存中**
**作用二分析:函数f1中的变量x,在f1的作用域内,因此外部无法访问.但是通过闭包,外部就可以操作到变量a,达到的效果是'看不到变量x,但是可以操作x,让其自增'**
##### 回答两个问题
1. 函数执行完后,函数内部声明的变量是否还存在?
- 一般是不存在了,如果使用了闭包,才有可能存在.
- 闭包能够一直存在的根本原因是变量`fun`,因为`fun`接收了`f1()`,这是一个闭包.闭包里有`x`.注意:此时`f2`并不存在了.但是里面的对象(即闭包)依然存在.因为被`fun`接收了
2. 在函数外部可以直接访问到函数内部的变量吗?
- 不能,但我们可以通过闭包让外部可以操作它
#### 闭包的生命周期
1. 产生:嵌套内部函数`f2`被声明的时候就产生了(不是在调用)
2. 死亡:嵌套内部函数称为垃圾对象时.(比如fun = null)
### 闭包的应用:定义具有特定功能的JS模块
· 将所有数据和功能都封装在一个函数内部(私有的),只向外暴露一个包含n个方法的对象或函数.
· 模块的使用者,只需要通过模块暴露的对象调用方法来实现对应的功能
#### 方式一:
(1) myMoudle.js:(定义一个模块,向外界暴露多个函数,供外界调用)
```
function myMoudle(){
    //私有数据
    var msg = 'longer is best!';
    //定义闭包(操作私有数据的函数)
    function upper(){
        console.log(msg.toUpperCase());
    }
    //定义闭包(操作私有数据的函数)
    function lower(){
        console.log(msg.toLowerCase());
    }
    //通过[对象字面量]的形式进行包裹,向外暴露多个函数
    return {
        toUpper:upper,
        toLower:lower,
    }
}

```
(2)index.html
```
<script src="myMoudle.js"></script>  //引入封装好的模块
<script>
    var fun = myMoudle();   //返回一个对象
    fun.toUpper();  //调用对象的方法
    fun.toLower();  //调用对象的方法
</script>
```
#### 方式二
```
//使用立即执行函数
(function(){
    var msg = 'longer is best!';
    function Upper(){
        console.log(msg.toUpperCase());
    }
    function Lower(){
        console.log(msg.toLowerCase());
    }
    //外部函数是即使运行的匿名函数，我们可以把两个方法直接传给window对象
    window.myMoudle = {
        toup:Upper,
        tolow:Lower
    }
})()
myMoudle.toup();
```
**上面代码中:会立即执行匿名函数,所以也就可以直接使用myMoudle模块了**
### 闭包的缺点及解决
- 缺点:函数执行完后,函数内的局部变量没有释放,会占用内存,容易造成内存泄漏
- 解决方法:能不用闭包就不用,及时释放,比如:
`f = null //让内部函数称为垃圾对象-->回收闭包`
### 内存泄漏
##### 内存泄漏：占用的内存没有及时释放。内存泄露积累多了就容易导致内存溢出。

常见的内存泄露：

1.意外的全局变量

2.没有及时清理的计时器或回调函数

3.闭包