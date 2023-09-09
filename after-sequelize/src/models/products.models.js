import { DataTypes } from "sequelize";
import sequelize from '../config/db.js'

const Product = sequelize.define('product', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

});

Product.sync() //Sincronizar con la BDD

export default Product