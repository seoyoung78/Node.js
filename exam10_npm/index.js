const bcrypt = require("bcrypt");

(async () => {
    const cryptedPassword = await bcrypt.hash("12345", 12);
    console.log(cryptedPassword);
    const result = await bcrypt.compare("123456", cryptedPassword);
    console.log(result);
}) ();