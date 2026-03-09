import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            console.error("❌ MONGODB_URI no encontrada en process.env");
            return;
        }
        console.log("🔌 Intentando conectar a:", uri.split('@')[1] ? `...@${uri.split('@')[1]}` : 'URI Malformada');
        await mongoose.connect(uri);
        console.log("✅ Conectado a MongoDB Atlas");
    } catch (err) {
        console.error("❌ Error al conectar a MongoDB:", err);
        process.exit(1);
    }
};

export default connectDB;
