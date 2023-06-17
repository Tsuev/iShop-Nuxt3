import dotenv from "dotenv";
dotenv.config()

import express from "express";
import sequelize from "./db.js";

console.log(    process.env.DB_PASSWORD)

const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`server is working on  PORT ${PORT}`)
        });
    } catch (err) {
        console.log(err);
    }
}

start()

