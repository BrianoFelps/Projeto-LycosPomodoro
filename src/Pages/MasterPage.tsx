import { useEffect, useState } from 'react';
import './MasterPage.css';
import LycosCompleteLogo from '../Components/LycosCompleteLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPen } from '@fortawesome/free-solid-svg-icons';
import LycosTimer from '../Components/LycosTimer';

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
                <header id='MasterPageHeader' className='mt-3 w-100'>
                    <div className='d-flex w-100 align-items-center justify-content-between container mx-auto px-3 p-sm-0'>
                        <div id='HamburgerButton'>
                            <button className='btn btn-outline-light px-3'>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                        <div id='Logo'>
                            <LycosCompleteLogo></LycosCompleteLogo>
                        </div>
                        <div id='FocusSwitch'>
                            <button onClick={() => {alert("aaaa")}}>
                                Switch
                            </button>
                        </div>
                    </div>
                </header>
                <div className='container d-flex flex-column h-100'>
                    <main className='w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
                        <div id='TaskContainer'>
                            <input type="text" id='Task' placeholder='Task name' />
                            {/*icons imposing some weirdness about centering the element, gotta solve it with lateral margin or positioning*/} 
                            <FontAwesomeIcon id='PencilIcon' icon={faPen} />
                        </div>

                        <LycosTimer/>
                    </main>
                </div>

                <aside>
                    spotify
                </aside>
                <article>
                    ...
                </article>
                <footer>
                    c Pomofocus all rights reserved.
                </footer>
                
            </div>
            
        </div>
    )
}