#!/usr/bin/env node
const Sequelize = require('sequelize');
const Usuario = require('./resources/models/usuario');
//Bcrypt - para segurança :D
//const bcrypt = require('bcrypt');
//const senha = 'abc123';

class DatabaseSQL {
    constructor() {
        this.ImersaoNudesJS = {};
        this.UserModel = {};
    }
    async conectar() {
        const herokuPostgres = process.env.DATABASE_URL;//postgres://moktihliodsokv:56b2a6adf240b6a96bc1571e51e1faea80bc9ab1fbc5c664be4cc79902159723@ec2-54-204-45-43.compute-1.amazonaws.com:5432/dl42slg5blpe4
        this.ImersaoNudesJS = new Sequelize(
            herokuPostgres,
            {
                dialect: 'postgres',
                dialectOptions: {
                    ssl: true,
                    requestTimeout: 30000, // timeout = 30 seconds
                },
            },
        );
        await this.definirModelo();
    }
    async definirModelo() {
        this.UserModel = this.ImersaoNudesJS.define('Users', {
            ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            USERNAME: Sequelize.STRING,
            PASSWORD: Sequelize.STRING,
        });

      
        await this.UserModel.sync({ force: true })

        await this.UserModel.create({
            USERNAME: 'Rodrigo',
            PASSWORD: '123'
        });
       

        /*await this.UserModel.create({
            USERNAME: 'Rodrigo',
            PASSWORD: '123'
        });

        await this.EmployeeModel.create({
            NOME: 'Rodrigo',
            IDADE: '19',
            DATA_NASCIMENTO: '1998-03-11',
            fk_userId: '1',
        });*/




        //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJvZHJpZ28iLCJpZFRva2VuIjoiQUFCQkNDIiwiaWF0IjoxNTE3NTc3ODI5fQ.i2RjyH_OwaXKnvGN9Y1NNujHt2gRs4RQtVYPovmLYIo
    }
}
module.exports = DatabaseSQL;