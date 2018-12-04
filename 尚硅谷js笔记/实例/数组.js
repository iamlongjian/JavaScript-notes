// //创建一个数组对象
// var arr = [123,456,789];
// console.log(arr);
// console.log(arr.length);  //获取一个数组的长度(元素的个数) //3
// arr.length = 2;       //将素组长度修改为2   
// console.log(arr.length);    //2
// console.log(arr);           //123,456(789被删除)
// arr[arr.length] = 123;      //在数组的末尾添加一个值123
// console.log(arr.length);    //3
// console.log(arr);           //123,456,123
//------------------------------------------------------------------------------
//数组的基本操作:数组里可以放任意数据类型
// var arr = [{name:123},{name:222},{name:456}];
// // console.log(arr[1].name);           //调用数组中的对象
// // arr = [
// //     function(){alert('1')},
// //     function(){alert('2')}
// // ];
// // console.log(arr[0]());           //调用数组中的函数

// arr = [[1,2,3],[4,5,6],[7,8,9]];      //数组中添加数组  称为二维数组
// console.log(arr[1]);
//------------------------------------------------------------------------------
//数组的方法
var arr = ['孙悟空','猪八戒','唐僧'];
console.log('往数组后面添加元素后的数组长度为:'+arr.push('123','456')); //push()方法
console.log(arr);
console.log('删除了最后一个元素:'+arr.pop());        //pop()方法
console.log(arr);
console.log('往数组前面添加元素后的数组长度为:'+arr.unshift('开头1','开头2'));
console.log(arr);
console.log("在数组的开头删除一个元素:"+arr.shift());
console.log(arr);