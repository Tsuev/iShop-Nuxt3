import models from "../models/models.js";
import {v4 as uuidv4} from "uuid"
import path from "path"
import ApiError from "../handlers/ApiError.js";
import {fileURLToPath} from 'url';
const {Device} = models

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getDevices = async (req, res, next) => {
    try {
        const devices = await Device.findAll()
        return res.json(devices)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

export const getOneDevice = async (req, res) => {
    try {
        const {id} = req.params
        const device = await Device.findOne({ where: { id } })
        return res.json(device)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

export const addDevice = async (req, res, next) => {
    try {
        const {name, desc, price, version, model, color, memory, condition, batter_condition} = req.body;
        const {img} = req.files;
        let file = uuidv4() + ".jpg"
        img.mv(path.resolve(__dirname, "..", "static", file))

        const device = await Device.create({
            name,
            desc,
            price, //int 0
            img: file,
            version,
            model,
            color,
            memory,
            condition,
            batter_condition
        })

        return res.json(device)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

export const updateDevice = async (req, res, next) => {
    try {
        const device = req.body
        if(!device.id) {
            next(ApiError.badRequest("Невозможно идентифицировать устройство"))
        }
        const updatedDevice = await Device.update(device, { where: { id: device.id } })
        return res.json(updatedDevice)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }

}

export const deleteDevice = async (req, res, next) => {
    try {
        const {id} = req.params
        if(!id) {
            next(ApiError.badRequest("Невозможно идентифицировать устройство"))
        }
        const device = await Device.destroy({ where: { id: id } })
        return res.json(device)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}