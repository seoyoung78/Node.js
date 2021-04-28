const var4 = "value4";
const var5 = "value5";

const fun4 = () => {
  console.log("fun4() 실행");
};

const fun5 = () => {
  console.log("fun5() 실행");
};

module.exports = {
  var4,   //속성 이름과 값이 동일한 경우 1개는 생략 가능
  var5,
  fun4,
  fun5
};

//최상위로 실행되었느냐? 즉 node 명령어로 실행 되었는가?
if(require.main === module) {
  console.log("이것은 테스트--------------------.");
  fun4();
  fun5();
}