var name = '全局name';
function fun(){
    var x = this.name;
    alert(x);
}
var obj = {
    name:'obj-name',
    getName:function fun2(){
        alert(this.name);
    }
}
var obj2 = {
    name:'obj2-name',
    getName:function fun3(){
        alert(this.name);
    }
}

fun();
obj.getName();
obj2.getName();
