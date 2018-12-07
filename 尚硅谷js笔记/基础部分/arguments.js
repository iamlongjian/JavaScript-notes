function fun(){
    //nishi
    console.log(arguments.callee);
}   
fun('1,1,2,4',true,null,undefined,{},[],function(){},)
