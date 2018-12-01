// var x = +prompt('请输入今天周几(1-7)');
// if( x<1 || x>7 || isNaN(x) ){
//     console.log("请你输入正确的值");
// }else{
//     switch(x){
//         case 1:
//         console.log('壹');
//         break;
//         case 2:
//         console.log('贰');
//         break;
//         case 3:
//         console.log('叁');
//         break;
//         case 4:
//         console.log('肆');
//         break;
//         case 5:
//         console.log('五');
//         break;
//         case 6:
//         console.log('陆');
//         break;
//         default :
//         console.log('漆');
//         break;
//     }
// }

// var x = +prompt('请输入您的成绩');           
// if(x>100 || x<0 || isNaN(x)){
//     console.log('请输入正确的值');
// }else{
//     switch(parseInt(x/10)){
//         case 10:
//         case 9:
//         case 8:
//         case 7:
//         case 6:
//         console.log('及格了');
//         break;
//         default:
//         console.log('不及格');
//         break;
//     }
// }


//还有一种方式
// var x = +prompt('请输入您的成绩');               
// if(x>100 || x<0 || isNaN(x)){
//     console.log('请输入正确的值');
// }else{
//     switch(true){            
//         case x>=60:     //拿x>=60跟true对比，如果全等则运行。不全等则进行下一个判断。
//         console.log('及格了');
//         break;
//         default:
//         console.log('不及格');
//         break;
//     }
// }


// var day  = new Date().getDay();
// switch(day){
//     case 1:
//     console.log('今天周一!');
//     break;
//     case 2:
//     console.log('今天周二!');
//     break;
//     case 3:
//     console.log('今天周三!');
//     break;
//     case 4:
//     console.log('今天周四!');
//     break;
//     case 5:
//     console.log('今天周五!');
//     break;
//     case 6:
//     console.log('今天周六!');
//     break;
//     default:                  //默认执行的内容
//     console.log('今天周日!')
//     break;
// }


// var result = [
//     '第一条数据',
//     '第二条数据',
//     '第三条数据',
//     '第四条数据',
// ];
// for(var i=0;i<result.length;i++){
//     console.log(result[i]);
// }
// var i = 0;
// while(i<50){
//     console.log(i);
//     i++;
// }

var user = {
    name:'longer',
    age:18,
    sex:'男',
}
user.age = 21;              //改动对象中的属性
console.log(user);              

//闭包