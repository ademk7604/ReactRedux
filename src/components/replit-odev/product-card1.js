import React from 'react'
import { Card } from 'react-bootstrap';
import {AiOutlineStar, AiTwotoneStar} from "react-icons/ai"

const ProductCart1 = (props) => {
    const {title, image, price, discount, rate} = props;
    const total = price- price*discount/100;


  return (
    <Card className= 'CardName h-60'>
      <Card.Img variant="top" src={require(`./images/${image}`)} />
      <Card.Body  className="text-center d-flex flex-column justify-content-between align-items-center">
        <Card.Title variant="warning">
            {[...new Array(5)].map((index)=> (index <rate ? <AiTwotoneStar/> : <AiOutlineStar/>))}</Card.Title>
        <Card.Title className='fs-2'><strong>${title}</strong></Card.Title>
        {discount!==0 ? (
            <>
        <Card.Title className='discountName fs-2'>-{discount}% </Card.Title>
        <Card.Text className='fs-2 text-success'><strong><del>{price}</del> {total} </strong></Card.Text>
        </>
        ) : (<Card.Text className='fs-2 text-success'><strong>{price}</strong></Card.Text>)}
        
      </Card.Body>
    </Card>
  )
}

export default ProductCart1