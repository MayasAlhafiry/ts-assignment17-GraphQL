import { Router } from "express";
import userService from "./user.service.js";
import { SuccessResponse } from "../../common/success.responce.js";
const router = Router();
router.post('/signup', async (req, res) => {
    const data = await userService.signup(req.body);
    SuccessResponse({ res, message: "User registered successfully", status: 201, data });
});
router.post('/login', async (req, res) => {
    const data = await userService.login(req.body);
    SuccessResponse({ res, message: "Login successful", status: 200, data });
});
router.get('/get-all-users', async (_req, res) => {
    const users = await userService.getAllUsers();
    SuccessResponse({ res, message: "All users", status: 200, data: users });
});
export default router;
