const router= require("express").Router();
const {signUp}= require("../controllers/userControllers");

router.post("/signUp", signUp);