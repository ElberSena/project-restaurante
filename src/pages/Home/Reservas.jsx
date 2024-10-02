import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import pt from 'date-fns/locale/pt';
import emailjs from '@emailjs/browser';
import MapRestaurant from '../../containers/Mapa/MapRestaurant';


function Reservas() {
    const numberPeople = ["1 Pess.", "2 Pess.", "3 Pess.", "4 Pess.", "5 Pess."];
    const horas = ["18:00", "18:30", "19:00", "19:30", "20:00"];

    // Estado para reserva
    const [numPeople, setNumPeople] = useState("Nº de pessoas");
    const [hora, setHora] = useState("Horas");
    const [startDate, setStartDate] = useState(new Date());

    // Estado do formulário
    const name = useRef(null);
    const email = useRef(null);
    const telefone = useRef(null);
    const message = useRef(null);

    const handleSelectPeople = (e) => setNumPeople(e);
    const handleSelectHora = (e) => setHora(e);

    const sendEmail = (e) => {
        e.preventDefault();
        const templateParams = {
            from_name: name.current.value,
            email: email.current.value,
            telefone: telefone.current.value,
            message: message.current.value,
            reserva_info: `Reserva para ${numPeople} pessoas às ${hora} na data ${startDate.toLocaleDateString()}`,
        };

        emailjs.send('service_jkca6qd', 'template_4ln73rg', templateParams, '5B-CNrQTrOssQy8-1')
            .then((resp) => {
                console.log("Email enviado", resp.status, resp.text);
                name.current.value = '';
                email.current.value = '';
                telefone.current.value = '';
                message.current.value = '';
                setNumPeople('');
                setHora('');
            }, (err) => {
                console.log('Error:', err);
            });
    };

    return (
        <section className='content'>
            <div className='text-holder text-center'>
                <h1>Reservas</h1>
            </div>

            <div className="container-reserve">
                <div className="container-reserve-persona">
                    <span><i className="bi bi-person"></i></span>
                    <DropdownButton title={numPeople} onSelect={handleSelectPeople}>
                        {numberPeople.map((number, index) => (
                            <Dropdown.Item eventKey={number} key={index}>{number}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
                <div className="container-reserve-date">
                    <span><i className="bi bi-calendar3"></i></span>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" locale={pt} />
                </div>
                <div className="container-reserve-hours">
                    <span><i className="bi bi-clock"></i></span>
                    <DropdownButton title={hora} onSelect={handleSelectHora}>
                        {horas.map((hora, index) => (
                            <Dropdown.Item eventKey={hora} key={index}>{hora}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
            </div>

            <div className="container-form">
                <Container className='mt-5'>
                    <Row>
                        <Col>
                            <h2 className='text-center'>Contato</h2>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col md={6}>
                            <Form onSubmit={sendEmail}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Digite seu nome" ref={name} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" ref={email} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type="tel" placeholder="+351 999 999 999" ref={telefone} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mensagem</Form.Label>
                                    <Form.Control as="textarea" rows={3} ref={message} />
                                </Form.Group>
                                <Button variant="primary" type="submit">Enviar</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <div className='content-map'>
                   <MapRestaurant />
                </div>
            </div>
        </section>
    );
}

export default Reservas;