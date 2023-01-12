import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from "axios";
import { useContext } from 'react';
import { UserContext } from '../App';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DEFAULT_FORM_OBJECT = {
    name: "",
    cost: 0,
    description: ""
};

export const  EditProduct = () => {
    const [form, setForm] = useState(DEFAULT_FORM_OBJECT)
    const [user] = useContext(UserContext);
    const { prodId } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data: product } = await axios.get(
                `http://localhost:3000/products/${prodId}`
              );
        };
        getProduct();
    }, [])

    const updateFormValue = (key, value) => {
        setForm({
            ...form,
            [key]: value
        })
    };

  return (
    <Container>
        <Row>
            <Col></Col>
            <Col xs={8}>
            <h2>Create Product</h2>
            <Form >
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    onChange={(e) => {
                        updateFormValue('name', e.currentTarget.value)
                    }} 
                    type="name" 
                    value={form.name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCost">
                <Form.Label>Cost</Form.Label>
                <Form.Control 
                    onChange={(e) => {
                        updateFormValue('cost', e.currentTarget.value)
                    }} 
                    type="number" 
                    value={form.cost} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Product Description</Form.Label>
                <Form.Control 
                    onChange={(e) => {
                        updateFormValue('description', e.currentTarget.value)
                    }}  
                    as="textarea" 
                    rows={3} 
                    value={form.description} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  )
}
