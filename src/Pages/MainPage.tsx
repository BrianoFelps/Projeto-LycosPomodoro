import { useEffect } from 'react';
import './MainPage.css'

function MainPage () {
    useEffect(() =>{
        const addClass = () =>{
            const html = document.documentElement
            html.classList.add("MainPage")
        }
        addClass()
    }, [])

    return(
        <div id='Container'>
            
        </div>
    )
}

export default MainPage;