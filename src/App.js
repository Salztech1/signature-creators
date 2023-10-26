import './App.css';
 import {BrowserRouter, Routes, Route} from 'react-router-dom'
 import Welcome from './Navbar/Welcome';
 import AboutUs from './Navbar/AboutUs';
 import Services from './Navbar/Services';
 import Contact from './Navbar/Contact';
 //import Navbar from './Navbar/Navbar';
 import Navbar from './Navbar/Navbar';
 
function App() {
  return (
    <BrowserRouter>
    <div className="">
    
    <Navbar/>
    
      
      <Routes>
      {/* <Body /> */}
     
      <Route exact path='/' Component={Welcome} />
      <Route exact path='/about' Component={AboutUs} />
      <Route exact path='/services' Component={Services} />
      <Route exact path='/contact' Component={Contact} />
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
