
### 数据类型
#### 字符串与数字运算时需要格外小心
```
    '1' + 1 // "11" 坑
    1 + "1" // 2
    2 * "2" // 4 (O_o)???
    "2" * 2  // 4 (O_o)???
```
------------
- `string` 字符串
'longer'
"longer"
'longer:"123"' **单引号包双引号或者双引号包单引号**
'he\'s'  **\为转义字符，字符串中间的单引号不和外面的引号冲突**
`
啊~  祖国   **字符串换行tab的上面一个键**
`
------------
- 如何定义一段字符串？
很简单，用引号包起来就好

"yo" 双引号
'yo' 单引号
在JS中单双引号没有任何区别 "yo" === 'yo' // true
`我是个模板字符串，我叫 ${name} ` 使用`（反引号）定义模板字符串，可以传入变量，还可以直接断行
- 查找字符串中的某一个字符
[]
```
'这是一条字符串'.charAt(下标，索引从0开始);
简洁写法:
'yo'[0];                  // 结果为"y"
```
- 检查一段字符是否包含另一段字符
includes()
```
'花花你好'.includes('花花');   //结果为true;
'花花你好'.includes('蛋蛋');   //结果为false;
```
- 使用字符串将字符串分割成**数组**
split()
```
var x = 'longer-shuaige-ai-meinv'.split(-);
console.log(x);          //结果为[longer,shuaige,ai,meinv]
```
- **连接**字符串
concat()
```
var x ='longer'.concat('是帅哥');    //concat不要写成contact
console.log(x);           //结果为longer是帅哥
```

- **截取**字符串
slice()
```
var x = 'longer is best~';
var sp = x.slice(1,3);              //slice前要跟上字符串的变量名
console.log(sp);                    //结果为on
```
```
var x = 'longer is best~';
var sp = x.slice(3);                //slice前要跟上字符串的变量名
console.log(sp);                    //结果为ger is best~
```
- **移除**两头的空格
.trim()
