const dbPoll = require('../config/database');

const getAllUsers = (req, res) => {
    const SQLQuery = "SELECT * FROM  users";
    return dbPoll.execute(SQLQuery);
}

const creteNewUsr = (body) => {
    const SQLQuery =   `INSERT INTO users (username, email, password) 
                        VALUES ('${body.username}', '${body.email}', '${body.password}')`; 
    return dbPoll.execute(SQLQuery);
}

const updateUser = (body, id) => {
    const SQLQuery =    `UPDATE users SET 
                        username = '${body.username}', 
                        email = '${body.email}', 
                        password = '${body.password}' 
                        WHERE id = ${id}`;
    return dbPoll.execute(SQLQuery);
}

const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM users WHERE id = ${id}`; 
    return dbPoll.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    creteNewUsr,
    updateUser,
    deleteUser,
}