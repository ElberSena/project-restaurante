import {React, useContext} from 'react'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContex'




function Cards({ image, rating, title, paragraph, price, renderRatingIcons }) {

  const { addToCard } = useContext(CartContext);

  const handleAddToCart = () => {
    const produt = { id: title, image, price};
    addToCard(produt);
  };

  
  return (
    <Col sm={6} lg={4} xl={3} className='mb-4'>
      <Card className='overflow-hidden'>
        <div className='overflow-hidden'>
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='item_ratins'>{renderRatingIcons(rating)}</div>
            <div className='wishlist'>
              <i class='bi bi-heart'></i>
            </div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className='d-flex algn-items-center justify-content-between'>
            <div className='menu_price'>
              <h5 className='mb-0'>{price} €</h5>
            </div>
            <div className='add_to_card'>
              <Link onClick={handleAddToCart}>
                <i className='bi bi-bag me-2'></i>
                Add to Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Cards