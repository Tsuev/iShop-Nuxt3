import dotenv from "dotenv";
dotenv.config()

import express from "express";
import sequelize from "./db.js";
import models from "./models/models.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import userRouter from "./routers/UserRouter.js";
import adminRouter from "./routers/AdminRouter.js";
import deviceRouter from "./routers/DeviceRouter.js";
import errorHandler from "./middleware/ErrorHandlingMiddlware.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api",userRouter)
app.use("/api", adminRouter)
app.use("/api", deviceRouter)

app.use(errorHandler);

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

