import { useState, useEffect } from 'react';
import './index.css';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Explore = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [startIndex, setStartIndex] = useState(0); // Índice inicial do carrossel
  const cardsToShow = 4; // Quantidade de cards exibidos ao mesmo tempo

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
                  <h3 className="card-name">{product.name}</h3>
                  <p className="card-price">${product.price}</p>
                  <p className="card-description">{product.description}</p>
                  <button className="card-button">Adicionar</button>
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
