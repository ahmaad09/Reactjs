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
    res.json({
      massage: "server error",
    });
  }
};

// CREATE - POST
const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new users succses",
    data: req.body,
  });
};

// UPDATE - PATCH
const updateUser = (req, res) => {
  const { idUsers } = req.params;
  console.log("idUsers :", idUsers);
  res.json({
    massage: "UPDATE user succses",
    data: req.body,
  });
};

// DELETE
const deleteUser = (req, res) => {
  const { idUsers } = req.params;
  res.json({
    massage: "DELETE user succses",
    data: {
      id: idUsers,
      name: "John Doe",
      email: "jdoe@com",
      address: "Jakarta",
    },
  });
};
module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
