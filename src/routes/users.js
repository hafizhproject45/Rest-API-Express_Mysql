const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controller/users");

//? CREATE - POST
router.post("/", createNewUser);

//? READ - GET
router.get("/", getAllUsers);

//? UPDATE - PATCH
router.patch("/:id", updateUser);

//? DELETE - DELETE
router.delete("/:id", deleteUser);

module.exports = router;
