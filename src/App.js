import react from 'react';
import './App.css';
import Auth from './components/auth';
import Create from './components/create';
import Read from './components/rud';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar';
import ImageUpload  from './components/imageUpload';

function App() {


  return (
    <div className="App">
      <Router>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/create' element={ <Create/>}/>
        <Route path='/read' element={<Read />}/>
        <Route path='/image' element={<ImageUpload/>}/>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
