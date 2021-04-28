const fs = require("fs").promises;

const work = async() => {
  try {
    const data = await fs.readFile("./data.txt")
    console.log(data.toString());
    console.log("파일 읽기 성공");
  } catch (err) {
    console.log("파일 읽기 실패");
    console.log(err);
  }
};

work();

console.log("다른 작업 실행");