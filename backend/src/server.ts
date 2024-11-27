import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import productRoutes from './routes/product';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
