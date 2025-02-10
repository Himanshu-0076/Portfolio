import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
// import About from './components/About';

function App() {
  return (
  
      //  <div>
      //   <Routes>
      //   <Route path='/' element={<Homepage />} />
      //   {/* <Route path='/about' element={<About />} /> */}
      //   </Routes>
      //  </div>
      <div>
        <BrowserRouter>
        <Route path='/' element={<Homepage/>} />
        {/* <Route path='/about' element={<About />} /> */}        
        </BrowserRouter>
      </div>
      
   
    
  );
}

export default App;
