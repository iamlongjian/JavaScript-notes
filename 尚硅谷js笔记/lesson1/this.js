var name = '全局name';
function fun(){
    console.log(this.name);                 //this
}
var obj = {
    name:'longer',
    sayName:fun
}
var obj2 = {
    name:'cici',
    sayName:fun
}
obj2.sayName();
