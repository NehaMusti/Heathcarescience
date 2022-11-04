import { Routes,Route} from 'react-router-dom';
import "./App.css";
import Navbar from './Navbar/Navbar';
import CardData from './components/CardData';
import Display from './components/Display';
import Ourscience from './components/Ourscience';
import Aboutus from './components/Aboutus';
import Events from './components/Events';


function App(){
  return(
    
<Routes>
<Route path='/'element={<CardData/>}/>
<Route path='/Home'element={<Navbar/>}/>
<Route path='/Aboutus'element={<Aboutus/>}/>
<Route path='/Ourscience'element={<Ourscience/>}/>
<Route path='/Ourpatients/Display/:id'element={<Display/>}/>
<Route path='/Ourpatients'element={<CardData/>}/>
<Route path='/Events'element={<Events/>}/>
</Routes>

    );
}
export default App;

