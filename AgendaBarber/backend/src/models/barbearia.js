const mongoose = require('mongoose')
const Schema = mongoose.Schema

const barbearia = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome obrigatório!']
    },   
    foto: String,
    capa: String,
    email: {
        type: String,
        required: [true, 'Email obrigatório!']
    },   
    senha: {
        type: String,
        default: null,
    },   
    telefone: String,
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    geo: {
        tipo: String,
        cordinates: Array,
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
})

barbearia.index({ geo: '2dsphere' })

module.exports = mongoose.model('Barbearia', barbearia)