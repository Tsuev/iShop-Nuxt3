import bcrypt from "bcrypt";
import models from "../models/models.js";
import ApiError from "../handlers/ApiError.js";
import jwt from "jsonwebtoken";

const { User, Basket } = models;
const generateJwt = (id, phone, role, name) => {
    return jwt.sign(
        { id, phone, role, name },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "24h" }
    )
}


export const registration = async (req, res, next) => {
    const { phone, password, role, name } = req.body;
    if (!phone || !password || !name || password.length < 6) {
        return next(ApiError.badRequest('Некорректные данные'))
    }

    const candidate = await User.findOne({ where: { phone } });

    if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким телефоном уже сущеествует'));
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await User.create({ phone, role, name, password: hashPassword, })
    const basket = await Basket.create({ userId: user.id });

    const jwt = generateJwt(user.id, user.phone, user.role, user.name);

    res.json({
        token: jwt
    });
}

export const login = async (req, res, next) => {
    const { phone, password } = req.body;

    if(!phone || !password ) {
        return next(ApiError.internal("Некорректные данные"));
    }
 
    const user = await User.findOne({ where: { phone } });

    if (!user) {
        return next(ApiError.internal("Пользователь с такими данными не найден"));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
        return next(ApiError.internal("Указан неверный пароль"))
    }

    const jwt = generateJwt(user.id, user.phone, user.role, user.name);

    res.json({
        token: jwt
    });
}

export const check = (req, res) => {
    
    const jwt = generateJwt(req.user.id, req.user.phone, req.user.role, req.user.name);

    res.json({
        token: jwt
    });
} 


export const test = (req, res) => {
    
    

    res.json({
        mesag:"Только дял админа",
    });
} 