const express = require('express')
const router = express.Router()
const barbearia = require('../models/barbearia')
const servico = require('../models/servico')

router.post('/', async(req, res) => {
    try {

    }catch(err) {
        res.json({error: true, message:err.message})
    }
})