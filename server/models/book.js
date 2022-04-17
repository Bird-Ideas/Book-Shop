"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({ Author, Publisher }) {
    //   // define association here
    //   // this.hasMany(Author);
    //   this.belongsTo(Author);
    //   this.belongsTo(Publisher);
    // }

    // toJSON() {
    //   return { ...super.toJSON(), AuthorId: undefined, PublisherId: undefined };
    // }

    toJSON() {
      return { ...this.get() };
    }
  }
  Book.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING, 
        allowNull: false
      }, 
      publisher: { 
        type: DataTypes.STRING, 
        allowNull: false
      }, 
      pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UPC: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT("tiny"),
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Book",
      timestamps: false,
    }
  );
  return Book;
};
