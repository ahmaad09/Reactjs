require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const usersRouter = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');
const dbPoll = require('./config/database');
const upload = require('./middleware/multer');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets',express.static('public/images'));
app.use('/users', usersRouter);
app.use('/upload', upload.single('image'),(req,res) => {
    res.json({
        massage: "upload file succses"
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
});
