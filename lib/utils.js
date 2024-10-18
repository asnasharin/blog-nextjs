import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("connected to db")
    } catch (error) {
        console.log(error);
    }
}