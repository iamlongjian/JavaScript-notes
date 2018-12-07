// var arr = ['孙悟空','猪八戒','沙和尚'];
// //concat()方法
// var arr2 = ['白骨精','蜘蛛精','玉兔精'];
// var arr4 = ['牛魔王','铁扇公主'];
// var arr3=arr.concat(arr2,arr4);
// console.log(arr3);

//join()
// var result = arr.join('！');
// console.log(result);

//reverse()
// console.log(arr);    
// console.log(arr.reverse()); 
// console.log(arr);    //["沙和尚", "猪八戒", "孙悟空"]

//对字符串数组进行排序
// var arr=['a','c','b','x','l','e','g']
// //sort()
// console.log(arr.sort());
// console.log(arr);
// //对数字数组进行排序
// var arr2 =[11,4,'5',3,2];
// console.log(arr2.sort());
// console.log(arr2);           //11.2.3.4.5 答案错误

// //我们要使用回调函数
// var  arr = [4,5,9,2,3,7,6,1,8,15];
// //使用回调函数(只对全数字有效)
// arr.sort(function(a,b){
//         return b-a;
// });
// console.log(arr);

//复习------------------------------------------------------------------------------
// function Person(name,age){
//         this.name=name;
//         this.age = age;
// }
// Person.prototype.toString = function(){
//         console.log('Person[name='+this.name+',age='+this.age+']');
// }
// var per = new Person('孙悟空',18);
// var per2 = new Person('猪八戒',35);
// var per3 = new Person('唐三藏',21);

// var arr = [per,per2,per3];
// for(var i=0;i<arr.length;i++){
//         console.log(arr[i]);
// }
// //向数组最前面删除一个元素
// arr.shift();
// console.log(arr);
// //向数组最前面添加一个元素
// arr.unshift(per);
// console.log(arr);
// //向数组最后面删除一个元素
// arr.pop();
// console.log(arr);
// //向数组最后面添加一个元素
// arr.push(per3);
// console.log(arr);

// //数组去重复习
// var arr = [1,2,3,3,4,5,2,2,2,6,7];
// //遍历数组
// for(var i =0;i<arr.length;i++){
//         //遍历对比的数组
//         for(j=i+1;j<arr.length;j++){
//                 if(arr[i] == arr[j]){      //注意是两个等号
//                         arr.splice(j,1);        //删除下标为j的一个元素
//                         j--;            //删除元素后，后面的元素会进行补位，所以要先退一位，在进行判断
//                 }
//         }
// }
// console.log(arr);

//数组的去重
// var arr = [1,3,2,4,4,6,8,5,7,7,9,2];
// console.log(arr);
// for(var i =0;i<arr.length;i++){
//         for(var j=i+1;j<arr.length;j++){
//                 if(arr[i]==arr[j]){
//                         arr.splice(j,1);
//                         j--;
//                 }
//         }
// }
// console.log(arr);


// var arr = [1,2,3,4,5,6,7,8,9];
// var result = arr.splice(1,3,'22','33',"44");
// console.log(arr);