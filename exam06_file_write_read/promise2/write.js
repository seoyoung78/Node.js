const fs = require("fs").promises;

const data = "오늘은 수요일입니다. \n오늘부터 Node.js 수업을 합니다.";

(async () => {  //비동기 방식
  try { //await는 try, catch 항상 사용
    await fs.writeFile("./data.txt", data);   //async 함수 안에서만 await 사용 - 동기 방식
    console.log("파일 저장 완료");
  } catch (err) {
    console.log("파일 저장 실패");
    console.log(err);
  }
}) ();

console.log("다른 작업 실행");