//1------------------
//点击delete删除行
//获取到所有的delete,也就是a标签
function DeleteA(){
    var tr = this.parentElement.parentElement;
    var name = tr.children[0].innerHTML;
    var tt = confirm('确认删除'+name+'吗');
    if(tt){
        tr.parentElement.removeChild(tr);
        return false;
    }
}
var allA = document.getElementsByTagName('a');
for(var i=0;i<allA.length;i++){
    allA[i].onclick=DeleteA;
}
//2--------------------
//增加员工信息
var sub = document.getElementById('addEmpButton');
sub.onclick=function(){
        var name = document.getElementById("empName").value;
        var email = document.getElementById("email").value;
        var salary = document.getElementById("salary").value;

        var tr = document.createElement("tr");
        
        //往tr中设置内容
        tr.innerHTML="<td>"+name+"</td>"
                    +"<td>"+email+"</td>"
                    +"<td>"+salary+"</td>"
                    +"<td><a href='javascript:;''>Delete</a></td>";
                    //获取刚设置的a元素,并且绑定单击响应函数
                    var a=tr.getElementsByTagName('a')[0];
                    a.onclick=DeleteA;

        var table = document.getElementById("employeeTable");
        var tbody = table.children[0];
        tbody.appendChild(tr);
      
}
