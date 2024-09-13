import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import '@fontsource/montserrat'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MasterPage from './Pages/MasterPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MasterPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
