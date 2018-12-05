var obj = new Object();
obj.name = '123';
console.log(obj);
obj = null;          //此时浏览器会判断是否为垃圾对象,如果是则会销毁.