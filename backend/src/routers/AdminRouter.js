import { Router } from "express";
import { getSellers, acceptSeller } from "../controller/AdminController.js";

const router = Router();


router.get('/get-sellers', getSellers);
router.post('/accept-seller', acceptSeller);


export default router;