const express = require('express')
const router = express.Router()
const Barbearia = require('../models/barbearia')
const Servico = require('../models/servico')

router.post('/', async(req, res) => {
    try {
        const barbearia = await new Barbearia(req.body).save()
    res.json({ barbearia })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

router.get('/servicos/:salaoId', async(req, res) => {
    try {
        const {salaoId} = req.params
        const servicos = await Servico.find({
            salaoId,
            status: 'A'
        }).select('_id titulo')

        res.json({
            servicos: servicos.map(s => ({label: s.titulo, value: s._id}))
        })

    } catch(err){
        res.json({error: true, message: err.message})
    }
})

module.exports = router