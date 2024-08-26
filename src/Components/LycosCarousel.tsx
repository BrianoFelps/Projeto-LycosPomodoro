import './LycosCarousel.css'

import Carousel from 'react-bootstrap/Carousel';

interface props{
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export default function LycosCarousel(props: props){
    return(
        <Carousel>
            <Carousel.Item interval={900000}>
              <div className="d-flex justify-content-center align-items-center text-center">
                  <h1 className='display-1 fw-bolder'>Atualize seu potencial!</h1>
              </div>
              <Carousel.Caption>
                <h3 className='lead'>Lycos pomotimer é um site que fomentará seu foco com o método pomodoro! Realize seus objetivos em potencial, e alcance a forma mais sublime de si. Bons estudos!</h3>
                <div className='ContainerBotoes'>
                  <button className='btn btn-outline-light' onClick={props.onRegisterClick}>Cadastre-se</button>
                  <button className='btn btn-success loginbtn' onClick={props.onLoginClick}>Fazer login</button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={6000}>
              <div className="d-flex justify-content-center align-items-center text-center">
                  <h1 className='display-1 fw-bolder'>Não subestime o valor de seu tempo</h1>
              </div>
              <Carousel.Caption>
                <h3 className='lead lead2'>
                  Dez minutos de puro foco diariamente são melhores que várias horas em inconstância! No final do ano seriam acumulados 3650 minutos no seu repertório de conhecimento. Vai perder as sessões de foco?
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}