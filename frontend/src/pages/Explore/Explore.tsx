import React, { useState, useEffect } from 'react';
import './index.css';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Explore = () => {
  const [products, setProducts] = useState<Product[]>([]); // Estado para armazenar os produtos
  const [startIndex, setStartIndex] = useState(0); // Índice inicial do carrossel
  const cardsToShow = 4; // Quantidade de cards exibidos ao mesmo tempo

  // Função para buscar produtos da API
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products'); // URL da sua API
      const data = await response.json();
      setProducts(data); // Atualiza o estado com os produtos
      console.log(products); //
      console.log(data); //
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Chama a função quando o componente é montado
  }, []);

  // Funções para navegação no carrossel
  const handleNext = () => {
    if (startIndex + cardsToShow < products.length) {
      setStartIndex(startIndex + cardsToShow);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsToShow >= 0) {
      setStartIndex(startIndex - cardsToShow);
    }
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="user-avatar"></div>
          <span className="navbar-title">LOREM IPSUM</span>
        </div>
        <div className="navbar-right">
          <input type="text" className="search-bar" placeholder="Pesquisar..." />
          <div className="icon-rounded"></div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="carousel-section">
        <h2>Catálogo</h2>
        <div className="carousel">
          <button className="carousel-button prev" onClick={handlePrev}>
            &#8592;
          </button>
          
          <div className="carousel-track">
            {products.slice(startIndex, startIndex + cardsToShow).map((product) => (
              <div className="card" key={product._id}>
                <div className="card-image">
                  <img className="cardimage" src={product.imageUrl} alt={product.name} />
                </div>
                <p className="card-description">{product.name}</p>
                <p className="card-price">${product.price}</p>
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>

      {/* Orders Section */}
      <div className="orders-section">
        <h2>Pedidos</h2>
        <textarea
          className="orders-textarea"
          placeholder="Insira seus pedidos aqui..."
        ></textarea>
      </div>
    </div>
  );
};

export default Explore;
