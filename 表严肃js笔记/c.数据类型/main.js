// var o = {
//     a:1,
//     b:2
// };
// var x = o.a + o.b;
// document.write(x);

// var x = parseInt(1.5);
// alert(x);

// var x ='longer'[5];    //索引从0开始
// console.log(x);

// var a = '花花→_→拴蛋→_→背背'.split('→_→');  //使用字符串将字符串分割为数组
// console.log(a);

// var b = 'longer'.concat('是帅哥');    //连接字符串
// console.log(b);

// var p = 'longer is best~';
// var sp = p.slice(3);
// console.log(sp);

// console.log('1'+1);
// console.log(1+'1');
// console.log(2*'2');
// console.log('2'*2);

// var user = {
//     姓名:'longer',
//     年龄:'18',
//     学校:'清华大学',
//     家庭:'小康家庭',
//     技术:{                   //对象里面嵌套对象
//         前端:'htmlcss',
//         后端:'php',
//     }
// }
// console.log(user.姓名);  //输出 longer
// console.log(user.技术.前端); //输出 htmlcss

// var ob = {};
// ob.a = 1;
// console.log(ob.a)      //输出1,申明对象后还可以添加新键

//数组////数组////数组////数组////数组////数组////数组////数组////数组////数组//

// var arr = ['a','b','c'];
// arr.push('long');              //添加新元素push 从末尾添加
// console.log('push',arr);


// var arr = ['a','b','c'];
// arr.unshift('long');              //添加新元素unshift 从开头添加
// console.log('unshift:',arr);

// var arr = ['a','b','c'];
// arr.pop();                       //pop 从末尾删除
// console.log('pop:',arr);

// var arr = ['a','b','c'];
// arr.shift();                    //shift 从开头删除
// console.log('shift:',arr);

// var arr = ['a','b','c'];
// arr.reverse();                      //reverse 颠倒元素顺序
// console.log('reverse:',arr);

// var arr = ['a','b','c'];
// arr.splice(1,2,'1','2','3','4');                      //splice(从哪开始剪,剪几个元素,'替换元素1','替换元素2','替换元素3'......)
// console.log('splice:',arr);

// var myCars = ['a','b','c','d','e'];
// var y=myCars.indexOf("d");              // "d" 值的索引值
// var x;
// for( x=0;x<myCars.length;x++  ){        //使用for循环输出数组
//     console.log(myCars[x]);
// }


//null////null////null////null////null////null////null////null////null////null////null//
var x = null;
if (x){
    console.log('1');
}else{
    console.log('2');      //返回2 则null的值为false
}


//undefined未定义//
var a = undefined;
console.log(a);      //返回undefined,也就是说你可以将一个变量定义为未定义          





