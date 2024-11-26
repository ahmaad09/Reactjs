const express = require('express');
const usersController = require('../controller/users');


const router = express.Router();


// CREATE
router.post('/', usersController.createNewUser);

// GET
router.get('/',usersController.getAllUsers );

// UPDATE - PATCH
router.patch('/:idUsers', usersController.updateUser);

// DELETE
router.delete('/:idUsers', usersController.deleteUser);
module.exports = router;