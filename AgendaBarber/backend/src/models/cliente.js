const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cliente = new Schema({
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
    documento: {
        tipo:{
            type: String,
            enum: ['individual', 'corporation'],
            required: true
        },
        numero:{
            type: String,
            required: true
        },
    },
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String, 
        pais: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Cliente', cliente)