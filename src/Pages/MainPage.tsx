import { useEffect } from 'react';
import './MainPage.css'

import tomate from '../assets/tomato.png'

import Avatar from '@mui/material/Avatar';

function MainPage () {
    useEffect(() =>{
        const addClass = () =>{
            const html = document.documentElement
            html.classList.add("MainPage")
        }
        addClass()
    }, [])

    return( 
    <>
    <div id='ContainerTopo'>
        <nav id='Topo' className='navbar navbar-expand-md d-flex justify-content-between align-items-center'>
            <div className='navbar-brand' id='brand'>
                <a href="" className='text-black'>
                    {/* Não posso esquecer de fazer a brand depois */}
                    <img src={tomate} alt="Logomarca de x" title='Logomarca da Lycos timer' width={40}/> 
                    <b className='fs-3 px-1'>Lycos timer</b> 
                </a>
            </div>
            <div id='UserButton' onClick={() => {}}>
                <Avatar></Avatar>
            </div>
        </nav>
    </div>
    <main id='ContainerPrincipal' className='mt-5'>
        {/* Fazer um button para o modo ultra foco depois */}
        <div className='container'>
            <div className='row'>
                <div id='TaskName' className='col-12'>
                    <input type="text" className='form-control form-control-lg' placeholder=' '/>
                    <span>Nome da tarefa a ser feita</span>
                </div>
            </div>
            <div className='row mt-2 card'>
                <div id='PomodoroTimer' className='col-12'></div>
                <svg/>
            </div>
            
            <div id='TaskList'></div>
        </div>
    </main>
    <article></article>
    <footer></footer>
    </>
    )
}

export default MainPage;