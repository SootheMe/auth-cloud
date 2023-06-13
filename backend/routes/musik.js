import express from "express";
const musik = require("../controllers/users.js");
const router = express.Router();

router.post('/musik', musik);

export default router;