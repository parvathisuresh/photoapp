import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Index from './components/Index'
import Navbar from './components/Navbar';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/view' element={<View/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;