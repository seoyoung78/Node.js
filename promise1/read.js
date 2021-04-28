const fs = require("fs").promises;

fs.readFile("./data2.txt")
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log("에러 발생: ", err);
  });

console.log("다른 작업 실행");