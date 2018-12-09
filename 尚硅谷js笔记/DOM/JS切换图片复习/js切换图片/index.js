var prev = document.getElementById("prev");
var next = document.getElementById("next");


var img = document.getElementsByTagName("img")[0];

var srcArr = ["1.jpg","2.jpg","3.jpg","4.jpg"];
var index = 0;
var info = document.getElementById("info");
info.innerHTML="一共"+srcArr.length+"张,当前是第"+(index+1)+"张";

prev.onclick=function(){
    index--;
    if(index<0){
        index=srcArr.length-1;
    }
    img.src = srcArr[index];
info.innerHTML="一共"+srcArr.length+"张,当前是第"+(index+1)+"张";

}
next.onclick=function(){
    index++;
    if(index>srcArr.length-1){
        index=0;
    }
    img.src = srcArr[index];
info.innerHTML="一共"+srcArr.length+"张,当前是第"+(index+1)+"张";

}