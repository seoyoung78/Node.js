const {URL} = require("url");

const strUrl = "http://www.mycompany.com:8080/xxx/100?param1=1&param2=2&param2=3#bottom";   //param2는 복수 개 전달
const url = new URL(strUrl);

console.log(url.protocol);
console.log(url.hostname);
console.log(url.port);
console.log(url.pathname);
console.log(url.searchParams.get("param1"));
console.log(url.searchParams.getAll("param2"));
console.log(url.hash);