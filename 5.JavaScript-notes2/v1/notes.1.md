### js复习笔记
**变量**
- 变量是存储信息的容器。
**一条语句，多个变量**
`var name="Gates", age=56, job="CEO";`
或者
```
var name="Gates",
age=56,
job="CEO";
```
**重新声明 JavaScript 变量**
如果重新声明 JavaScript 变量，该变量的值不会丢失：
在以下两条语句执行后，变量 carname 的值依然是 "Volvo"：
```
var carname="Volvo";
var carname;
```