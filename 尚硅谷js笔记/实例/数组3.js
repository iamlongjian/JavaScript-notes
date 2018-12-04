// var arr = ['孙悟空','猪八戒','沙和尚','唐僧','白骨精'];
// var arr2 = arr.splice(1,3,'牛魔王','铁扇公主','铁扇公主','铁扇公主','铁扇公主2','铁扇公主3','铁扇公主3');              //返回一个新数组赋值给arr2
// console.log('截取后的原数组:'+arr);
// console.log('截取后的新数组:'+arr2);
// console.log('原数组长度:'+arr.length);
//练习----------------------------------------------------------------------
//创建一个数组
var arr = [1,2,3,2,2,1,3,4,2,5];

//去除数组中重复的元素(使用嵌套for循环)
//获取数组中的每一个元素
for(var i = 0;i<arr.length;i++){
   // console.log(arr[i]);
    //获取当前元素后的所有元素
    for(var j = i+1;j<arr.length;j++){
        //console.log('---------->'+arr[j]);
        //判断两个元素的值是否相等,如果相等则出现了重复的元素，则删除arr[j]
        if(arr[i] == arr[j]){
            arr.splice(j,1);       //删除下标为j的元素，删除一个
            //当删除了arr[j]元素之后，后面的元素会自动补位
            //此时将不会再比较这个元素，所以需要二次比较arr[j]
            //使用 j--(自减)
            j--;//(写到if里面)
        }
      
    }
}

console.log(arr);           //1，2，3，4，5





//数组去重回顾(for循环嵌套)
var newArr = ['龙🗡','采薇名','何必','龙🗡','慰问找','慰问找','张永大','龙🗡','采薇名','张永大','张永大','慰问找','何必']
console.log('去重前的数组:'+newArr);
for(var i=0;i<newArr.length;i++){
    //遍历数组中的每一个元素
    // console.log(newArr[i]);
    //使用newArr[i]和newArr[j]比较
    for(var j=i+1;j<newArr.length;j++){
        if(newArr[i]==newArr[j]){             //比较两个值是否相等
            newArr.splice(j,1);                 //如果相等则删除下标为j的一个元素
            j--;  //相当于二次比较                          //删除一个元素后，后面的元素会补位，则会出现遗漏的情况，
                                            //则需要使用j--,删完之后倒退一位，在往下进行比较。
        }
    }
}
console.log('去重后的数组:'+newArr); 


var arr = [1,2,2,3,4,5,5,6,4,3,1];
//输出去重前的数组
console.log('去重前:'+arr);
//遍历数组
for(var i = 0;i<arr.length;i++){
    //遍历被比较数组
    for(var j=i+1;j<arr.length;j++){
        //比较两值是否相等
        if(arr[i]==arr[j]){
            //如果相等,则删除下标为j的一个元素
            arr.splice(j,1);
            //由于元素删除后会自动补位，所以要进行二次判断，使用j--
            j--;
        }
    }
}
console.log('去重后:'+arr);  