const dbPoll = require('../config/database');

const getAllUsers = (req, res) => {
    const SQLQuery = "SELECT * FROM  users";
    return dbPoll.execute(SQLQuery);
}

module.exports = {
    getAllUsers
}