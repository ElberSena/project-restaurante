import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Restaurant from '../src/pages/Home/Restaurant'
import { CartProvider } from './context/CartContex';
import Layout from './components/Layout/Layout';
import Especialidades from './pages/Home/Especialidades';
import Menu from './pages/Home/Menu';
import MenuGrupo from './pages/Home/MenuGrupo';
import Reservas from './pages/Home/Reservas';
import Legal from './pages/Legal';
import About from './pages/Home/About';



function App() {


  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Restaurant />} />
            <Route path='/about' element={<About />} />
            <Route path='/especialidades' element={<Especialidades />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menuGrupo' element={<MenuGrupo />} />
            <Route path='/reservas' element={<Reservas />} />
            <Route path='/legal' element={<Legal />} />
            <Route />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>


  )
}

export default App
