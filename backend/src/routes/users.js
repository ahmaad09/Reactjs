const express = require('express');
const usersController = require('../controller/users');


const router = express.Router();


// CREATE
router.post('/', usersController.createNewUser);

// GET
router.get('/',usersController.getAllUsers );

// UPDATE - PATCH
router.patch('/:id', usersController.updateUser);

// DELETE
router.delete('/:id', usersController.deleteUser);
module.exports = router;