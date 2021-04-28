const fs = require("fs").promises;

(async () => {
  //폴더인지 파일인지 확인
  const stat = await fs.stat("./dirinfo.js");
  console.log(stat.isFile());
  console.log(stat.isDirectory());

  //폴더 내용 얻기
  const files = await fs.readdir(__dirname);  //디렉토리에 있는 폴더나 파일을 배열로 출력
  for (let file of files) {
    console.log(file);
  }

  //파일 삭제
  await fs.unlink("./test.js");
}) ();