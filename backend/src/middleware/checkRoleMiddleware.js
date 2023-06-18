

import jwt from "jsonwebtoken";

export default function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }

        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Пользователь не авторизован' });

            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = decoded;

            if(decoded.role !== role) {
                return res.status(403).json({ message: 'У вас нет досупа' });
            }
            next();
        } catch (e) {
            res.status(401).json({ message: 'Пользователь не авторизован' });
        }
    };
}