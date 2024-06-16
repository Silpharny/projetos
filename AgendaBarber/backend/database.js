const mongoose = require('mongoose')
const URI = 'mongodb+srv://silpharny:j5AbGLh8ejvJ4b9R@agendabarber.an0xc36.mongodb.net/agendabarber?retryWrites=true&w=majority&appName=agendabarber'

/*
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifieldTopology', true)
*/

mongoose
    .connect(URI)
    .then(() => console.log('DB is Up!'))
    .catch(() => console.log(err))