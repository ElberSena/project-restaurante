import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const testimonialsData = [
    {
        id: 1,
        name: 'Carlos Cesar',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, alias sit possimus tenetur, officiis, illo laboriosam deleniti est ipsa aliquid reprehenderit modi iusto rerum.'
    },
    {
        id: 2,
        name: 'Bruna Bacelar',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, alias sit possimus tenetur, officiis, illo laboriosam deleniti est ipsa aliquid reprehenderit modi iusto rerum.'
    },
    {
        id: 3,
        name: 'Fabio Silva',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, alias sit possimus tenetur, officiis, illo laboriosam deleniti est ipsa aliquid reprehenderit modi iusto rerum.'
    }
]

function Testimonials() {
    return (
        <section className='testimonials-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Testemunho dos Clientes</h2>
                    <div className='subtitle'>O que os clientes falam sobre nós</div>
                </div>
                <Carousel controls={false}>
                    {
                        testimonialsData.map(testimonials => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                    <blockquote>
                                        <p>{testimonials.description}</p>
                                        <cite>
                                            <span className='name'>{testimonials.name}</span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </Container>
        </section>
    )
}

export default Testimonials