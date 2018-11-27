//函数复习
;(function (){
    function buy(money,orz){
        if(money && orz){
            console.log("合作愉快");
        }else{
            console.log("爬开");
        }
    }
    buy(100,123);

    function jia(a,b){
        return a+b;
    }
    function jian(a,b){
        return a-b;
    }
    function cheng(a,b){
        return a*b;
    }
    function chu(a,b){
        return a/b;
    }

    var a = jia(1,2);
    console.log('1+2=',a);

    var b = jian(3,2);
    console.log('3-2=',b);
    
    var c = cheng(1,2);
    console.log('1*2=',c);

    var d = chu(3,2);
    console.log('3-2=',d);


    var coo;
    function co(){          //即使coo在函数内部声明，它仍然是个全局变量
        coo = '123';       
    }
    co();
    console.log(coo);
    

})();