import './InitialPage.css'

import tomate from '../assets/tomato.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';

function App() {

  return (
    <>
    <div id='Container' className='container-fluid'>

      <div id='EspacoBg'>
      </div>

      <nav id='TopNavBar' className='navbar navbar-expand-md navbar-dark fixed-top col-12'>
        <div id='ContainerInteriorTopNB'>
          <a href="" id='brand' className='navbar-brand'>
            <img src={tomate} alt="Logomarca de x" title='Logomarca de x' width={40}/> 
            <b className='fs-3 px-1'>Lycos timer</b>
          </a>
          <ul className='navbar-nav d-flex justify-content-end flex-row'>
            <li className='nav-item btn btn-danger mx-2 col-5 col-md-3 col-lg-2'>
              <a className='nav-link active fw-bold p-0' href=''>Cadastro</a>
            </li>
            <li className='nav-item btn btn-success col-5 col-md-3 col-lg-2'>
              <a className='nav-link active fw-bold p-0' href=''>Login</a>
            </li>
          </ul>
        </div>
      </nav>

      <section id='FraseDeEfeito'>
          <div className='row'>
            <div className='col-sm-12'>
              <h1 className='display-1 text-light fw-bolder'>+ foco, + foco, + foco</h1>
              <p className='lead'>coloca um vídeo nesse espaço, depois é bom modificá-lo para comportar tanto o vídeo como uma frase de efeito, pode incluir até um botão</p>
            </div>
          </div>
        </section>
      
      <div id='EspacoBg2'>
        <div className='titulo'>
          <h2 className='fw-bold'>Estimule seu foco novamente!</h2>
        </div>
      </div>

      <main className="full-width-element row borderbottom">
        <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat, metus ac condimentum venenatis, nibh ex facilisis libero, id luctus odio sapien dapibus lacus. Sed tempor a risus nec finibus. Donec quam orci, convallis id gravida vel, sollicitudin ut orci. Proin ut dolor a mauris eleifend viverra vitae non dui. Curabitur in posuere lacus. Vivamus vitae rutrum ligula. Proin nec lorem ante. Duis in dolor et lacus porttitor fermentum et eget lorem. Maecenas ornare non diam eget sodales. Sed elementum volutpat imperdiet. alsdhjf  jkl ashjfashdjk hfhjkasd hfhjkahsdhjkfasdjkf hksda hksd jka  a a a ajkdak dljkf jkds jkdsjk jkdsjk jkdsjk jkdsjk jkdsjk jkdsjk jkdsjk jkdsjk jkdsjk jkdsjk.
        {/* Reescreva alguns dos textos de https://www.amazon.com.br/T%C3%A9cnica-Pomodoro-Francesco-Cirillo-ebook/dp/B07SXB888D e põe aqui, em incremento ao próprio */}
        </article>
        <article className='d-none d-sm-block'>

        Vivamus mollis convallis eleifend. Aenean fermentum dapibus dolor, ac mattis eros congue ut. Sed vitae ligula vitae felis porta porta hendrerit ut urna. Suspendisse potenti. Ut pretium quam a diam mattis rhoncus. Ut tincidunt neque eget tortor rhoncus venenatis. Integer et ante fringilla, commodo nunc vel, sagittis enim.
        
        </article>
      </main>

      <footer className='w-100 mt-5' id='Footer'>
        <div className='p-3 row bordertop text-white' id='BgFooter'>
          <div className='col-12 socialm justify-content-between align-items-center d-flex'>
            <div className='col-7 col-md-9' id='TitleFooter'>
                Conecte-se conosco nas redes sociais:
            </div>
            <div id='SocialMLinks' className='col-5 col-md-3 col-lg-2 col-xg-1 d-flex justify-content-around align-items-center'>
              <a href="">
                <FontAwesomeIcon icon={faSquareYoutube} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
            </div>
          </div>
          <div className='my-2 sep'></div>
          <div className='col-12'>
            Contatos: (xx) xxxxx-xxxx / email@email.com
          </div>
          {/*<div className='col-4'>
            Links
            <br /> 
            fasdfsdfsda
          </div>
           <div className='col-4'>
            Contato
            <br /> 
            fasdfsdfsda
          </div>
          <div className='col-4'>
            Contato
            <br /> 
            fasdfsdfsda
          </div> */}
        </div>
        <div className='row p-2 d-flex align-items-center justify-content-center text-white' id='Copyright'>
          &copy; Copyright 2024 - Lycos Timer. Todos os direitos reservados
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
