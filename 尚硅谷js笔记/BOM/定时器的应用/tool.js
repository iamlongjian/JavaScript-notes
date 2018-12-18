function move(obj,attr,target,speed,callback){
    //正负判断
    //如果从0往800移动,那么speed需要为正值
    //如果从800往0移动,那么speed需要为负值
    
    //获取当前元素所在的位置
    var current = parseInt(getStyle(obj,attr));
    if(current>target){
        speed = -speed;
    }
    //clearInterval(timer);  //定时器的返回值不应该储存在全局变量timer中,否则每个调用该函数的动画都是返回的时同一个定时器的值
    clearInterval(obj.timer); //需要根据移动的元素来变化 //在obj中保存一个timer属性
    obj.timer = setInterval(function(){
        var old = parseInt(getStyle(obj,attr));
        var newValue = old + speed;
        //向左移动时,需要判断newValue是否小于target,小于target则等于target
        //向右移动时,需要判断newValue是否大于target,大于target则等于target
        if( speed <0 && newValue<target || speed >0 && newValue>target ){
            newValue = target;
        }
        //注意：不能直接写style.attr(attr是变量,这样子就直接写死了) 需要写成以下的方式
        obj.style[attr] = newValue + 'px';
        if(newValue == target){
            clearInterval(obj.timer);
            callback && callback();
        }
    },30)
}

function getStyle(obj,name){
    if(getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else{
        return currentStyle(obj)[name];
    }
}