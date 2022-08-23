
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Ajouter from './components/pages/Ajouter';
import Articles from './components/pages/Articles';
import Apropos from './components/pages/Apropos';


function App() {
  return( 
    <div className='app'>
  <Header/>
  <Routes>
    <Route path ="Articles" element ={<Articles/>}/>
    <Route path ="Ajouter" element ={<Ajouter/>}/>
    <Route path ="Apropos" element ={<Apropos/>}/>
  </Routes>
</div>

);
 
   
}

export default App;
