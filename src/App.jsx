
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Ajouter from './components/pages/Ajouter';
import Articles from './components/pages/Articles';
import Apropos from './components/pages/Apropos';
import Footer from './components/Footer';
import Home from './components/pages/Home';


function App() {
  return( 
    <div className='app'>
  <Header/>
  <Routes>
    <Route path ="Home" element={<Home/>}/>
    <Route path ="Articles" element ={<Articles/>}/>
    <Route path ="Ajouter" element ={<Ajouter/>}/>
    <Route path ="Apropos" element ={<Apropos/>}/>
  </Routes>
  <Footer/>
</div>

);
 
   
}

export default App;
