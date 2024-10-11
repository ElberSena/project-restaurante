import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-1.png'
import '../../styles/HeaderStyle.css'
import { CartContext } from '../../context/CartContex';




function Header() {
  const { cartItems, handleOpen } = useContext(CartContext);

  const [nav, setNav] = useState(false);

  //Scroll NavBar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  // const {handleOpen} = useContext(CartContext);
  return (
    <header>

      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand href="#Restaurant">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Restaurante</Nav.Link>
              <Nav.Link as={Link} to="/especialidades">Especialidades</Nav.Link>
              <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/menuGrupo">Menu Grupo</Nav.Link>
              <Nav.Link as={Link} to="/reservas">Reservas</Nav.Link>
              <Nav.Link as="button" onClick={handleOpen} >
                <div className='cart'>
                  <i className="bi bi-bag fs-5"></i>
                  <em className='roundpoint'>{cartItems.length}</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>

  )
};

export default Header;