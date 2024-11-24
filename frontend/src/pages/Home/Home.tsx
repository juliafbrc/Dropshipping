import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleExploreClick = () => {
    navigate("/explore"); // Direciona para a página "/explore"
  };

  return (

    <div className="body-home"> 


    <div className="conteudo">
      <div className='infos'> 
        <div id='home-login'> Login </div>

        <div id='home-paragrafo1'>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br/>
            adipiscing elit, sed do eiusmod tempor incididunt ut <br/>
             labore et dolore magna aliqua.
          </p>
        </div>

        <div id='home-titulo'> Lorem Ipsum </div>

        <div>
          <button id='home-botao-explorar' onClick={handleExploreClick}> EXPLORAR </button>
        </div>
      </div>

      <div className="cards">
        <div className="outer">
              
          <div className="card" id='card1'>
                <div className="img"> <img src='' alt=''></img> </div>
              <div className="starts">
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
              </div>
          </div>

          <div className="card" id='card2'>
                <div className="img"> <img src='' alt=''></img> </div>
              <div className="starts">
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
              </div>
          </div>

          <div className="card" id='card3'>
                <div className="img"> <img src='' alt=''></img> </div>
              <div className="starts">
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
              </div>
          </div>

          <div className="card" id='card4'>
                <div className="img"> <img src='' alt=''></img> </div>
              <div className="starts">
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
              </div>
          </div>

          <div className="card" id='card5'>
                <div className="img"> <img src='' alt=''></img> </div>
              <div className="starts">
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
                <span className='op-star'> </span>
              </div>
          </div>

        </div>
      </div>
    </div>
    </div>

  );
};

export default Home;
