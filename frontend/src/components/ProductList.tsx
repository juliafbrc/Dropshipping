import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Definindo o tipo do produto
interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Estado para armazenar os produtos
  const [loading, setLoading] = useState<boolean>(true); // Estado para saber se os produtos estão carregando
  const [error, setError] = useState<string>(''); // Estado para armazenar mensagens de erro

  // Função para buscar os produtos do back-end
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // Endereço da API do back-end
        setProducts(response.data); // Atualiza o estado com os produtos recebidos
        setLoading(false); // Atualiza o estado para indicar que a requisição terminou
      } catch (err) {
        setError('Erro ao carregar os produtos');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Exibindo a lista de produtos
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Catálogo de Produtos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.name} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>R$ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
