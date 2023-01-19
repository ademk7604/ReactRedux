import React from 'react'
import ProductCart1 from "./product-card1"
import data from "./data.json"
import { Col, Container, Row } from 'react-bootstrap'
import "./syle.scss"


const ProductList1 = () => {
  return (
    <Container>
        <Row>
        {data.map((dat) =>(
            <Col key={dat.id} md={3} lg={4}>
                <ProductCart1 {...dat}/>
            </Col>
            ))}
        </Row>
    </Container>
  )
}

export default ProductList1