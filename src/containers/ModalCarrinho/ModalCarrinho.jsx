import React, { useContext } from 'react'
import { Table, Row, Col, Container, Button } from 'react-bootstrap';

import { CartContext } from '../../context/CartContex';
import Modal from '../../components/Layout/Modal';



function ModalCarrinho() {
     const { open, cartItems=[], removeItemCard, handleClose } = useContext(CartContext)
    
     //Funcão para calcular o total
     const calculeSubTotal = (item) => {
        return item.price * item.quantity;
     }

     //Função para calcular o total dos itens
     const calculeTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
     }


    return (
        
        <Modal
            open={open}
            title="Seu Carrinho"
            size="lg"
        >
        <Container className='cart-page my-5'>

            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio!</p>
            ) : (
                <Row>
                    <Col lg={8}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Preço</th>
                                    <th>Quantidade</th>
                                    <th>SubTotal</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.price}€</td>
                                        <td>{item.quantity}</td>
                                        <td>{calculeSubTotal(item).toFixed(2)}€</td>
                                        <td>
                                            <Button variant='danger' size='sm' onClick={() => removeItemCard(item.id)}>
                                                Remover
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col lg={4}>
                        <div className='cart-summary p-3 border rounded'>
                            <h4 className='h5'>Total do Pedido</h4>
                            <p>{calculeTotal()}€</p>
                            <Button variant='primary' className='w-100 my-3'>
                                Finalizar Compra
                            </Button>
                            <Button variant='secondary' className='w-100' href='/menu' onClick={handleClose} >
                                Continuar Comprando
                            </Button>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
        </Modal>
    )
}

export default ModalCarrinho