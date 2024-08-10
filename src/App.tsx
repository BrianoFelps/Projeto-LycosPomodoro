import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedPage from './Pages/InitialPage';
import MasterPage from './Pages/MasterPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FeedPage/>}/>
        <Route path='/Master' element={<MasterPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
