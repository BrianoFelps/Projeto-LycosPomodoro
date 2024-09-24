import "./LycosTimer.css"
// import EditClockIcon from "./EditClockIcon"
import { useEffect, useState } from "react";

export default function LycosTimer () {
    const [duration, setDuration] = useState<number>(1500);
    const [timeRemaining, setTimeRemaining] = useState<number>(duration);
    const [isActive, setIsActive] = useState<boolean>(false); // Estado para controlar a contagem
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [focusCount, setFocusCount] = useState<number>(0); // Estado para contar quantas vezes o botão recebeu foco

    useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null; // Declare o intervalo como nulo inicialmente

        if (isActive && timeRemaining > 0) {
            intervalId = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalId!); //O ponto de exclamação garante que o valor não seja duplo, tirando a possibilidade de ser nulo

                        // Passar para o próximo estado de contagem com base no ativo
                        if (activeButton === 'focus' && focusCount === 2||activeButton === 'focus' && focusCount === 5){
                            handlePhaseClick('Lbreak', 'lBreak')
                        } else if (activeButton === 'focus') { 
                            handlePhaseClick('Break', 'break');
                        } else if (activeButton === 'break'){
                            handlePhaseClick('Focus', 'focus')
                        } 
                        
                        setFocusCount(focusCount + 1)

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

    useEffect(() =>{
        setActiveButton('focus')
    }, [])

    useEffect(() =>{
        console.log(`Contagem: ${focusCount}`)
    }, [focusCount])

    const handleStartPause = () => {
        setIsActive(prev => {
            const newActivestate = !prev;
            return newActivestate;
        });

    } // Alterna o estado de ativo para inativo e vice-versa

    const handlePhaseClick = (Phase: string, buttonId: string) =>{
        if(Phase === 'Focus'){
            
            setIsActive(true)
            setTimeRemaining(1500)
            setActiveButton(buttonId);

        } else if(Phase === 'Break'){

            setTimeRemaining(305)
            setActiveButton(buttonId);

        } else if(Phase === 'Lbreak'){

            setTimeRemaining(900)
            setActiveButton(buttonId);

        }
    }

    const minutes = Math.floor(timeRemaining / 60);
    const SECONDS = timeRemaining % 60;

    const timeConverted = `${String(minutes).padStart(2, '0')}:${String(SECONDS).padStart(2, '0')}`

    // useEffect(() =>console.log(`timeRemaining: ${timeConverted}`), [timeRemaining])

    return(
        <div id='CountdownContainer' className="my-5">

            <div id="PhaseMenu" className="col-11 col-sm-8 col-md-6 col-lg-4 d-flex align-items-center justify-content-evenly">
                <button onClick={() => handlePhaseClick('Focus', 'focus')} id="focus" className={activeButton === 'focus' ? "active" : ''}>Focus {/* Poderia fazer um esquema, onde o texto seria
                mudado para um ícone de retry, para reiniciar o contador, quando já ativado*/}</button> 

                <button onClick={() => handlePhaseClick('Break', 'break')} id="break" className={activeButton === 'break' ? "active" : ''}>Break</button> 

                {/* Tenho a ideia de desabilitar esse aqui enquanto  a 3a pausa não for alcançada (ou via edição nas configs, para definir o no. da pausa)*/}
                <button onClick={() => handlePhaseClick('Lbreak', 'lBreak')} id="lBreak" className={activeButton === 'lBreak' ? "active" : ''}>Long break</button> 
            </div>

            <input 
            type='text' 
            id='Countdown' 
            className='text-center' 
            value={timeConverted}
            disabled={true}
            />
            
            {/* <EditClockIcon onClickFct={}/> */}

            <button onClick={handleStartPause} 
            id='StartStopButton' className='btn btn-outline-light mt-3'>
                {isActive ? 'Pause' : 'Focus!'}
            </button>

        </div>
    )
}