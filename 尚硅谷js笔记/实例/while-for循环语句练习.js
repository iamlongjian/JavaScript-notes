// //使用while()循环:假如投资的年利率为5%,试求1000增长到5000,需要花费几年？
// var money = 1000,count = 0;     //count为计数器
// while(money <= 5000){
//     money *= 1.05;          
//     count++;                //循环每执行一次则count自增1;
// }
// console.log(count);       //结果为33


// //打印1-100之间所有的奇数和
// var sum = 0;    //定义一个存总和变量
// for(var i = 1; i <=100; i+=2){
//     sum = sum + i;
// }
// console.log(sum);




//打印1-100之间7的倍数的个数及总和
//①先打印1-100所有的数
//i%7的余数为0的时候，i就是7的倍数，使用判断对其进行提出。
// var sum = 0,count = 0;              //sum求和  count求个数
// for(var i = 1; i <=100;i++){
//     if(i%7 == 0){
//         sum = sum + i;
//         count++;
//         console.log(i);
//     }
// }
// console.log('个数有:',count);
// console.log('和为:',sum);

