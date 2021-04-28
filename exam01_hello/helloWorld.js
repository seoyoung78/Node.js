console.log("Hello, Node.js");

function fun1() {
  console.log("fun1() 실행");
  fun2();
};

const fun2 = () => {
  console.log("fun2() 실행");
};

fun1();