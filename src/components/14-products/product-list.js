import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './product'
import products from "./products.json";

const ProductList = () => {
  return (
    <Container>
        <Row>
        {products.map((product) =>(
            <Col key={product.id} md={3} lg={4}>
                <Product {...product}/>
            </Col>
            ))}
        </Row>
    </Container>
  )
}

export default ProductList