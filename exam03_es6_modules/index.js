import moduleA from "./moduleA.js"    //export default로 지정 되어 있을 경우 가능
console.log(moduleA.name);
console.log(moduleA.age);

import fun1 from "./moduleB.js"
fun1();

import moduleC from "./moduleC.js"
console.log(moduleC.var2);
console.log(moduleC.var3);
moduleC.fun2();
moduleC.fun3();

import {var4, var5, fun4, fun5} from "./moduleD.js" //구조 분해 할당 형식으로 불러와야 함
console.log(var4);
console.log(var5);
fun4();
fun5();


import moduleE, {var6, var7} from "./moduleE.js"    //export defaul한 값이 먼저 다음이 export 문법 상 와야 함
moduleE.fun6();
moduleE.fun7();
console.log(var6);
console.log(var7);