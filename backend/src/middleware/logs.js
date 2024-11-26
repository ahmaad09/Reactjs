const { patch } = require("../routes/users");

const logRequest = (req, res, next) => {
    console.log(`log reques `,req.path);
    next();
}

module.exports = logRequest;