import { Router } from "express";
import { registration, login, logout} from "../controller/UserController.js";
const router = Router();

router.post('/registration', registration);
router.post('/login', login);
router.post('/logout', logout);


export default router;