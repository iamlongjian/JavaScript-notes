function user(name){
    var sex,age;
    return {
        getName:function(){
            return name;
        },
        setName:function(newName){
            name = newName;
        },
        getAge:function(){
            return age;
        },
        setAge:function(newAge){
            age = newAge;
        },
        getSex:function(){
            return sex;
        },
        setSex:function(newSex){
            sex = newSex;
        },
    }
}

var long = user("龙龙");
long.setAge(15);
long.setSex("男生");
var name = long.getName();
var sex = long.getSex();
var age = long.getAge();
console.log(name , sex , age);