const express = require("express")
const router = express.Router();

// router
const {auth} = require("../middlewares/auth");
const { login , signUp } = require("../controllers/Auth");

// authentication routes
router.post("/login",login);
router.post("/signUp", signUp);


module.exports = router;