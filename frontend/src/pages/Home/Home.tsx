import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  imageUrl: string;
}

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore");
  };

  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products'); 
      const data = await response.json();
      setProducts(data);
      console.log(products);
      console.log(data);
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
                <img src={image.imageUrl} className="img" alt={`Imagem ${index + 1}`} />
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
