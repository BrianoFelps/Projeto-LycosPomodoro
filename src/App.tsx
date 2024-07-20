import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InitialPage from './Pages/InitialPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
