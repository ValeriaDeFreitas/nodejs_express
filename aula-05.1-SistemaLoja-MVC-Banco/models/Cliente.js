
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Cliente = connection.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
//Não força a criação da tabela caso já exista
Cliente.sync({ force: false })
export default Cliente;



















