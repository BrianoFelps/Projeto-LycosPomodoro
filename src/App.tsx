import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LycosLogoWName from './assets/LycosLogoWName.png'


function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter> */}
      <div> <img src={LycosLogoWName} alt="" width={200}/></div>
      
    </>
  )
}

export default App
