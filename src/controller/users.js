const UsersModel = require("../models/users");

//? GET
const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.status(200).json({
      status: 200,
      message: "GET users Success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server ERROR",
      serverMessage: error,
    });
  }
};

//? POST
const createNewUser = async (req, res) => {
  const { body } = req;

  if (!body.name || !body.email || !body.address) {
    return res.status(400).json({
      status: 400,
      message: "Mengirimkan data yang tidak sesuai",
    });
  }
  try {
    await UsersModel.createNewsUser(body);
    res.status(201).json({
      status: 201,
      message: "CRATE users Success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server ERROR",
      serverMessage: error,
    });
  }
};

//? PATCH
const updateUser = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    await UsersModel.updateUser(body, id);
    res.status(200).json({
      status: 200,
      message: "CRATE users Success",
      data: {
        id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server ERROR",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteUser(id);
    res.status(200).json({
      status: 200,
      message: "DELETE users Success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server ERROR",
      serverMessage: error,
    });
  }
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
