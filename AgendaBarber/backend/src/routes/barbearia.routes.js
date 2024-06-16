const express = require('express')
const router = express.Router()
const Barbearia = require('../models/barbearia')

router.post('/', async(req, res) => {
    try {
        const barbearia = await new Barbearia(req.body).save()
    res.json({ barbearia })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

module.exports = router