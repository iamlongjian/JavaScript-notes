    
while(true){
    x=prompt('输入您的成绩');     //从键盘输入成绩，返回结果 **prompt的返回值是String类型的**
    if(x < 100 && x > 0 ){
        break;
    }
    alert('请输入正确的值');
}
if (x == 100){
    console.log('奖励你一台宝马');
}else if(x < 60){
    console.log('一顿揍');
}else if(x < 80){
    console.log('参考书');
}else if (x < 100){
    console.log('Iphone一台');
}





var h = prompt('你多高?(cm)');                     //嫁不嫁???
var r = prompt('你有多少存款(万)?');
var b = prompt('给自己的颜值打几分?(满分10)');          

if(isNaN(h) || isNaN(r) || isNaN(b)){
    alert('请输入正确的值,且不要带单位');
}else{
    if(h>180 && r>1000 &&b>7){
        alert('我一定要嫁给他');
    }else if(h>180 || r>1000 || b>7){
        alert('嫁给你！');
    }else{
        alert('考虑一下嗷');
    } 
}


var a = +prompt('输入a的值');         //直接在Prompt前面写个'+'，返回值则转换为Number类型
var b = +prompt('输入b的值');
var c = +prompt('输入c的值');

if(isNaN(a) || isNaN(b) || isNaN(c)){
    console.log('我寻思这不是数字嗷');
}else{
    if(a>b && b>c){
        console.log(c,b,a);
    }else if(a>c && c>b){
        console.log(b,c,a);
    }else if(b>a && a>c){
        console.log(c,a,b);
    }else if(b>c && c>a){
        console.log(a,c,b);
    }else if(c>a && a>b){
        console.log(b,a,c);
    }else{
        console.log(a,b,c);
    }
}

