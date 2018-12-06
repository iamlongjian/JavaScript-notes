var btn = document.getElementById('btn01');
btn.onclick = function (){
    var lis = document.getElementsByTagName("li");
    console.log(lis.length);
    for(var i =0;i<lis.length;i++){
        console.log(lis[i].innerHTML);
    }
}

var btn2 = document.getElementById('btn02');
btn2.onclick =function(){
    var inputs = document.getElementsByName('sex');
    for(var i = 0;i<inputs.length;i++){
        console.log(inputs[i].className);
    }
}


