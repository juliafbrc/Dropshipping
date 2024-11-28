import React, { useState, useEffect } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate(); 
  const handleButtonClick = () => {
    navigate("/carrinho");
  };

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
          
          <span className="navbar-title">LuxDrop</span>
        </div>
        <div className="navbar-right">
          <div className="icon-rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
          <rect width="50" height="50" rx="30" fill="#D9D9D9"/>
          <path d="M14 32C14 29.2386 16.2386 27 19 27H47C49.7614 27 52 29.2386 52 32V36C52 44.2843 45.2843 51 37 51H29C20.7157 51 14 44.2843 14 36V32Z" fill="#891D1A"/>
          <rect x="22.5" y="15.5" width="20" height="20" rx="7.5" stroke="#891D1A" stroke-width="5"/>
          </svg>
          </div>
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
                  <h3 className="card-name">{product.name}</h3>
                  <p className="card-price">${product.price}</p>
                  <p className="card-description">{product.description}</p>
                  <button className="card-button" onClick={handleButtonClick} >Adicionar</button>
                </div>
                
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
