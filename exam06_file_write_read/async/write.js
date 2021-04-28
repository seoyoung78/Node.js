const fs = require("fs");

const data = "오늘은 수요일입니다. \n오늘부터 Node.js 수업을 합니다.";

fs.writeFile("./data.txt", data, (err) => {
  console.log("파일 저장 완료");
});


console.log("다른 작업 실행");