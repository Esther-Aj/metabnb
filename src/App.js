import './App.css';
import Modal from './Components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Place from './Components/Place';
import{Routes, Route} from 'react-router-dom';



function App() {


  return (
   
<>

   <Routes>
   <Route path='modal' element={<Modal/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='place' element={<Place/>}></Route>
    
   </Routes>
   </>
  );
}

export default App;
