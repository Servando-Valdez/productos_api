import { Sequelize, STRING, FLOAT, BIGINT } from "sequelize";
import { connection } from "../data/connection.js";

export const Product = connection.define('Product', {
    code: { type: STRING, max: 6, primaryKey: true, allowNull: false, unique: true },
    name: { type: STRING, max: 50, allowNull: false },
    price: { type: FLOAT, allowNull: false },
    stock: { type: BIGINT, allowNull: false },
}, {
    tableName: 'products'
});