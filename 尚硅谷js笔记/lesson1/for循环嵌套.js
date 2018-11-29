// 使用程序输出
// *****
// *****
// *****
// *****
// *****

for (var i =0; i<5; i++){
    document.write('*&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp<br />');
}

// 使用程序输出
// *
// **
// ***
// ****
// *****
for(var i = 0; i<5; i++){
    for(var x = 0; x<i+1; x++){
        document.write('*&nbsp&nbsp&nbsp');
    }
    document.write('<br/>');
}
// 使用程序输出
// *****
// ****
// ***
// **
// *

for(var i = 0; i<5; i++){
    for(var x = 0; x<5-i; x++){
        document.write('*&nbsp&nbsp&nbsp');
    }
    document.write('<br/>');
}

//使用程序输出9*9乘法表
for(var i = 1; i<=9; i++){
    for(var x = 1; x<=i; x++){
        document.write(x+'*'+i+'='+i*x+'&nbsp')
    }
    document.write('<br />');
}

