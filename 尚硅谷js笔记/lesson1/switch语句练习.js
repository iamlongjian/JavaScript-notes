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
var x = +prompt('请输入您的成绩');               
if(x>100 || x<0 || isNaN(x)){
    console.log('请输入正确的值');
}else{
    switch(true){            
        case x>=60:     //拿x>=60跟true对比，如果全等则运行。不全等则进行下一个判断。
        console.log('及格了');
        break;
        default:
        console.log('不及格');
        break;
    }
}