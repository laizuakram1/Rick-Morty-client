
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllCast from './Components/AllCast/AllCast';
import Home from './Components/Home';

function App() {
  return (
    <div class="container mx-auto" id='Home'>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/all' element={<AllCast></AllCast>}></Route>

     </Routes>
     
    </div>
  );
}

export default App;
