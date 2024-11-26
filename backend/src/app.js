const express = require('express');
const usersRouter = require('./routes/users')
const middlewareLogRequest = require('./middleware/logs')
const dbPoll = require('./config/database')

app = express();

app.use(middlewareLogRequest)

// app.use('/', (req, res) => {
    
// })

app.use(express.json())

app.use('/users',usersRouter)

app.listen(4000, () => {
    console.log(`server berhasil di running di port 4000`);
})