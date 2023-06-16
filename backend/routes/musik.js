import express from "express";
const musik = require("../controllers/users.js");
const router = express.Router();

router.get("/musik", musik);

export default router;
