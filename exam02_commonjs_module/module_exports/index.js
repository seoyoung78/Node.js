const moduleA = require("./moduleA");
console.log(moduleA.name);
console.log(moduleA.age);

const fun1 = require("./moduleB");
fun1();   //fun1을 리턴

const moduleC = require("./moduleC");
console.log(moduleC.var2);
console.log(moduleC.var3);
moduleC.fun2();
moduleC.fun3();

//구조 분해 할당을 이용해서 필요한 것만 사용
const {var5, fun5} = require("./moduleD");  //구조분해할당 - 필요한 것만 불러옴(객체x), 참조변수 없이 사용 가능
console.log(var5);
fun5();