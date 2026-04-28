const sequelize = require("../config/db");
const User = require("./userModel");
const Task = require("./taskModel");

User.hasMany(Task, { foreignKey: "userId", onDelete: "CASCADE" });
Task.belongsTo(User, { foreignKey: "userId" });

module.exports = { sequelize, User, Task };