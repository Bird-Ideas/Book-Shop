"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Author, Publisher }) {
      // define association here
      // this.hasMany(Author);
      this.belongsTo(Author); 
      this.belongsTo(Publisher); 
    }

    toJSON() {
      return { ...super.toJSON(), id: undefined };
    }
  }
  Book.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      // author: {
      //   type: DataTypes.BIGINT,
      //   allowNull: false
      // },
      // publisher: {
      //   type: DataTypes.BIGINT,
      //   allowNull: false
      // },
      summary: {
        type: DataTypes.TEXT("tiny"),
        allowNull: true,
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
