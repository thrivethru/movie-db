import pkg from "sequelize";

const { Sequelize, DataTypes, Model } = pkg;

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./data/database.sqlite",
  logging: false,
  define: {
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
    timestamps: false,
  },
});

export { db, DataTypes, Model };
