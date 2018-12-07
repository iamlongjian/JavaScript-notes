### Date对象(日期)
- 在Js中使用Date来表示时间
- 语法`var d = new Date();`
##### 创建一个制定的时间对象
- 语法`var d = new Date('月/日/年 时/分/秒');`
```
var d = new Date('12/4/2017 10:20:6');
console.log(d);            
```
##### getDate()属性 输出几号
- 会返回1-31之间的数
- `new Date().getDate(); //当前几号则输出几`
```
var date = new Date().getDate();
console.log(date);
```
##### getDay()属性  输出星期几
- 会返回0-6之间的数,0表示周日,1表示周一
- `new Date().getDay();  //当前周几则输出几`
```
var day = new Date().getDay();
console.log(day);
```
##### getMonth()属性 输出当前几月
- 会返回0-11之间的数,0表示一月,1表示二月
- `new Date().getMonth();  //当前几月份则输出几`
```
var month = new Date().getMonth();
console.log(month);         //出书当前月份-1  如果是十二月则输出11
```
##### getFullYear()属性 输出完整的年份
`new Date().getFullYear(); //20**年`
```
var year = new Date().getFullYear();
console.log(year);
```
##### getTime()属性 获取当前时间对象的时间戳
- 时间戳:指的是从标准时间1970年1月1日,0时0分0秒到当前时间对象所花费的毫秒数(1秒=1000毫秒)
- 返回的数/1000/60/60/24/365 就能得出距离现在多少年
- 计算机在底层保留时间使用的都是**时间戳**
- 获取当前时间戳`console.log(Date.now());`
```
//利用时间戳来测试性能
var start = Date.now();
    for(var i=0;i<1000;i+=5){
        console.log(i);
    }
var end = Date.now();
console.log(end-start);
```
##### getHours(),getMinutes(),getSeconds(),getMilliseconds()
- `getHours()`返回一个1-24的数 //获取小时      
- `getMinutes()`返回一个0-60的数 //获取分钟  
- `getSeconds()`返回一个0-60的数 //获取秒   
- `getMilliseconds()`返回一个0-999的数 //获取毫秒   
 