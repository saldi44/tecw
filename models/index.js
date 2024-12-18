"use strict";

const{Sequelize, up, Model, DataTypes} = require("sequelize");

const sequelize = new Sequelize("sqlite:blog.sqlite", {logging:false});

const Post = require("./post")(sequelize);
const Attachment = require("./attachment")(sequelize);

Attachment.hasOne(Post, {as: "post", foreignKey: "attachmentId"});
Post.belongsTo(Attachment, {as: "attachment", foreignKey: "attachmentId"});

module.exports = exports = sequelize;
