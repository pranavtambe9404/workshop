const express = require("express");

const router = express.Router();

const { createPermission } = require("../controllers/permission");

router.post("/create", createPermission);

module.exports = router;