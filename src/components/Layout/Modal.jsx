import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContex';
import Button from 'react-bootstrap/Button';
import ModalBS from 'react-bootstrap/Modal';


function Modal({title, children, open, controls = [], size}) {

    const {handleClose } = useContext(CartContext)
    return (
        <ModalBS show={open} onHide={handleClose} className='content-modal' size={size}>
            <ModalBS.Header closeButton>
                <ModalBS.Title className='modal-title '>{title}</ModalBS.Title>
            </ModalBS.Header>
            <ModalBS.Body className='modal-content-body'>
                {children}
            </ModalBS.Body>
            <ModalBS.Footer className='content-modal-button'>
                {controls.map((control, controlIndex) => (
                    <Button key={controlIndex} variant={control.variant} onClick={control.onClick} >
                        {control.label}
                    </Button>
                ))}
            </ModalBS.Footer>
        </ModalBS>
    )
}

export default Modal