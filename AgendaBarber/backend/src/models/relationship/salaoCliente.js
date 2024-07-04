const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salaoCliente = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },
    clienteId: {
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    
})