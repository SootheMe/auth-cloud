import express from "express";
import { Register, getUsers, Login, Logout, getUserName } from "../controllers/users.js";
import { verifyToken } from "../middleware/verifytoken.js";
import { refreshToken } from "../controllers/refreshtoken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/username', verifyToken, getUserName);
router.get('/token', refreshToken);
router.delete('/logout', Logout)

export default router;
