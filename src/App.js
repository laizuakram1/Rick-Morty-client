
import './App.css';
import Banner from './Components/Banner/Banner';
import Episodes from './Components/Episodes/Episodes';
import Locations from './Components/Locations/Locations';
import MeetCast from './Components/MeetCast/MeetCast';

function App() {
  return (
    <div class="container mx-auto" id='Home'>
      <h4 className='text-white'>Home</h4>
    <Banner></Banner>
    <MeetCast></MeetCast>
    <Episodes></Episodes>
    <Locations></Locations>
    </div>
  );
}

export default App;
