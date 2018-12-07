### 函数的方法
#### call()和apply()
- 这两个方法都是函数对象的方法,需要通过函数对象调用
- 当对函数调用call(),apply()都会调用函数执行
- **不同的是**在调用call()和apply()时可以将一个对象指定为第一个参数，此时这个**对象**就会成为函数执行时的**this**
```
function fun(){};
var obj = {};
fun();                  //this指向window
fun.call(obj);          //this指向obj
fun.apply(obj);         //this指向obj
```
- call()方法可以将实参跟在对象后面依次传递
- apply()方法需要将实参封装到数组中跟在对象后面传递
```
var obj = {
    name:'obj',
    sayName:function(){
        console.log(this.name);
    }
}
var obj2 = {
    name:'obj2'
}
obj.sayName.call(obj2);
```
#### this的情况
1. 以函数形式调用时,this永远都是window
2. 以方法的形式调用时候,this是调用方法的对象
3. 以构造函数的形式调用时,this是新创建的对象
4. 使用call()和apply()调用函数时,this是指定的那个对象
