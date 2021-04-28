const fs = require("fs");

const writeStream = fs.createWriteStream("./data.txt");

writeStream.on("finish", () => {
  console.log("저장 완료되었어요.");
})

writeStream.write("홍길동");
writeStream.write("감자바");
writeStream.write("모르쇠");
writeStream.end();