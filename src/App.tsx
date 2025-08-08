import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Catalog from './components/Catalog/Catalog'
// import Details from './pages/Details/Details'
import Home from './pages/Home/Home'
import Drop from './pages/Drop/Drop';
import Catalog from './components/Catalog/Catalog';
import ProductPage from './components/Catalog/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/drop' element={<Drop/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/product/:id" element={<ProductPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
