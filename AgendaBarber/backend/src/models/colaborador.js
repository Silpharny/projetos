const mongoose = require('mongoose')
const Schema = mongoose.Schema

const colaborador = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome obrigatório!']
    },   
    telefone: {
        type: String,
        required: [true, 'Telefone obrigatório!']
    },   
    email: {
        type: String,
        required: [true, 'Email obrigatório!']
    },   
    foto: {
        type: String,
        required: [true, 'Foto obrigatório!']
    },
    dataNascimento: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'I'],
        default: 'A'
    },
    contaBancaria: {
        titular: {
            type: String,
            required: true
        },
        cpfCnpj: {
            type: String,
            required: true
        },
        banco: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        agencia: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        dv: {
            type: String,
            required: true
        }
    },
    recipentId: {
        type: String,
        required: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Colaborador', colaborador)