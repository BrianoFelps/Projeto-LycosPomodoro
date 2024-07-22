import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InitialPage from './Pages/InitialPage';
import MainPage from './Pages/MainPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialPage/>}/>
          <Route path='/m' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
