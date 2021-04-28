const fs = require("fs");

const data = "오늘은 수요일입니다. \n오늘부터 Node.js 수업을 합니다.";

fs.writeFileSync("./data.txt", data);   //저장할 상대 경로 지정

console.log("파일 저장 완료");