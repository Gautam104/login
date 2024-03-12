import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Ragister from './pages/Ragister';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/ragister' element={<Ragister/>} ></Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
