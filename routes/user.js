const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

const { createUserValidator } = require("../validators/user");
const validateInput = require("../validators/validateInput");

const verifyToken = require("../middlewares/auth");
const checkPermission = require("../middlewares/checkPermission");

console.log("checkPermission =", checkPermission);

// Create User
router.post(
    "/create",
    createUserValidator,
    validateInput,
    verifyToken,
    checkPermission,
    userController.createUser
);

// Login
router.post(
    "/login",
    userController.login
);

// Get All Users
router.get(
    "/all",
    verifyToken,
    checkPermission,
    userController.getAllUsers
);

// Get User By ID
router.get(
    "/:id",
    verifyToken,
    checkPermission,
    userController.getUserById
);

// Update User
router.put(
    "/update/:id",
    verifyToken,
    checkPermission,
    userController.updateUser
);

// Delete User
router.delete(
    "/delete/:id",
    verifyToken,
    checkPermission,
    userController.deleteUser
);

module.exports = router;