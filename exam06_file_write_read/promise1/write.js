const fs = require("fs").promises;

const data = "오늘은 수요일입니다. \n오늘부터 Node.js 수업을 합니다.";

fs.writeFile("./data.txt", data)
  .then(() => {
    console.log("파일 저장 완료");
  })
  .catch((err) => {
    console.log(err);
  });


console.log("다른 작업 실행");