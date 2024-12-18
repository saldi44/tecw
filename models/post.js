"use strict";

const {Model, DataTypes} = require("sequelize");

module.exports = (sequelize) => {

    class Post extends Model {}
    Post.init({
        title: {
            type:DataTypes.STRING,
            validate: {notEmpty: {msg: "title not empty"}}
        },
        body: {
            type:DataTypes.TEXT,
            validate: {notEmpty: {msg:"body not empty"}}
        },
        attachmentId: {
            type: DataTypes.INTEGER,
            references: {
              model: "Attachments",
              key: "id"
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          }
        },
        {sequelize} 
    );
    return Post;
}