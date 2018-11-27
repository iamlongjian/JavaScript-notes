### js复习笔记
- JavaScript 对大小写敏感。
JavaScript 对大小写是敏感的。

当编写 JavaScript 语句时，请留意是否关闭大小写切换键。

函数 getElementById 与 getElementbyID 是不同的。

同样，变量 myVariable 与 MyVariable 也是不同的。
**输出到html文档流**
`document.write('');`
**点击按钮调用方法****
```
HTML
<button type="button" onclick='fun()'>按下<button />
JS
function fun(){
    console.log('123');         //按下按钮 控制台输出'123';
}
```
**点击按钮改变指定html元素值(htmlDOM)**
```
HTML
<p id="demo">点击按钮我将变身</p>
<button type="button" onclick='fun2()'>按下<button />
JS
function fun2(){
    var x = document.getElementById('demo');        //按下按钮 控制台输出'123';
    x.innerHTML='变身完成!';
}
```
**点击按钮开关灯**
```
HTML
<img src="img/eg_bulbon.gif" id="demo1">
<button type="button" onclick="ChangeImg"></button>
JS
function ChangeImg(){
    var x = document.getElementById("demo1");
    if(x.src.match("bulbon")){
        x.src="img/eg_bulboff.gif";
    }else{
        x.src="img/eg_bulbon.gif";
    }
}
```
**改变HTML元素样式**
```
HTML
<p id="demo2">点击按钮我就变绿</p>
<button type="button" onclick="ChangeColor()"></button>
JS
function ChangeColor(){
    var x = document.getElementById("demo2");
    x.style.color="green";
}
```

