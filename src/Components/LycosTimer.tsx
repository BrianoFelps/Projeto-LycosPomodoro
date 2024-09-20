import "./LycosTimer.css"
// import EditClockIcon from "./EditClockIcon"
import { useEffect, useState } from "react";

export default function LycosTimer () {
    let duration = 1500;
    const [timeRemaining, setTimeRemaining] = useState<number>(duration);
    const [isActive, setIsActive] = useState<boolean>(false); // Estado para controlar a contagem
    
    useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null; // Declare o intervalo como nulo inicialmente

        if (isActive && timeRemaining > 0) {
            intervalId = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalId!);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000); // Executa a cada 1000 milissegundos (1 segundo)
        }

        return () => {
            if (intervalId) clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
        };
    }, [isActive, timeRemaining]); // Adiciona isActive e timeRemaining como dependências

    const handleStartPause = () => {
        setIsActive(prev => {
            const newActivestate = !prev;
            return newActivestate;
        });

    } // Alterna o estado de ativo para inativo e vice-versa

    const handlePhaseClick = (Phase: string) =>{
        if(Phase === 'Focus'){
            setIsActive(true)
            setTimeRemaining(1500)
        } else if(Phase === 'Break'){
            setIsActive(true)
            setTimeRemaining(300)
        } else if(Phase === 'Lbreak'){
            setIsActive(true)
            setTimeRemaining(900)
        }
    }

    const minutes = Math.floor(timeRemaining / 60);
    const SECONDS = timeRemaining % 60;

    const timeConverted = `${String(minutes).padStart(2, '0')}:${String(SECONDS).padStart(2, '0')}`

    // useEffect(() =>console.log(`timeRemaining: ${timeConverted}`), [timeRemaining])

    return(
        <div id='CountdownContainer' className="my-5 bg-success">

            <div id="PhaseMenu" className="w-100 d-flex align-items-center justify-content-center">
                <button onClick={() => handlePhaseClick('Focus')}>Focus</button> 

                <button onClick={() => handlePhaseClick('Break')}>Break</button> 

                {/* Tenho a ideia de desabilitar esse aqui enquanto  a 3a pausa não for alcançada (ou via edição nas configs, para definir o no. da pausa)*/}
                <button onClick={() => handlePhaseClick('Lbreak')}>Long break</button> 
            </div>

            <input 
            type='text' 
            id='Countdown' 
            className='text-center' 
            value={timeConverted}
            disabled={true}
            />
            
            {/* <EditClockIcon onClickFct={}/> */}

            <button onClick={handleStartPause} id='StartStopButton' className='btn btn-outline-light mt-3'>
                {isActive ? 'Pause' : 'Begin'}
            </button>

        </div>
    )
}