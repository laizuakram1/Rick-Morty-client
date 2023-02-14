
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllCast from './Components/AllCast/AllCast';
import CastDetails from './Components/CastDetails/CastDetails';
import Home from './Components/Home';

function App() {
  return (
    <div class="container px-10">
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/all' element={<AllCast></AllCast>}></Route>
      <Route path='/details/:id' element={<CastDetails></CastDetails>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
