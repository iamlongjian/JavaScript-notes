// function buy(money,orz){
//     if(!money||!orz){
//         console.log("别跑~！");
//     }else{
//         console.log("这是找您的钱~~");
//     }
// buy(1,2);


// var a = 1;
// console.log(a);

// function ff (){
//     var b =2;
//     console.log(b);
//     console.log(a); //全局变量也可以在函数内使用
// }
// ff();

// //错误写法


// function ff (){
//     var a = 1;
//     console.log(a);
//     var b =2;
// }
// ff();
// console.log(b);


//
function housework(){
    function jia(a,b){
        console.log(a+b);
    }
    jia(6,2);

    function jian(a,b){
        console.log(a-b);
    }
    jian(6,2);

    function cheng(a,b){
        console.log(a*b);
    }
    cheng(6,2);

    function chu(a,b){
        console.log(a/b);
    }
    chu(6,2);
}
housework();