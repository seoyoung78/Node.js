const var2 = "value2";
const var3 = "value3";

const fun2 = () => {
  console.log("fun2() 실행");
};

const fun3 = () => {
  console.log("fun3() 실행");
};

module.exports = {
  var2: var2,   //속성 이름과 값이 동일한 경우 1개는 생략 가능
  var3: var3,
  fun2: fun2,
  fun3: fun3
};