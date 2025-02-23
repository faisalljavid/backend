import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const conncectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${conncectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MONGODB conncection FAILED ${error}`);
        process.exit(1);
    }
}

export default connectDB;