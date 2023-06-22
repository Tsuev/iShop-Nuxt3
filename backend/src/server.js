import dotenv from "dotenv";
dotenv.config()

import express from "express";
import sequelize from "./db.js";
import models from "./models/models.js";
import cors from "cors";
import userRouter from "./routers/UserRouter.js";
import adminRouter from "./routers/AdminRouter.js";
import errorHandler from "./middleware/ErrorHandlingMiddlware.js";


const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",userRouter)
app.use("/api", adminRouter)


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

