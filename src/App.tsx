import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat'
import Carousel from 'react-bootstrap/Carousel';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LycosCompleteLogo from './assets/Svg/LycosCompleteLogo';

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter> */}
      <div id='ContainerBg'></div>
      <div id='ContainerBg2'></div>
      <div id='HeroBannerContainer'>
        <div id='ContainerTopoLogo'>
          <LycosCompleteLogo></LycosCompleteLogo>
        </div>
        <div id='CallToActionBanner'>
          <Carousel>
            <Carousel.Item interval={9000}>
              <div className="d-flex justify-content-center align-items-center text-center">
                  <h1 className='display-1 fw-bolder'>Atualize seu potencial!</h1>
              </div>
              <Carousel.Caption>
                <h3 className='lead'>Lycos pomotimer é um site que fomentará seu foco com o método pomodoro! Realize seus objetivos em potencial, e alcance a forma mais sublime de si. Bons estudos!</h3>
                <div className='ContainerBotoes'>
                  <button className='btn btn-outline-light'>Cadastrar</button>
                  <button className='btn btn-success loginbtn'>Entrar</button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={6000}>
              <div className="d-flex justify-content-center align-items-center text-center">
                  <h1 className='display-1  fw-bolder'>Não subestime o valor de seu tempo</h1>
              </div>
              <Carousel.Caption>
                <h3 className='lead'>
                  10 minutos puro foco diariamente é melhor que várias horas em inconstância! No final do ano seriam acumulados 3650 minutos no seu repertório de conhecimento. Vai perder as sessões de foco?
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div>fajdslkfjalsdkjflkasdjflkasdjlkfasdjlkfasdlkjfhasldjkfhklajd</div>
    </>
  )
}

export default App
