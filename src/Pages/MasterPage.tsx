import { useEffect } from 'react';
import './MasterPage.css';
import LycosCompleteLogo from '../Components/LycosCompleteLogo';

export default function MasterPage (){
    useEffect(() =>{
         // Adiciona a classe ao elemento <html> quando o componente é montado
        document.documentElement.classList.add('MasterPage');

        // Remove a classe quando o componente é desmontado
        return () => {
        document.documentElement.classList.remove('MasterPage');
        };
    }, [])
    return(
        <div id='ContainerGeralMasterPage'>
            <div id='ContainerBgMasterPage'></div>
            <div id='hamburgermenu'>
                barra lateral aberta <br />
            </div>
            <header id='TopoMasterPage'>
                <div className='AlinhamentoBetween'>
                    <div id='logo'>
                        <LycosCompleteLogo></LycosCompleteLogo>
                    </div>
                    <div id='switch'>
                        <button onClick={() => {alert("aaaa")}}>aasddsad</button>
                    </div>
                </div>
            </header>
            <main>
                <div id='task'></div>
                <input type='text' id='contagem' value={'00:00'}></input>
                <button id='IniciarOuPausar' className='btn btn-outline-light'>aaaa</button>
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
    )
}