import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.Db_url).then(() => {
        console.log("Db connect success")
    }).catch(() => {
        console.log("Not connected to Database ")
    })
}

