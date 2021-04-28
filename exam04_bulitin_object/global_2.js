function setUserId (userId) {
  global.userId = userId;
};

global.fun1 = () => {
  console.log("global.fun1() 실행");
}

module.exports = {
  setUserId: setUserId
};