const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        const time = new Date().getTime();
        const originalname = file.originalname
        console.log(file);
        // const extension = path.extname(file.originalname);
        cb(null, `${time}-${originalname}`);
    }
})

const upload = multer({ storage: storage });

module.exports = upload;