import { Router } from "express";
import { registration, login, check, test} from "../controller/UserController.js";
import authMiddlware from "../middleware/authMiddlware.js";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";

const router = Router();

router.post('/registration', registration);
router.post('/login', login);
router.post('/auth', authMiddlware, check);
router.get('/test', checkRoleMiddleware('ADMIN'), test);


export default router;