import "./LycosTimer.css"
import EditClockIcon from "./EditClockIcon"

export default function LycosTimer () {
    // const [value, setValue] = useState<string>("25:00");

    return(
        <div id='CountdownContainer' className="my-5 bg-success">

            <div id="PhaseMenu" className="w-100 d-flex align-items-center justify-content-center">
                <button>Focus</button>
                <button>Break</button>
                <button>Long break</button>
                /* Tenho a ideia de desabilitar esse aqui enquanto  a 3a pausa não for alcançada (ou via edição nas configs, para definir o no. da pausa)*/
            </div>

            <input 
            type='text' 
            id='Countdown' 
            className='text-center' 
            value={"25:00"}
            disabled={true}
            />
            
            <EditClockIcon/>

        </div>
    )
}