import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE );
        console.log("Database connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDb;
