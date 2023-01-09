import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ShoppingCartContext } from "../App";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ShoppingCartItem = ({product, removeProduct}) => {
    return (
        <Card key={product._id} className="mb-4">
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => removeProduct(product)}>Remove from cart</Button>
            </Card.Body>
        </Card>         
    )
}



export const CartPage = () => {
    const [cart, setCart] = useContext(ShoppingCartContext);
    const removeProduct = (product) => {
        setCart(cart.filter((productInCart) => productInCart !== product))
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Your Cart : {cart.length}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {cart.map(
                        product => 
                        <ShoppingCartItem product={product}
                        removeProduct={removeProduct} 
                        />
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
};