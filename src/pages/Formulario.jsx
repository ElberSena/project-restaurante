import { React, useState, useRef } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'

const Formulario = ({ numPeople, date, time }) => {
    //Criando o formulário de contato
    const name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    const phone = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault();

        //Parâmetros do template
        const templateParams = {
            from_name: name.current.value,
            email: email.current.value,
            message: message.current.value,
            phone: phone.current.value,
            numPeople: date.toLocaleDateString('pt-PT'),
            time: time
        };

        emailjs.send('service_jkca6qd', 'template_4ln73rg', templateParams, '5B-CNrQTrOssQy8-1')
            .then((resp) => {
                console.log("Email enviado", resp.status, resp.text)
                name.current.value = '';
                email.current.value = '';
                message.current.value = '';
                phone.current.value = '';
            }, (err) => {
                console.log('Error:', err)
            })
    }

    return (
        <section className='form-block'>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <h2 className='text-holder text-center'>Contato</h2>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col md={6}>
                        <Form className='form-content' onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="nameInput">
                                <Form.Label>Digite seu nome</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu nome" ref={name} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="emailInput">
                                <Form.Label>Digite seu email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" ref={email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phoneInput">
                                <Form.Label>Digite seu telefone</Form.Label>
                                <Form.Control type="text" placeholder="+351 000 000 000" ref={phone} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="messageInput">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} ref={message} />
                            </Form.Group>
                            <div className='mb-3'>
                                <p><strong>Número de pessoas</strong> {numPeople}</p>
                                <p><strong>Data da reserva:</strong> {date.toLocaleDateString('pt-BR')}</p>
                                <p><strong>Hora da reserva:</strong> {time}</p>
                            </div>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Formulario;