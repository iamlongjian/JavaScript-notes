
### 数据类型
- `Number` 数字类型
123 **整形**
1.2 **浮点型**
-1  **负数**
1.2e4 **12000**
NaN **not a number(少用)**
Infinity **无穷大(少用)**
------------
常见的Number类型都有哪些？
- 整形(integer)
**怎么判断一个值是否为整型？**
`Number.isInteger(1) // true`
`Number.isInteger(1.1) // false`
**其他类型如何转换为整形？**
```
parseInt('1') // 1
parseInt('1.1') // 1
parseInt('1.9') // 1
parseInt('1a') // 1
parseInt('a1') // NaN
parseInt('.9') // NaN
parseInt('0.9') // 0
```
**真假倾向**
只有0为false 其他都是true

- 小数（浮点数）
如：0.1，1.1，.1 如果小于1，小数点前的0可以省略
**其他类型如何转换为浮点数？**
```
parseFloat(number);
parseFloat('1') // 1
parseFloat('1.0') // 1
parseFloat('1.1') // 1.1
parseFloat('1.1a') // 1.1
parseFloat('a1.1') // NaN
parseFloat('.1') // 0.1
```
- NaN (not a number(少用))
一枚奇葩的'Number'类型
NaN 不是一个数（Not a Number）
对，它不是一个数，然后它还是种数字类型。(O_o)???
一般在出错或不可预料的结果中出现，如：'a' * 'b'，0 / 0
NaN === NaN // false 永不相等
判断是否为NaN可以使用isNaN()函数
```
isNaN(1) // false
isNaN(0 / 0) // true
```
![FAwaWV.png](https://s1.ax1x.com/2018/11/26/FAwaWV.png)
