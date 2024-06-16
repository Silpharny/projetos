const express = require('express')
const app = express()
const morgan = require('morgan')
//const cors =  require('cors')
require('./database')

app.use(morgan('dev'))
app.use(express.json())
//app.use(cors())

app.set('port', 8000)

app.use('/barbearia', require('./src/routes/barbearia.routes'))

app.listen(app.get('port'), () => {
    console.log(`Backend escutando na porta: ${app.get('port')}`);
})