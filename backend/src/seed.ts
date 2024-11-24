import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel';

dotenv.config();

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('MongoDB conectado');
  })
  .catch((err) => {
    console.error(`Erro ao conectar ao MongoDB: ${err.message}`);
  });
const seedProducts = async () => {
  try {
    const products = [
      { 
        name: 'Tênis Esportivo', 
        description: 'Tênis confortável ideal para corrida e academia.', 
        price: 250, 
        imageUrl: 'https://images.unsplash.com/photo-1516747773446-609be9bcbe7b?crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' 
      },
      { 
        name: 'Camiseta Básica', 
        description: 'Camiseta de algodão com corte unissex.', 
        price: 50, 
        imageUrl: 'https://images.unsplash.com/photo-1532318065232-34d7a2c32c09?crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' 
      },
      { 
        name: 'Relógio Clássico', 
        description: 'Relógio analógico com design elegante.', 
        price: 350, 
        imageUrl: 'https://images.unsplash.com/photo-1542204637-e67bc6c3ad43?crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' 
      },
      { 
        name: 'Bolsa Feminina', 
        description: 'Bolsa de couro sintético com amplo espaço interno.', 
        price: 120, 
        imageUrl: 'https://images.unsplash.com/photo-1553003658-67bf3ef4ffaf?crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' 
      },
      { 
        name: 'Fone de Ouvido', 
        description: 'Fone de ouvido Bluetooth com cancelamento de ruído.', 
        price: 299, 
        imageUrl: 'https://images.unsplash.com/photo-1593642531955-b62e4e04c900?crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' 
      },
      { 
        name: 'Jaqueta Jeans', 
        description: 'Jaqueta unissex de alta qualidade.', 
        price: 180, 
        imageUrl: 'https://images.unsplash.com/photo-1610715907415-0a43d96441c3?crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' 
      },
      { 
        name: 'Mochila Escolar', 
        description: 'Mochila resistente com vários compartimentos.', 
        price: 100, 
        imageUrl: 'https://images.unsplash.com/photo-1529921879218-b2eabb6a14c0?crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' 
      },
      { 
        name: 'Óculos de Sol', 
        description: 'Óculos com proteção UV e armação leve.', 
        price: 80, 
        imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' 
      },
      { 
        name: 'Mouse Gamer', 
        description: 'Mouse com iluminação RGB e alta precisão.', 
        price: 150, 
        imageUrl: 'https://images.unsplash.com/photo-1602585452411-85a1ee66d4f3?crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' 
      },
      { 
        name: 'Smartphone', 
        description: 'Smartphone com câmera de alta qualidade.', 
        price: 1500, 
        imageUrl: 'https://images.unsplash.com/photo-1569940053174-465acc6fefa5?crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' 
      },
    ];

    await Product.deleteMany();
    console.log('Coleção de produtos limpa.');

    await Product.insertMany(products);
    console.log('Produtos inseridos com sucesso!');

    mongoose.connection.close();
  } catch (err) {
    console.error('Erro ao popular o banco:', err);
    mongoose.connection.close();
  }
};

seedProducts();