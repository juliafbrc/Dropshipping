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
        imageUrl: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        name: 'Camiseta Básica', 
        description: 'Camiseta de algodão com corte unissex.', 
        price: 50, 
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        name: 'Relógio Clássico', 
        description: 'Relógio analógico com design elegante.', 
        price: 350, 
        imageUrl: 'https://images.unsplash.com/photo-1669621952687-8ba483e11a9b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        name: 'Bolsa Feminina', 
        description: 'Bolsa de couro sintético com amplo espaço interno.', 
        price: 120, 
        imageUrl: 'https://plus.unsplash.com/premium_photo-1664392214882-7cecd0a67ccd?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        name: 'Fone de Ouvido', 
        description: 'Fone de ouvido Bluetooth com cancelamento de ruído.', 
        price: 299, 
        imageUrl: 'https://images.unsplash.com/photo-1520005258079-0b2cfc298a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        name: 'Jaqueta Jeans', 
        description: 'Jaqueta unissex de alta qualidade.', 
        price: 180, 
        imageUrl: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        name: 'Mochila Escolar', 
        description: 'Mochila resistente com vários compartimentos.', 
        price: 100, 
        imageUrl: 'https://images.unsplash.com/photo-1490427712608-588e68359dbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        name: 'Óculos de Sol', 
        description: 'Óculos com proteção UV e armação leve.', 
        price: 80, 
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        name: 'Mouse Gamer', 
        description: 'Mouse com iluminação RGB e alta precisão.', 
        price: 150, 
        imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        name: 'Smartphone', 
        description: 'Smartphone com câmera de alta qualidade.', 
        price: 1500, 
        imageUrl: 'https://images.unsplash.com/photo-1600087626014-e652e18bbff2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
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