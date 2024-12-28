import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import router from "./routes/auth.route.js"
const app = express();

dotenv.config();
app.use(express.json())

const Port = process.env.PORT

app.use("/api/v1/route", router);
app.use("/api/v1/message", router);

app.listen(Port, () => {
    console.log(`Server Listining to Port:${Port}`)
    connectDB();
})