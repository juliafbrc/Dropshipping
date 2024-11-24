import { useState } from 'react';
import './index.css'

const Explore = () => {
  const cards = [
    { id: 1, title: "Descrição do item 1" },
    { id: 2, title: "Descrição do item 2" },
    { id: 3, title: "Descrição do item 3" },
    { id: 4, title: "Descrição do item 4" },
    { id: 5, title: "Descrição do item 5" },
    { id: 6, title: "Descrição do item 6" },
    { id: 7, title: "Descrição do item 7" },
    { id: 8, title: "Descrição do item 8" },
  ];

  const [startIndex, setStartIndex] = useState(0); // Índice inicial do carrossel
  const cardsToShow = 4; // Quantidade de cards exibidos ao mesmo tempo

  const handleNext = () => {
    // Avança apenas se ainda houver cards à frente
    if (startIndex + cardsToShow < cards.length) {
      setStartIndex(startIndex + cardsToShow);
    }
  };

  const handlePrev = () => {
    // Volta apenas se o índice não for menor que zero
    if (startIndex - cardsToShow >= 0) {
      setStartIndex(startIndex - cardsToShow);
    }
  };
  return (
    <>

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
                  {cards.slice(startIndex, startIndex + cardsToShow).map((card) => (
                    <div className="card" key={card.id}>
                      <div className="card-image"></div>
                      <p className="card-description">{card.title}</p>
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
         
    </>
  )
};

export default Explore;
