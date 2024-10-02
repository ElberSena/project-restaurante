import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Localização</h5>
              <p>Tv. da Fonte Velha</p>
              <p>Terrugem, Sintra, 2715-311</p>
              <p>Portugal</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Horário Funcionamento</h5>
              <p>Seg-Sex: 11:00 - 22:00</p>
              <p>Sábado: 11:00 - 23:00</p>
              <p>Domingo: 11:00 - 20:00</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Contato</h5>
              <p>Lorem ipsum dolor sit.</p>
              <p>
                <Link to='tel:999888777' className='calling'>999 888 777</Link>
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Sigam-nos</h5>
              <p>Lorem ipsum dolor sit.</p>
              <ul className='list-unstyled text-center mt-2'>
                <li>
                  <Link to='/'>
                    <i className='bi bi-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='bi bi-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='bi bi-instagram'></i>
                  </Link>
                </li>               
              </ul>
            </div>
          </Col>
        </Row>
        <Row className='copy_right'>
          <Col>
            <div>
              <ul className='list-unstyled text-center mt-0'>
                <li>
                  <Link to='/'>
                    © 2024 <span>Asian Restaurant</span>. Todos os direitos reservados.
                  </Link>
                </li>
                <li>
                  <Link to='/about'>
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link to='/legal'>
                    Termo de Uso
                  </Link>
                </li>
                <li>
                  <Link to='/legal'>
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer