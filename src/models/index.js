const EmailCode = require("./EmailCode");
const User = require("./User");

User.hasOne(EmailCode); // userId
EmailCode.belongsTo(User);
