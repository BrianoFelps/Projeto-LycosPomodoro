import { useEffect } from 'react';
import './MasterPage.css';
import LycosCompleteLogo from '../Components/LycosCompleteLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function MasterPage (){
    useEffect(() =>{
         // Adiciona a classe ao elemento <html> quando o componente é montado
        document.documentElement.classList.add('MasterPage');
        // document.documentElement.classList.add('OpenedSideBar');

        // Remove a classe quando o componente é desmontado
        return () => {
        document.documentElement.classList.remove('MasterPage');
        // document.documentElement.classList.remove('OpenedSideBar');
        };
    }, [])
    return(
        <div id='MajorContainerMP' className='d-flex'>        
            <div id='SideBar'>
                barra lateral aberta <br />
            </div>
            <div id='MediumContainerMP'>
                <div id='BgContainerMasterPage'></div>
                <header id='MasterPageHeader' className='mt-2'>
                    <div className='d-flex w-100 align-items-center justify-content-between'>
                        <div id='HamburgerButton' className='ms-4'>
                            <button className='btn btn-outline-light px-3'>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                        <div id='Logo'>
                            <LycosCompleteLogo></LycosCompleteLogo>
                        </div>
                        <div id='Switch' className='me-4'>
                            <button onClick={() => {alert("aaaa")}}>
                                aasddsad
                            </button>
                        </div>
                    </div>
                </header>
                <main>
                    <div id='task'></div>
                    <input type='text' id='Countdown' value={'00:00'}></input>
                    <button id='StartStopButton' className='btn btn-outline-light'>
                        aaaa
                    </button>
                </main>
                <aside>
                    spotify
                </aside>
                <article>
                    ...
                </article>
                <footer>
                    Pomofocus todos os direitos reservados
                </footer>
            </div>
        </div>
    )
}