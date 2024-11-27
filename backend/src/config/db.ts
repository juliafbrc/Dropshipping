import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error('A variável de ambiente MONGO_URI não está definida!');
    }
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (err: any) {
    console.error(`Erro ao conectar ao MongoDB: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
