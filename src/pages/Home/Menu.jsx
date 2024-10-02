import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../../components/Layout/Cards';
import { CartContext } from '../../context/CartContex';





//Data Cards


  //Rating Logical Data
  const renderRatingIcons = (rating) => {
    const stars = [];

    for (let i=0; i < 5; i++) {
      if (rating > 0.5) {
        stars.push(<i Key={1} class="bi bi-star-fill" ></i>);
        rating--;
      } else if( rating > 0 && rating < 1) {
        stars.push(<i Key={'half'} class="bi bi-star-half"></i>);
        rating--;
      } else {
        stars.push(<i Key={`empty${i}`} class="bi bi-star"></i>);
      }
    }
    return stars;
  };

function Menu() {

  const data = useContext(CartContext);


    return (
        <>
            <section className='menu_section'>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className='text-center mb-5'>
                            <h2>Menu</h2>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est, fugit magnam hic.</p>
                            
                        </Col>
                    </Row>
                    <Row className='card-menu'>
                        {data.product.map((cardData) => (
                        <Cards
                        key={cardData.id}
                        image={cardData.image}
                        rating={cardData.rating}
                        title={cardData.title}
                        paragraph={cardData.paragraph}
                        price={cardData.price}
                        renderRatingIcons={renderRatingIcons}
                        />
                    )) }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Menu