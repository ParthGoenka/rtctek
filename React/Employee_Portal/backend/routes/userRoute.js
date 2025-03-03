const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signup",userController.signup);
router.post("/login",userController.login);
router.get("/dashboard/:empid",userController.user);
router.get("/users/:dept",userController.users);

module.exports = router;