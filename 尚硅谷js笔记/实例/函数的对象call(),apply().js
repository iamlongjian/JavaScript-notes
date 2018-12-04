function fun(name,age){
    console.log('name:'+name);
    console.log('age:'+age);
}
var obj = {
    name:'obj',
    sayName:function(){
        console.log(this.name);
    }
}
var obj2 = {
}
fun.call(obj2,'longer',19);    //将这个this指向obj2 //参数是谁，this就是谁
console.log(obj2);