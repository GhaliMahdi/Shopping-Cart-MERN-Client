import axios from "axios"
import React, { useEffect, useState } from "react"
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ShoppingCartContext } from "../App";
import { useContext } from "react";

const NUM_OF_COLUMNS = 3;

const ProductCard = ({product, addProductToCart}) => {
    return (
        <div key={product._id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                    {product.description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => addProductToCart(product)}>Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
    )
}
export const Products = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useContext(ShoppingCartContext);

    const addProductToCart = (product) => {
        setCart([...cart, product]);
    }
    useEffect( () => {
        const fetchProducts = async () => {
            const {data: prods} = await axios.get("http://localhost:3000/products");
            setProducts(prods);
        }
        fetchProducts();
    }, []);

    const getProductsInColumn = (products, numberOfColumns, column) => {
        return products.filter((col, index) => index % numberOfColumns === column);
    };

    return (
        <Container>
            <Row>
                {new Array(NUM_OF_COLUMNS).fill('').map((value, index) => (
                    <Col>
                    {
                    getProductsInColumn(products, NUM_OF_COLUMNS, index)
                    .map((product) => 
                    ( 
                        <ProductCard 
                            product={product} 
                            addProductToCart={addProductToCart} 
                        /> 
                    ))
                    }
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products;