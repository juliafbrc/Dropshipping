import express, { Request, Response } from 'express';
import Product from '../models/productModel';
const router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    // Verificando se o erro é uma instância de Error
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido' });
    }
  }
});

export default router;
