const UsersModel = require("../models/users");

// READ - GET
const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      massage: "GET all users succses",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      massage: "server error",
      serverMassage : error.message
    });
  }
};

// CREATE - POST
const createNewUser =  async (req, res) => {
  console.log(req.body);
  const {body} = req;
  if(!body.username || !body.email || !body.password) {
    return res.status(400).json({
      massage: "bad request",
      serverMassage : "username, email, password required"
      
    });
    }
  try {
    await UsersModel.creteNewUsr(body);
    res.json({
      message: "CREATE new users succses",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      massage: "server error",
      serverMassage : error.message
    });
  }
};

// UPDATE - PATCH
const updateUser = async (req, res) => {
  const { id } = req.params;
  const {body} = req;

  try {
    await UsersModel.updateUser(body, id);
    res.status(201).json({
      massage: "UPDATE user succses",
      data:{
        id: id,
        ...body
      }
    });
  } catch (error) {
    res.status(500).json({
      massage: "server error",
      serverMassage : error.message
    });
  }
  console.log("id :", id);
  
};

// DELETE
const deleteUser = async (req, res) => {
  const { id  } = req.params;
  try {
    await UsersModel.deleteUser(id);
    res.json({
      massage: "DELETE user succses",
      data: null
    });
  } catch (error) {
    res.status(500).json({
      massage: "server error",
      serverMassage : error.message
    });
  }
  
};
module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
