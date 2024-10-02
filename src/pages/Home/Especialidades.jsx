import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import Meat from '../../assets/images/meat.jpg';
import Soup from '../../assets/images/soup.jpg';
import Desert from '../../assets/images/desert.jpg';


//Data Cards
const data = [
    {
        image: Meat,
        title: 'Bone-in Ribeye Yuzu Truffle Butter Sauce',
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus quo voluptatum vitae at reprehenderit nulla numquam quibusdam.`
    },
    {
        image: Soup,
        title: 'Miso Soup with Tofu',
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus quo voluptatum vitae at reprehenderit nulla numquam quibusdam.`
    },
    {
        image: Desert,
        title: 'Assian Cheesecake',
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus quo voluptatum vitae at reprehenderit nulla numquam quibusdam.`
    },
];

function Especialidades() {
    return (

        <section className='about_wrapper'>
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} className='text-center mb-5'>
                        <h2>Especialidades</h2>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>{data.map((cardData, index) => (
                    <Col md={6} lg={4} className='mb4 mb-md-0' key={index}>
                        <div className='about_box text-center'>
                            <div className='about_icon'>
                                <img src={cardData.image} className='img-fluid' alt='meat' />
                            </div>
                            <h4>{cardData.title}</h4>
                            <p>{cardData.paragraph}</p>
                        </div>
                    </Col>
                ))}</Row>
            </Container>
        </section>

    )
}

export default Especialidades