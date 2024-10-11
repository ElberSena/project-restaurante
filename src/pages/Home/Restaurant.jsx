import React from 'react';
import Layout from "../../components/Layout/Layout";

import "../../styles/HomeStyle.css";

import About from './About';
import Especialidades from './Especialidades';
import Menu from './Menu';
import MenuGrupo from './MenuGrupo';
import Testimonials from './Testimonials';
import Reservas from './Reservas';






const Restaurant = () => {
  return (


    <main>
      {/*Home Section About */}
      <About />

      {/*Home Section Especialidade */}
      <Especialidades />

      {/*Home Section Menu */}
      <Menu />

      {/*Home Section Menu Grupo */}
      <MenuGrupo />

      {/*Home Section Testimonials */}
      <Testimonials />

      {/*Home Section Reservas */}
      <Reservas />

    </main>


  )
}

export default Restaurant;