import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Joblist from './components/Joblist';
import Applyjob from './components/Applyjob'
import Candidates from './components/Candidates';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/joblist' element={ <Joblist/>}/>
        <Route path='/Applyjob'  element={ <Applyjob/>}/>
        <Route path='/candidate'  element={ <Candidates/>}/>

      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
