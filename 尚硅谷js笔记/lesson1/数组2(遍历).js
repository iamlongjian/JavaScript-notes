// var arr = ['孙悟空','猪八戒','沙和尚'];

// for(var i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }
//-----------------------------------------------------------------
//练习
// function Person(name,age){
//     this.name=name;
//     this.age = age;
// }
// var per=new Person('唐僧',18);
// var per2=new Person('孙悟空',38);
// var per3=new Person('白龙马',8);
// var per4=new Person('沙悟净',5);
// var per5=new Person('二郎神',98);


// var perArr = [per,per2,per3,per4,per5];

//创建一个函数,将perArr数组中满18岁的对象提取出来,封装到一个新数组中并返回
//步骤:
//1. 先创建一个名为getAdult函数,并传一个形参arr
//2. 创建一个新数组并返回
//3. 遍历arr数组中的元素,获取arr中Person对象
//4. 判断Person对象的age是否大于等于18
//5. 如果大于等于18,则将这个对象添加到newArray中

// //1.创建函数
// function getAdult(arr){
//     //2.创建新数组
//     var newArr = [];
//     //3. 遍历arr数组中的元素,获取arr中Person对象
//     for(var i =0;i<arr.length;i++){
//         //4. 判断Person对象的age是否大于等于18
//         if(arr[i].age>=18){
//             //5. 如果大于等于18,则将这个对象添加到newArray中
//             //将这些对象放入新数组中
//         newArr.push(arr[i]);
//         }
//     }
//     //2.返回数组
//     return newArr;
// }
// var adult =getAdult(perArr);
// console.log(adult);


//回顾
// function Person(name,age){
//     this.name=name;
//     this.age = age;
// }
// var per=new Person('唐僧',18);
// var per2=new Person('孙悟空',38);
// var per3=new Person('白龙马',8);
// var per4=new Person('沙悟净',5);
// var per5=new Person('二郎神',98);


// var perArr = [per,per2,per3,per4,per5];

// function getAdult(arr){
//     var n_arr = [];
//     for(var i =0;i<arr.length;i++){
//         if(arr[i].age>=18){
//             n_arr.push(arr[i]);
//         }
//     }
//     return n_arr;
// }
// var adult = getAdult(perArr);
// console.log(adult);
//-----------------------------------------------------------------------------

//forEach()方法
var arr=['孙悟空','猪八戒','沙和尚','唐僧','白骨精'];
//forEach()方法需要一个函数作为参数
//这种函数会自动调用,我们成为回调函数(由我们创建不由我们调用)
//数组中有几个函数,该函数就会执行几次
arr.forEach(function(value,index,obj){    //看md文件
    console.log('元素:'+value+',元素的索引:'+index);            //输出5个1
});        //IE9以上版本才支持



//for循环    推荐使用
var arr2= ['孙悟空','猪八戒','沙和尚','唐僧','白骨精'];
for(var i = 0 ;i<arr2.length;i++){
    console.log('元素:'+arr2[i]+',元素的索引:'+i);
}