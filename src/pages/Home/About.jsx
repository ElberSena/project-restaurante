import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Sushi from "../../assets/images/hero1.jpg"
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <section className="hero_section">
        <Container>
            <Row>
                <Col lg={7} className="mb-5 mb-lg-0">
                    <div className="position-relative">
                        <img src={Sushi} alt='Hero' className='img-fluid' />
                        <div></div>
                    </div>
                </Col>
                <Col>
                    <div className='hero_text text-center'>
                        <h1 className='text-white'>O melhor deste lugar.</h1>
                        <p className='text-white pt-2 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque recusandae illo omnis in enim perferendis fuga nisi neque, repellat similique optio ipsum harum, delectus, facilis ea reiciendis maiores commodi deserunt.</p>
                        <Link to="/menu" className='btn order_now'>Peça Agora</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section className='about_section'>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className='text-center'>
                            <h2>Sobre este Lugar</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus quo voluptatum vitae at reprehenderit nulla numquam quibusdam. Vero pariatur possimus dolorem ullam, eveniet corrupti blanditiis veritatis asperiores neque vitae.
                            </p>
                            <Link to='/menu' className='btn_ order_now btn_red'>
                                Explore o Menu
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
    </>
    
  )
}

export default About