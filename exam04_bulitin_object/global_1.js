const timerId = global.setInterval(() => {
  console.log(new Date().toLocaleString());
}, 1000);

global.setTimeout(() => {
  global.clearInterval(timerId);
}, 5000);

const {setUserId} = require("./global_2");
setUserId("user1");

console.log(global.userId, userId);

fun1();