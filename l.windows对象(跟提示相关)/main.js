var a = alert('123');
console.log("返回值:",a);  //返回undifined

var r = confirm('是否删除');
console.log("返回值:",r);  //点取消则false,反之为true

var name = prompt('whats your name?');
console.log("name is:" + name);  //按下回车后，才会进行打印