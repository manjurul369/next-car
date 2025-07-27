import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'next-car',
        })

        console.log("Database connected successfully:", connection.host, connection.name);

    }
    catch(error){
        console.error("Database connection failed:", error);
    }
}