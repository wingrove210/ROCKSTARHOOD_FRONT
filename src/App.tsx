import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Catalog from './components/Catalog/Catalog'
// import Details from './pages/Details/Details'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Catalog/>}/>
        <Route path='/product/:id' element={<Details/>}/> */}
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
