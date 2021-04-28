const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream('./big.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./big.zip");

writeStream.on("finish", () => {
  console.log("복사 완료");
});

readStream.pipe(zlibStream).pipe(writeStream);