import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  imageUrl: string; // Apenas a URL da imagem
}

const Home = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleExploreClick = () => {
    navigate("/explore"); // Direciona para a página "/explore"
  };

  const [products, setProducts] = useState<Product[]>([]);

  // Função para buscar as imagens da API
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
    fetchProducts();
  }, []);

  return (
    <div className="body-home">
      <div className="conteudo">
        <div className="infos">
          <div id="home-paragrafo1">
            <p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do eiusmod tempor incididunt ut <br />
              labore et dolore magna aliqua.
            </p>
          </div>
  
          <div id="home-titulo">Lorem Ipsum</div>
  
          <div>
            <button id="home-botao-explorar" onClick={handleExploreClick}>
              EXPLORAR
            </button>
          </div>
        </div>
  
        <div className="cards">
          <div className="outer">
          {products.slice(0, 5).map((image, index) => (
              <div className="card" id={`card${index + 1}`} key={image._id}>
                <div className="img">
                  <img src={image.imageUrl} alt={`Imagem ${index + 1}`} />
                </div>
                <div className="stars">
                  <span className="op-star"></span>
                  <span className="op-star"></span>
                  <span className="op-star"></span>
                  <span className="op-star"></span>
                  <span className="op-star"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Home;
