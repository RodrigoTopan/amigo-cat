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
        const herokuPostgres = "postgres://mlasqjzdzynuxx:4958ae1cec611095b7b74cb3662fe0f795f5ab87570c53cc4894e51eecc920ea@ec2-23-23-222-184.compute-1.amazonaws.com:5432/d3ohiueut8bvbm";
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