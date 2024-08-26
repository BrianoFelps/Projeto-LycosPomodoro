import './InitialPage.css';
import LycosCarousel from '../Components/LycosCarousel';
import LycosCompleteLogo from '../Components/LycosCompleteLogo';
import { useNavigate } from 'react-router-dom';

function FeedPage() {

  const navigate = useNavigate();

  const LoginNavigate = () =>{
    // Devo mudar isso depois, por óbvio
    navigate('/Master');
  }

  const RegisterNavigate = () =>{
    // Devo mudar isso depois, por óbvio
    navigate('/Register');
  }

  return (
    <>
      <div id='ContainerBg'></div>
      <div id='ContainerBg2'></div>
      <header id='HeroBannerContainer'>
        <nav id='ContainerTopoLogo'>
          <LycosCompleteLogo></LycosCompleteLogo>
        </nav>
        <main id='CallToActionBanner'>
          <LycosCarousel onLoginClick={LoginNavigate} onRegisterClick={RegisterNavigate}/>
        </main>
      </header>
    </>
  )
}

export default FeedPage;
