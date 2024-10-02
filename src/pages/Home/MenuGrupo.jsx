import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';


const menuGrupoData = [
  {
    id: 1,
    type: 'Menu 1',
    starters: ['Soup Miso', 'Guioza (carne ou legumes)'],
    mainDish: ['6 sashimi (salmão, polvo, peixe branco)', '4 Nigiri (salmão ou atum)', '4 Huramaki (salmão ou atum)', '4 Hot Filadélfia'],
    dessert: ['Petit Gateau', 'Fruta da estação'],
    price: '22 €'
  },
  {
    id: 2,
    type: 'Menu 2',
    starters: ['Soup Miso', 'Guioza (carne ou legumes)'],
    mainDish: ['Yakisoba', '5 sashimi  de salmão brazeado', ' 4 Hot Uramaki de salmão', '4 Camarão empanado'],
    dessert: ['Petit Gateau', 'Fruta da estação'],
    price: '22 €'
  },
  {
    id: 3,
    type: 'Menu 3',
    starters: ['Soup Miso', 'Guioza (carne ou legumes)'],
    mainDish: ['Salada de vegetais', '5 Hot roll de frutas', '4 Nigiri de abacate', '4 Uramaki de morango'],
    dessert: ['Petit Gateau', 'Fruta da estação'],
    price: '22 €'
  },
]

function MenuGrupo() {
  return (
    <section className='block menuGrupo-block'>
      <Container fluid>
        <div className='title-holder'>
          <h2>Menu para grupos</h2>
        </div>
        <Row>
          {
            menuGrupoData.map(menu => {
              return (
                <Col sm={4} key={menu.id}>
                  <div className='content'>
                    <ListGroup className='block'>
                      <ListGroup.Item className='heading'><h3>{menu.type}</h3></ListGroup.Item>
                      <ListGroup.Item><h4>Entrada</h4></ListGroup.Item>
                      {
                        menu.starters.map((starters, index) => {
                          return (
                            <ListGroup.Item key={index}>{starters}</ListGroup.Item>
                          )
                        })
                      };
                    </ListGroup>
                    <ListGroup className='block'>
                      <ListGroup.Item><h4>Prato Principal</h4></ListGroup.Item>
                      {
                        menu.mainDish.map((mainDish, index) => {
                          return (
                            <ListGroup.Item key={index}>{mainDish}</ListGroup.Item>
                          )
                        })
                      };
                    </ListGroup>
                    <ListGroup className='block'>
                      <ListGroup.Item><h4>Sobremessa</h4></ListGroup.Item>
                      {
                        menu.dessert.map((dessert, index) => {
                          return (
                            <ListGroup.Item key={index}>{dessert}</ListGroup.Item>
                          )
                        })
                      };
                    </ListGroup>
                    <ListGroup className='block'>
                      <ListGroup.Item><span className='price'>{menu.price}</span></ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default MenuGrupo