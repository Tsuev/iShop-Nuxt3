import { Router } from "express";
import { getDevices, getOneDevice, addDevice, updateDevice, deleteDevice } from "../controller/DeviceController.js";

const router = Router()


router.get("/device", getDevices) // checkRoleMiddleware("USER")
router.get("/device/:id", getOneDevice) // checkRoleMiddleware("USER")
router.post("/device", addDevice) // checkRoleMiddleware("SELLER")
router.put("/device", updateDevice) // checkRoleMiddleware("SELLER")
router.delete("/device/:id", deleteDevice) // checkRoleMiddleware("SELLER") | checkRoleMiddleware("ADMIN")


export default router;
