import axios from "axios"
import React, { useEffect, useState } from "react"
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ShoppingCartContext } from "../App";
import { useContext } from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


const NUM_OF_COLUMNS = 3;

const ProductCard = ({product, addProductToCart}) => {
    return (
        <Card key={product._id} className="mb-4">
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => addProductToCart(product)}>Add to cart</Button>
            </Card.Body>
        </Card>         
    )
}
export const Products = () => {
    
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [cart, setCart] = useContext(ShoppingCartContext);
    const [showToast, setShowToast] = useState(false);

    const addProductToCart = (product) => {
        setCart([...cart, {...product}]);
        setShowToast(true);
    }
    useEffect( () => {
        const fetchProducts = async () => {
            const {data: prods} = await axios.get("http://localhost:3000/products");
            setProducts(prods);
        }
        fetchProducts();
    }, []);
    const getFiltredProducts = (product) => {
        return products.filter(product => product.name.includes(search));
    }

    const getProductsInColumn = (products, numberOfColumns, column) => {
        return products.filter((col, index) => index % numberOfColumns === column);
    };
    const onSearchChange = (e) => {
        setSearch(e.currentTarget.value);
    }
    return (
        <>
        <ToastContainer className="p-3 position-fixed" position={"top-center"}>
          <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
            <Toast.Header closeButton={true}>
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </ToastContainer>
        <Container>
            <Row>
                <Col>
                <Form.Control 
                size="lg" 
                type="text"
                value={search} 
                className="mb-4 mt-4"
                placeholder="Search for a product"
                onChange={onSearchChange} />
                </Col>
            </Row>
            <Row>
                {new Array(NUM_OF_COLUMNS).fill('').map((value, index) => (
                    <Col>
                    {
                    getProductsInColumn(
                        getFiltredProducts(products), 
                        NUM_OF_COLUMNS, 
                        index)
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
        </>
    )
}

export default Products;